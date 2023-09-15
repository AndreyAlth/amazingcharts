import NextAuth from 'next-auth'
// import GithubProvider from "next-auth/providers/github"
import GoogleProvider from 'next-auth/providers/google'
import { create_user, get_user_by_email } from '@/backend/db/user'
import { create_client } from '@/backend/db/client'

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
                        const name = profile.name
                        const client = await create_client({ name })
                        try {
                            const [client_id, name, last_name, email, email_verified, profile_img] = [
                                client.id,
                                profile.given_name,
                                profile.family_name,
                                profile.email,
                                profile.email_verified,
                                profile.picture,
                            ]
                            const user = await create_user({ client_id, name, last_name, email, email_verified, profile_img })
                            return user
                        } catch (error) {
                            console.log(error)
                        }
                    } catch (error) {
                        console.log(error)
                    }
                }
                return true
            }
            return true // Do different verification for other providers that don't have `email_verified`
        },
    },
}

export default NextAuth(authOptions)
