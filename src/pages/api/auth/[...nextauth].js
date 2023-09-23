import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { create_user, get_user_by_email } from '@/backend/db/user'

let user_id = null

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async signIn({ account, profile }) {
            if (account.provider === 'google') {
                const existed_user = await get_user_by_email(profile.email)
                if (!existed_user) {
                    try {
                        const [name, last_name, email, email_verified, profile_img] = [
                            profile.given_name,
                            profile.family_name,
                            profile.email,
                            profile.email_verified,
                            profile.picture,
                        ]
                        const user = await create_user({ name, last_name, email, email_verified, profile_img })
                        user_id = user.id
                        return user
                    } catch (error) {
                        console.log(error)
                    }
                }
                user_id = existed_user.id
                return true
            }
            return true // Do different verification for other providers that don't have `email_verified`
        },
        async session({ session, user, token }) {
            console.log({ session, user, token })
            session.user = {
                ...session.user,
                user_id
            }
            return session
          },
    },
}

export default NextAuth(authOptions)
