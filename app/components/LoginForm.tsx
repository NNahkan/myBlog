'use client'

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { FormEvent } from 'react'

const LoginForm = () => {
	const router = useRouter()

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget)
		const response = await signIn('credentials', {
			email: formData.get('email'),
			password: formData.get('password'),
			redirect: false
		})
		console.log({ response })
		if (!response?.error) {
			router.push("/");
			router.refresh();
		}
	}
	return (
		<form onClick={handleSubmit} className='flex flex-col gap-2 mx-auto max-w-md mt-10 text-black'>
			<input className='border border-black' type="email" name="email" />
			<input className='border border-black' type="password" name="password" />
			<button className="text-white" type='submit'>Login</button>
		</form>
	)
}

export default LoginForm
