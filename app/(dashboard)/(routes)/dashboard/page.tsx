import { UserButton } from '@clerk/nextjs';
const DashboardPage = () => {
	return (
		<div>
			<h1>Hello, world! DashboardPage </h1>
			<UserButton afterSignOutUrl='/' />
		</div>
	);
};
export default DashboardPage;
