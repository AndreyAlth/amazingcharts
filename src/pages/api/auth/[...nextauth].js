import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { create_user, get_user_by_email } from '@/backend/db/user'
import CredentialsProvider from 'next-auth/providers/credentials'
import { hashPass } from '@/backend/user/password'

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
                // username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
                email: { label: 'Email', type: 'email', placeholder: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials, req) {
                // const a = await hashPass(credentials.password)
                // console.log(a)
                return null
                // You need to provide your own logic here that takes the credentials
                // submitted and returns either a object representing a user or value
                // that is false/null if the credentials are invalid.
                // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
                // You can also use the `req` object to obtain additional parameters
                // (i.e., the request IP address)
                // const res = await fetch('/your/endpoint', {
                //     method: 'POST',
                //     body: JSON.stringify(credentials),
                //     headers: { 'Content-Type': 'application/json' },
                // })
                // const user = await res.json()

                // If no error and we have user data, return it
                // if (res.ok && user) {
                //     return user
                // }
                // Return null if user data could not be retrieved
                // return null
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
            const verified_user = await get_user_by_email(session.user.email)
            session.user.user_id = verified_user.id
            session.user.client_id = verified_user.client_id
            return session
        },
    },
}

export default NextAuth(authOptions)
