import Header from '@/components/shared/header';
import { LayoutDashboard } from 'lucide-react';

const Dashboard = () => {
	return (
		<>
			<Header
				title='Dashboard'
				subtitle='Explore the Power of AI'
				testid='dashboard_page_header'
				icon=<LayoutDashboard
					color={'#5C8374'}
					height={'60px'}
					width={'40px'}
				/>
			/>
		</>
	);
};
export default Dashboard;
