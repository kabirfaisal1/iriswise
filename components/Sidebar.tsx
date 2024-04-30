'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';
import { cn } from '../lib/utils';
import { SidebarRoutes } from '../constants/link_index';
import { usePathname } from 'next/navigation';

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
