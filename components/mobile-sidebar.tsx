'use client';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';

import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import Sidebar from './Sidebar';
import { useEffect, useState } from 'react';

const MobileSidebar = () => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;
	return (
		<div className='flex items-center justify-end p-4'>
			<Sheet>
				<SheetTrigger>
					<Button variant='ghost' size='icon' className='md:hidden'>
						<Menu />
					</Button>
					<SheetContent
						side='left'
						className='p-0'
						data-testid='mobile_sidebar_sheet'
					>
						<Sidebar />
					</SheetContent>
				</SheetTrigger>
			</Sheet>
		</div>
	);
};

export default MobileSidebar;
