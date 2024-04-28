import Image from 'next/image';

const LandingPage = () => {
	return (
		<div>
			<h1>Hello, world! LandingPage</h1>
			<Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
		</div>
	);
};
export default LandingPage;
