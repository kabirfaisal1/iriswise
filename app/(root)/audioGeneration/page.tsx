import Header from '@/components/shared/header';
import { AudioLines } from 'lucide-react';

const AudioGenerationPage = () => {
	return (
		<>
			<Header
				title='Audio Generation Page title'
				subtitle='Audio Generation Page subtitle'
				testid='AudioGeneration_page_header'
				icon=<AudioLines color='#7469B6' height={'60px'} width={'40px'} />
			/>
		</>
	);
};
export default AudioGenerationPage;
