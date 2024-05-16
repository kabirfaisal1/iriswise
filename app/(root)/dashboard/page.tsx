'use client';
import Header from '@/components/shared/header';
import { LayoutDashboard } from 'lucide-react';
import { navLinks } from '@/constants/index';
import { Card, CardTitle } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';

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
							// key={`${tool.label}`}
							key={index}
							data-testid={`dashboard_tool_cards`}
							className='flex flex-col items-center justify-between p-4 rounded-lg hover:shadow-md  transition cursor-pointer'
						>
							<div className='flex items-center gap-x-4'>
								<Avatar
									data-testid={`card_icon_${tool.label}`}
									className='p-2 w-fit'
									style={{ background: tool.background }}
								>
									{<tool.icon color={tool.color} />}
								</Avatar>
								<CardTitle
									className='font-semibold'
									testid={`card_title_${tool.label}`}
								>
									{tool.label}
								</CardTitle>
							</div>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
};
export default Dashboard;
