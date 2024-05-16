'use client';
import Header from '@/components/shared/header';
import { LayoutDashboard } from 'lucide-react';
import { navLinks } from '@/constants/index';
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

const tools = navLinks
	.filter(tool => tool.label !== 'Dashboard')
	.map(link => link);

const Dashboard = () => {
	return (
		<div>
			<Header
				title='Explore the Power of AI'
				subtitle=''
				testid='dashboard_page_header'
				icon=<LayoutDashboard
					color={'#5C8374'}
					height={'60px'}
					width={'40px'}
				/>
			/>
			<div className='px-4 md:px-20 lg:px-32 space-y-4'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
					{tools.map((tool, index) => (
						<Card
							key={`${index}_${tool.label}`}
							data-testid={`dashboard_tool_cards`}
							className='flex flex-col items-center justify-center p-4 rounded-lg shadow-md'
						>
							<CardHeader>
								<CardTitle testid={`card_title_${tool.label}`}>
									{tool.label}
								</CardTitle>
								<CardDescription>Card Description</CardDescription>
							</CardHeader>
							{/* <CardContent>
									<p>Card Content</p>
								</CardContent> */}
						</Card>
					))}
				</div>
			</div>
		</div>
	);
};
export default Dashboard;
