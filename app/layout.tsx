import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/shared/theme-provider';
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Iris Wise',
	description: 'AI Platform for the Future',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<ClerkProvider appearance={{ variables: { colorPrimary: '#874CCC' } }}>
				<html lang='en' suppressHydrationWarning>
					<head />
					<body>
						<ThemeProvider
							attribute='class'
							defaultTheme='system'
							disableTransitionOnChange
							enableSystem={false}
						>
							{children}
						</ThemeProvider>
					</body>
				</html>
			</ClerkProvider>
		</>
	);
}
