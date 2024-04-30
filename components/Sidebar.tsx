'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';
import { cn } from '../lib/utils';
import { usePathname } from 'next/navigation';
import { SidebarRoutes } from '@/constants/link_index';
// TODO: enabled this incase colors are not working while importing from '@/constants/link_index'
// import {
// 	Newspaper,
// 	ImageIcon,
// 	LayoutDashboard,
// 	MessageSquare,
// 	MusicIcon,
// 	VideoIcon,
// 	CodeIcon,
// 	SettingsIcon,
// 	ShoppingBag,
// 	Plane,
// } from 'lucide-react';
// export const SidebarRoutes = [
// 	{
// 		id: '01',
// 		label: 'Dashboard',
// 		icons: LayoutDashboard,
// 		href: '/dashboard',
// 		color: 'text-sky-500',
// 	},
// 	{
// 		id: '02',
// 		label: 'Conversation',
// 		icons: MessageSquare,
// 		href: '/conversation',
// 		color: 'text-violet-500',
// 	},
// 	{
// 		id: '03',
// 		label: 'Article Summarize',
// 		icons: Newspaper,
// 		href: '/articleSummarize',
// 		color: 'text-green-500',
// 	},
// 	{
// 		id: '04',
// 		label: 'Image Generation',
// 		icons: ImageIcon,
// 		href: '/imageGeneration',
// 		color: 'text-pink-500',
// 	},
// 	{
// 		id: '05',
// 		label: 'Music Generation',
// 		icons: MusicIcon,
// 		href: '/musicGeneration',
// 		color: 'text-yellow-800',
// 	},
// 	{
// 		id: '06',
// 		label: 'Video Generation',
// 		icons: VideoIcon,
// 		href: '/videoGeneration',
// 		color: 'text-orange-700',
// 	},
// 	{
// 		id: '07',
// 		label: 'Code Generation',
// 		icons: CodeIcon,
// 		href: '/codeGeneration',
// 		color: 'text-emerald-800',
// 	},
// 	// {
// 	// 	id: '08',
// 	// 	label: 'Price Checker',
// 	// 	icons: ShoppingBag,
// 	// 	href: '/priceChecker',
// 	// 	color: 'text-emerald-800',
// 	// },
// 	// {
// 	// 	id: '09',
// 	// 	label: 'Travel Generation',
// 	// 	icons: Plane,
// 	// 	href: '/travel',
// 	// 	color: 'text-emerald-800',
// 	// },
// 	// {
// 	// 	id: '10',
// 	// 	label: 'Settings',
// 	// 	icons: SettingsIcon,
// 	// 	href: '/settings',
// 	// 	color: 'text-red-700',
// 	// },
// ];
const montserrat = Montserrat({
	weight: '600',
	subsets: ['latin'],
});

const Sidebar = () => {
	const pathname = usePathname();
	return (
		<aside
			className='space-y-4 py-4 flex flex-col h-full transition-all'
			style={{
				background:
					'linear-gradient(0deg, #EDB7ED 10%, #430A5D 100%, #F6F5F2 100%)',
			}}
			data-testid='user_sidebar'
		>
			{/* // this is for the sidebar logo */}
			<div className='px-8 py-6 flex-1'>
				<Link
					href='/dashboard'
					className='flex items-center pl-6 md-28'
					data-testid='link_user_dashboard'
				>
					<div className='relative w-20 h-20 mr-8 round-yellow-shadow'>
						<Image
							fill
							alt='site_logo'
							data-testid='user_dashboard_site_logo'
							src='/logo.png'
						/>
					</div>
					<h1
						data-testid='user_dashboard_site_title'
						className={cn('text-2xl font-bold', montserrat.className)}
						style={{
							fontSize: '1.6rem',
							color: '#BEADFA',
							textShadow: '1px 1px 1px #FDFFAB',
						}}
					>
						Iris
					</h1>
				</Link>
				{/* // this is for the sidebar routes */}
				<div className='space-y-1 mt-40 py-15 flex flex-col items-center space-x-1'>
					{SidebarRoutes.map(route => (
						<Link
							href={route.href}
							key={`${route.label}_${route.id}`}
							className={
								cn(
									'text-sm group flex p-2 w-full justify-start font-medium cursor-pointer hover:text-purple-900 hover:bg-green-200 rounded-full transition',
								) + (pathname === route.href ? ' text-white' : '')
							}
							data-testid={`link_${route.label}`}
						>
							<div className='flex items-center flex-1'>
								<route.icons className={cn('h-5 w-5 mr-3', route.color)} />
								{route.label}
							</div>
						</Link>
					))}
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
