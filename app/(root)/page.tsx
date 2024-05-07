import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';

const LandingPage = () => {
	return (
		<>
			<div>
				<h1 data-testid='landing_header_title'>Hello, Home! LandingPage</h1>
			</div>
		</>
	);
};
export default LandingPage;
