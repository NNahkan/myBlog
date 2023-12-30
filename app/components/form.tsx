'use client'

import { FormEvent } from "react"

export default function Form() {
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		const response = await fetch(`api/auth/register`, {
			method: "POST",
			body: JSON.stringify({
				email: formData.get("email"),
				password: formData.get("password")
			})
		})
		console.log(response.body)
	}
	return (
		<form onSubmit={handleSubmit} className='flex flex-col gap-2 mx-auto max-w-md mt-10 text-black'>
			<input className='border border-black' type="email" name="email" />
			<input className='border border-black' type="password" name="password" />
			<button className="text-white" type='submit'>Register</button>
		</form>
	)
}