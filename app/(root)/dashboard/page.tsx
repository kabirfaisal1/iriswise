'use client';
import Header from '@/components/shared/header';
import { ArrowRight, LayoutDashboard } from 'lucide-react';
import { navLinks } from '@/constants/index';
import { Card, CardTitle } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { useRouter } from 'next/navigation';

const tools = navLinks
	.filter(tool => tool.label !== 'Dashboard')
	.map(link => link);

const Dashboard = () => {
	const router = useRouter();
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
			<div
				className='px-4 md:px-20 lg:px-32 space-y-4'
				data-testid='dashboard_tool_container'
			>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
					{tools.map(tool => (
						<Card
							key={`dashboard_${tool.label}`}
							data-testid={`dashboard_tool_cards`}
							className='flex flex-col items-center justify-between p-4 rounded-lg hover:shadow-md  transition cursor-pointer'
							onClick={() => router.push(tool.route)}
						>
							<div className='flex items-center gap-x-4'>
								<Avatar
									data-testid={`card_icon_${tool.label}`}
									className='p-2 w-fit'
									style={{ background: tool.bgColor }}
								>
									{<tool.icon color={tool.color} />}
								</Avatar>
								<CardTitle
									className='font-semibold'
									testid={`card_title_${tool.label}`}
								>
									{tool.label}
								</CardTitle>
								<ArrowRight className='w-g h-5' />
							</div>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
};
export default Dashboard;
