import React from 'react'
import RegisterForm from '../components/RegisterForm'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'



const RegisterPage = async () => {
	const session = await getServerSession();
	if (session) redirect('/')

	return (

		<RegisterForm />
	)
}

export default RegisterPage
