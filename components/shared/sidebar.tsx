'use client';

import { navLinks } from '@/constants';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ModeToggle, Button } from '@/components/index';

const Sidebar = () => {
	const pathname = usePathname();

	return (
		<aside className='sidebar'>
			<div className='flex size-full flex-col gap-4'>
				<Link href='/' className='sidebar-logo'>
					<Image
						src='/assets/images/logo.png'
						alt='logo'
						width={180}
						height={28}
					/>
					{/* //TODO: Add text */}
				</Link>

				<nav className='sidebar-nav'>
					<SignedIn>
						<ul className='sidebar-nav_elements'>
							{navLinks.slice(0, 7).map(link => {
								{
									if (!link.disable) {
										const isActive = link.route === pathname;

										return (
											<li
												key={link.route}
												className={`sidebar-nav_element group ${
													isActive
														? 'bg-purple-gradient text-custom-green'
														: 'text-custom-brown'
												}`}
											>
												<Link className='sidebar-link' href={link.route}>
													<div className='flex items-center flex-1'>
														<link.icon />
													</div>
													{link.label}
												</Link>
											</li>
										);
									}
								}
							})}
						</ul>

						<ul className='sidebar-nav_elements'>
							{navLinks.slice(7).map(link => {
								const isActive = link.route === pathname;

								return (
									<li
										key={link.route}
										className={`sidebar-nav_element group ${
											isActive
												? 'bg-purple-gradient text-custom-green'
												: 'text-custom-brown'
										}`}
									>
										<Link className='sidebar-link' href={link.route}>
											<div className='flex items-center flex-1'>
												<link.icon />
											</div>
											{link.label}
										</Link>
									</li>
								);
							})}

							<li className='flex-center cursor-pointer gap-2 p-4'>
								<div data-testid='mode_toggle'>
									<ModeToggle />
								</div>
								<UserButton afterSignOutUrl='/' showName />
							</li>
						</ul>
					</SignedIn>

					<SignedOut>
						<div className='text-sm flex p-3  mr-4 font-medium cursor-pointer'>
							<UserButton afterSignOutUrl='/' />
							<Link className='mr-4' href='/sign-in'>
								<Button data_testid='login_button'>Login</Button>
							</Link>

							<Link className='mr-4' href='/sign-up'>
								<Button data_testid='register_button'>Register</Button>
							</Link>
							<div data-testid='mode_toggle'>
								<ModeToggle />
							</div>
						</div>
					</SignedOut>
				</nav>
			</div>
		</aside>
	);
};

export default Sidebar;
