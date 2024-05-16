import Header from '@/components/shared/header';
import { ImageIcon } from 'lucide-react';
const ImageGenerationPage = () => {
	return (
		<>
			<Header
				title='Image Generation Page title'
				subtitle='Let your imagination run wild!'
				testId='ImageGeneration_page_header'
				icon=<ImageIcon color='pink' height={'60px'} width={'40px'} />
			/>
		</>
	);
};
export default ImageGenerationPage;
