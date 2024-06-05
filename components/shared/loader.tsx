import Image from 'next/image';

const Loader = () => {
	return (
		<div className='h-full flex flex-col gap-y-4 items-center justify-center'>
			<div
				data-testid='loader_image'
				className='w-10 h-10 relative animate-spin'
			>
				<Image alt='logo' fill src='/logo.png' />
			</div>
			<p
				data-testid='loader_paragraph'
				className='text-sm text-muted-foreground'
			>
				Iris is thinking...
			</p>
		</div>
	);
};

export default Loader;
