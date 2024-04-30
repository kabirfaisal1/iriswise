'use client';
const DashboardPage = () =>
{
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
		</div>
	);
};
export default DashboardPage;
