import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { create_user, get_user_by_email } from '@/backend/db/user'
import CredentialsProvider from 'next-auth/providers/credentials'
import { comparePassword } from '@/backend/user/password'
import { getUserByEmail } from '@/requests/user'

let user_id = null
let client_id = null

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Email and password',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: { label: 'Email', type: 'email', placeholder: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                const user = await getUserByEmail({ email: credentials.email })

                if (!user.data) {
                    return null
                }

                const passwordMatch = await comparePassword(credentials.password, user.data?.password)

                if (!passwordMatch) {
                    return null
                }

                return user
            },
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
                        client_id = user.client_id
                        return user
                    } catch (error) {
                        console.log(error)
                    }
                }
                user_id = existed_user.id
                client_id = existed_user.client_id
                return true
            }
            return true // Do different verification for other providers that don't have `email_verified`
        },
        async session({ session, user, token }) {
            // const verified_user = await get_user_by_email(session.user.email)
            // session.user.user_id = verified_user.id
            // session.user.client_id = verified_user.client_id
            return session
        },
    },
}

export default NextAuth(authOptions)
