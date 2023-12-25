import { Metadata } from 'next';
import './globals.css'
import { inter } from '@/app/ui/fonts';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
	title: 'Blog App with Prisma',
	description: 'Blog app with auth and prisma',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased`}>
				<Navbar />
				<div className='max-w-screen-lg m-auto'>
					{children}
				</div>
			</body>
		</html>
	);
}