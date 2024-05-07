import Sidebar from '@/components/shared/sidebar';
import MobileSidebar from '@/components/shared/mobile-sidebar';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className='root'>
			<Sidebar />
			<MobileSidebar />

			<div className='root-container'>
				<div className='wrapper'>{children}</div>
			</div>
		</main>
	);
};

export default Layout;
