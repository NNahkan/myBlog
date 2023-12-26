import React from 'react'
import prisma from '../../db'
import { getBlogs } from '../lib/data';
import Link from 'next/link';


type blogType = {
	id: string;
	title: string;
	content: string | null;
	publish: boolean;
	authorId: string;
};


export default async function Page() {

	const blogs = await getBlogs()


	console.log(blogs)
	return (
		<div>
			<ul className='flex gap-5  '>
				{blogs.map((item) => (
					<li className='flex flex-col justify-between bg-blue-500 px-3 py-4 w-1/3 h-40 ' key={item.id}>
						<h1 className='font'>{item.title}</h1>
						<p>{item.content}</p>
						<p className='p-1 rounded-md bg-black self-end'>{item.author?.name}</p>
						<Link href={`/blogs/${item.id}`}>Read more</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

