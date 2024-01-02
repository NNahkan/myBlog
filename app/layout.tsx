import { Metadata } from 'next';
import './globals.css'
import { inter } from '@/app/ui/fonts';
import Navbar from '@/app/components/Navbar';
import { getServerSession } from 'next-auth';

export const metadata: Metadata = {
	title: 'Blog App with Prisma',
	description: 'Blog app with auth and prisma',
}

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = await getServerSession()
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased`}>
				<Navbar session={session} />
				<div className='max-w-screen-lg m-auto'>
					{children}
				</div>
			</body>
		</html>
	);
}