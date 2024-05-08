'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/index';
import { navLinks } from '@/constants/link_index';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { ModeToggle, Button } from '@/components/index';
import { useEffect, useState } from 'react';

const MobileNav = () => {
	const pathname = usePathname();
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;

	return (
		<header className='header'>
			<Link href='/' className='flex items-center gap-2 md:py-2'>
				<Image
					src='/assets/images/logo.png'
					alt='logo'
					width={70}
					height={28}
				/>
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
						<SheetContent
							className='sheet-content sm:w-64'
							style={{ background: '#809A6F' }}
						>
							<>
								<Image
									src='/assets/images/logo.png'
									alt='logo'
									width={52}
									height={23}
								/>

								<ul className='header-nav_elements'>
									{navLinks.map(link => {
										const isActive = link.route === pathname;

										return (
											<li
												className={`${isActive && 'gradient-text'} p-18 flex whitespace-nowrap text-dark-700`}
												key={link.route}
											>
												<Link
													className='sidebar-link cursor-pointer'
													href={link.route}
												>
													<div className='flex items-center flex-1'>
														<link.icon />
													</div>
													{link.label}
												</Link>
											</li>
										);
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
				</SignedOut>
			</nav>
		</header>
	);
};

export default MobileNav;
