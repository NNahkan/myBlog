import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
	return (
		<nav className='lg:px-10 py-5 mb-10 bg-blue-400' >
			<div className='flex justify-between items-center'>
				<Link href='/'>
					<Image src='/favicon.ico'
						alt='logo'
						width={60}
						height={60}
					/></Link>
				<ul className='flex gap-8'>
					<Link href="/blogs">Blogs</Link>
					<li>Login</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
