import React from 'react';

interface Props {
	title: string;
	subtitle?: string;
	testId?: string;
	icon: string | JSX.Element;
}

const Header = ({ title, subtitle, testId, icon }: Props) => {
	return (
		<>
			<div
				data-testId={`${testId}_icon`}
				className='text-5xl '
				style={{
					gridColumn: '1',
					gridRow: '1 / span 2',
					display: 'flex',
					justifyContent: 'space-evenly',
				}}
			>
				{icon}
			</div>
			<div className='mb-8 space-y-4'>
				<h2
					data-testId={testId}
					className='text-2x1 md:text-4xl font-bold text-center'
					style={{ gridColumn: '2', gridRow: '1 ' }}
				>
					{title}
				</h2>
				{subtitle && (
					<p
						data-testId={`${testId}_subtitle`}
						style={{ gridColumn: '2', gridRow: '2' }}
						className='text-muted-foreground font-light text-sm md:text-lg text-center'
					>
						{subtitle}
					</p>
				)}
			</div>
		</>
	);
};

export default Header;
