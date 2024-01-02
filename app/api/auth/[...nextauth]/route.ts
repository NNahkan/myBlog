import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt'
import prisma from '@/db'

const handler = nextAuth({
	session: {
		strategy: 'jwt'
	},
	pages: {
		signIn: "/login"
	},
	providers: [CredentialsProvider({
		credentials: {
			email: {},
			password: {}
		},
		async authorize(credentials, req) {
			const user = await prisma.user.findFirst({
				where: {
					email: credentials?.email
				}
			})
			const isPasswordCorrect = await bcrypt.compare(credentials?.password || "", user?.password || "")
			console.log(user, ` password is ${isPasswordCorrect}`)
			if (isPasswordCorrect) {
				return {
					id: user?.id,
					email: user?.email,
				}
			}
			// console.log({ credentials })
			return null
		}
	})]
})

export { handler as GET, handler as POST }