import Sidebar from '../../components/sidebar';
import Navbar from '../../components/navbar';
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='h-full relative'>
			<div
				className='hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80]'
				style={{ backgroundColor: '#937DC2' }}
				data-test='iris_sidebar'
			>
				<Sidebar />
			</div>
			<main className='md:pl-72' data-testid='user_dashboard'>
				<Navbar />
				{children}
			</main>
		</div>
	);
};
export default DashboardLayout;
