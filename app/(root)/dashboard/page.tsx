'use client';

import { Card, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowBigRight } from 'lucide-react';
import { SystemToolsRoute } from '@/constants/link_index';
const DashboardPage = () => {
	return (
		<div>
			<div className='md-8 space-y-4'>
				<h1
					className='text-2xl md:text-4xl font-bold text-center'
					data-testid='user_dashboard_header'
				>
					Discover the Boundless <br className='md:hidden' /> Potential of AI
				</h1>
				<h3
					className='text-muted-foreground font-light text-sm md:text-lg text-center'
					data-testid='user_dashboard_subtitle'
				>
					Unleash the Future - <br className='md:hidden' /> Chat with our AI to
					Begin Your Journey
				</h3>
			</div>
			{/* //Search bar */}
			<div></div>
			{/* //tools bar */}
			<div
				className='grid justify-evenly mb-8 md:mb-12 md:grid-cols-3'
				data-testid='system_tools'
			>
				{SystemToolsRoute.map(tool => (
					<Card
						key={tool.id}
						className='p-4 m-2 border-black/5 flex items-center justify-evenly hover:shadow-md transition-all cursor-pointer w-full md:w-1/2 mx-auto'
						data-testid={`${tool.label}_cards`}
					>
						<div className='flex items-center gap-x-4'>
							<div className={cn('p-2 w-fit rounded-md', tool.color)}>
								<tool.icons className={cn('w-8 h-8 ', tool.bgColor)} />
							</div>
							<CardHeader className='font-semibold'>{tool.label}</CardHeader>
							<div>
								<ArrowBigRight className='w-5 h-5' />
							</div>
						</div>
					</Card>
				))}
			</div>
		</div>
	);
};
export default DashboardPage;
