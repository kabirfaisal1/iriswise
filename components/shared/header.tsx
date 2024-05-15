import React from 'react';

interface Props {
	title: string;
	subtitle?: string;
	testid?: string;
	icon: string | JSX.Element;
}

const Header = ({ title, subtitle, testid, icon }: Props) => {
	return (
		<>
			<div
				style={{
					display: 'grid',
					gridTemplateRows: 'auto auto',
					gridTemplateColumns: 'auto 1fr',
					gap: '10px',
					justifyContent: 'space-evenly',
					alignItems: 'space-evenly',
					padding: '20px',
					marginBottom: '20px',
				}}
			>
				<div
					data-testid={`${testid}_icon`}
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
				<h2
					data-testid={testid}
					className='h2-bold'
					style={{ gridColumn: '2', gridRow: '1 ' }}
				>
					{title}
				</h2>
				{subtitle && (
					<p
						data-testid={`${testid}_subtitle`}
						style={{ gridColumn: '2', gridRow: '2' }}
					>
						{subtitle}
					</p>
				)}
			</div>
		</>
	);
};

export default Header;
