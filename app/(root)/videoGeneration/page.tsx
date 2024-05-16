import Header from '@/components/shared/header';
import { VideoIcon } from 'lucide-react';
const VideoGenerationPage = () => {
	return (
		<>
			<Header
				title='Video Generation Page title'
				subtitle='Video Generation Page subtitle'
				testid='VideoGeneration_page_header'
				icon=<VideoIcon color='#662549' height={'60px'} width={'40px'} />
			/>
		</>
	);
};
export default VideoGenerationPage;
