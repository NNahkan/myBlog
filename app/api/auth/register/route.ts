import { NextApiRequest, NextApiResponse } from "next"
import { NextResponse } from "next/server"
import bcrypt from "bcrypt";
import prisma from "@/db"


export async function POST(req: Request) {
	try {
		const { email, password } = await req.json();
		console.log(email, password)

		const hashedPassword = await bcrypt.hash(password, 10)
		const response = await prisma.user.create({
			data: {
				email,
				password: hashedPassword
			}
		})
		console.log(response)
	} catch (error) {
		console.log({ error })
	}

	return NextResponse.json({ message: 'success' })
} 