import { getBlog } from "@/app/lib/data"

export default async function Page({ params }: { params: { id: string } }) {

	const blogId = params.id
	const post = await getBlog(blogId)
	return (
		<>
			{post && (
				<div>
					<h1>{post.title}</h1>
					<p>{post.content}</p>
					<p>{post.author?.name}</p>
				</div>
			)}
			<h1 className="text-4xl">COMMENTS</h1>
		</>
	)
}