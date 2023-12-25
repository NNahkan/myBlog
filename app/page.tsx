import Image from 'next/image'

export default function Home() {
	return (
		<div >
			<h1 className='text-4xl font-bold text-blue-400'>Where you write ...</h1>
			<h2 className='text-3xl font-bold'>There you belong</h2>
			<div className='flex justify-center gap-10 mt-20 m-auto'>

				<button className='rounded-md p-5 bg-blue-400'>Read blogs</button>
				<button className='rounded-md p-5 bg-blue-400'>Write a masterpiece</button>
			</div>

		</div>
	)
}
