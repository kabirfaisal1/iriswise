'use client';

import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import {
	ArrowBigRight,
	CodeIcon,
	ImageIcon,
	LayoutDashboard,
	MessageSquare,
	MusicIcon,
	Newspaper,
	VideoIcon,
} from 'lucide-react';

const tools = [
	{
		id: '02',
		label: 'Conversation',
		icons: MessageSquare,
		href: '/conversation',
		color: 'text-violet-500',
		bgColor: 'bg-violet-500/10',
	},
	// {
	// 	id: '03',
	// 	label: 'Article Summarize',
	// 	icons: Newspaper,
	// 	href: '/articleSummarize',
	// 	color: 'text-green-500',
	// },
	// {
	// 	id: '04',
	// 	label: 'Image Generation',
	// 	icons: ImageIcon,
	// 	href: '/imageGeneration',
	// 	color: 'text-pink-500',
	// },
	// {
	// 	id: '05',
	// 	label: 'Music Generation',
	// 	icons: MusicIcon,
	// 	href: '/musicGeneration',
	// 	color: 'text-yellow-800',
	// },
	// {
	// 	id: '06',
	// 	label: 'Video Generation',
	// 	icons: VideoIcon,
	// 	href: '/videoGeneration',
	// 	color: 'text-orange-700',
	// },
	// {
	// 	id: '07',
	// 	label: 'Code Generation',
	// 	icons: CodeIcon,
	// 	href: '/codeGeneration',
	// 	color: 'text-emerald-800',
	// },
	// {
	// 	id: '08',
	// 	label: 'Price Checker',
	// 	icons: ShoppingBag,
	// 	href: '/priceChecker',
	// 	color: 'text-emerald-800',
	// },
	// {
	// 	id: '09',
	// 	label: 'Travel Generation',
	// 	icons: Plane,
	// 	href: '/travel',
	// 	color: 'text-emerald-800',
	// },
	// {
	// 	id: '10',
	// 	label: 'Settings',
	// 	icons: SettingsIcon,
	// 	href: '/settings',
	// 	color: 'text-red-700',
	// },
];

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
			<div className='px-4 md:px20 lg:px32 space-y-4'>
				{tools.map(tool => (
					<Card
						key={tool.id}
						className='p-4 border-black/5 flex items-center justify-between hover:shadow-md transition-all cursor-pointer'
					>
						<div className='flex item-center gap-x-4'>
							<div className={cn('p-2 w-fit rounded-md', tool.color)}>
								<tool.icons />
							</div>
							<div className='font-semibold'>{tool.label}</div>
							<div>
								<ArrowBigRight />
							</div>
						</div>
					</Card>
				))}
			</div>
		</div>
	);
};
export default DashboardPage;
