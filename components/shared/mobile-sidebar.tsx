'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/index';
import { navLinks } from '@/constants';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { ModeToggle, Button } from '@/components/index';
import { useEffect, useState } from 'react';
import { Avatar } from '@/components/ui/avatar';
const MobileNav = () => {
	const pathname = usePathname();
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;

	return (
		<header className='header' data-testid='mobile_view_navbar'>
			<Link href='/' className='flex items-center gap-2 md:py-2'>
				<Image src='/logo.png' alt='logo' width={70} height={28} />
			</Link>

			<nav className='flex gap-2'>
				<SignedIn>
					<div data-testid='mode_toggle'>
						<ModeToggle />
					</div>
					<UserButton afterSignOutUrl='/' />

					<Sheet>
						<SheetTrigger>
							<Menu width={32} height={32} className='cursor-pointer' />
						</SheetTrigger>
						<SheetContent className='sheet-content sm:w-64' id='sheetContent'>
							<>
								<Image src='/logo.png' alt='logo' width={52} height={23} />

								<ul className='header-nav_elements'>
									{navLinks.map(link => {
										if (!link.isDisable) {
											const isActive = link.route === pathname;

											return (
												<li
													key={link.route}
													className={`sidebar-nav_element group ${
														isActive
															? 'bg-purple-gradient text-custom-green'
															: ''
													}`}
												>
													<Link className='sidebar-link' href={link.route}>
														<Avatar
															className='p-2 w-fit'
															style={{ background: link.bgColor }}
														>
															<link.icon color={link.color} />
														</Avatar>
														{link.label}
													</Link>
												</li>
												// Testing
											);
										}
									})}
								</ul>
							</>
						</SheetContent>
					</Sheet>
				</SignedIn>

				<SignedOut>
					<div data-testid='mode_toggle'>
						<ModeToggle />
					</div>
					<Button>
						<Link href='/sign-in'>Login</Link>
					</Button>
					<Link className='mr-4' href='/sign-up'>
						<Button data_testid='register_button'>Register</Button>
					</Link>
				</SignedOut>
			</nav>
		</header>
	);
};

export default MobileNav;
