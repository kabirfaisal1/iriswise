import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { ClerkProvider } from '@clerk/nextjs';
import { cn } from '@/lib/utils';
import { IBM_Plex_Sans } from 'next/font/google';

export const metadata: Metadata = {
	title: 'Iris Wise',
	description: 'AI Platform for the Future',
};
const IBMPlex = IBM_Plex_Sans({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-ibm-plex',
});
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<ClerkProvider appearance={{ variables: { colorPrimary: '#874CCC' } }}>
				<html lang='en' suppressHydrationWarning>
					<head>
						<link rel='icon' href='/app/favicon.ico' />
					</head>
					<body className={cn('font-IBMPlex antialiased', IBMPlex.variable)}>
						<main>
							<ThemeProvider
								attribute='class'
								defaultTheme='system'
								disableTransitionOnChange
								enableSystem={false}
							>
								{children}
							</ThemeProvider>
						</main>
					</body>
				</html>
			</ClerkProvider>
		</>
	);
}
