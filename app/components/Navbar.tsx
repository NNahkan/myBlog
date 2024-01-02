import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logout from './Logout'

const Navbar = ({ session }) => {
	console.log(session)
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
					{session ? (
						<Logout />
					) : (
						<Link href='/login'>Login</Link>
					)}
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
