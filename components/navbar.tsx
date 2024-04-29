import { UserButton } from '@clerk/nextjs';
import { Button } from './ui/button';
import { Menu, SettingsIcon } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
	return (
		<div className='flex items-center p-4'>
			<Button variant='ghost' size='icon' className='md:hidden'>
				<Menu />
			</Button>
			<div className='text-sm group flex p-3 w-full justify-start font-medium cursor-pointer'>
				<div data-test='user_control' className='flex w-full justify-end'>
					<UserButton afterSignOutUrl='/' />
					<div className='text-sm flex p-3 justify-end font-medium cursor-pointer'>
						<Link
							href='/settings'
							className='mr-4'
							data-testid='go_to_userSetting'
						>
							<SettingsIcon />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
