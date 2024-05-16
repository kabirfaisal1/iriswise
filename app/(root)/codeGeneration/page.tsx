import Header from '@/components/shared/header';
import { FileCode } from 'lucide-react';

const CodeSummarizePage = () => {
	return (
		<>
			<Header
				title='Code Summarize Page title'
				subtitle='Code Summarize Page subtitle'
				testId='CodeSummarize_page_header'
				icon=<FileCode color={'#D8D8D8'} height={'60px'} width={'40px'} />
			/>
		</>
	);
};
export default CodeSummarizePage;
