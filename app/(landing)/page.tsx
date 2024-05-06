import { Button } from '@/components/ui/button';
import Link from 'next/link';

const LandingPage = () => {
	return (
		<>
			<div>
				<h1 data-testid='landing_header_title'>Hello, world! LandingPage</h1>

				<div className='text-sm flex p-3  mr-4 font-medium cursor-pointer'>
					<Link className='mr-4' data_testid='login_button' href='/sign-in'>
						<Button>Login</Button>
					</Link>

					<Link className='mr-4' data_testid='register_button' href='/sign-up'>
						<Button>Register</Button>
					</Link>
				</div>
			</div>
		</>
	);
};
export default LandingPage;
