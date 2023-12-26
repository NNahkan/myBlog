import prisma from '../../db'
import { unstable_noStore as noStore } from 'next/cache';

export const getBlogs = () => {
	noStore()
	return prisma.post.findMany({
		include: {
			author: {
				select: {
					name: true
				}
			}
		}
	})
}

export const getBlog = (blogId: string) => {
	noStore()
	try {
		const blog = prisma.post.findUnique({
			where: {
				id: blogId
			},
			include: {
				author: {
					select: {
						name: true
					}
				}
			}
		})

		return blog
	} catch (error) {
		console.log(error)
	}
}