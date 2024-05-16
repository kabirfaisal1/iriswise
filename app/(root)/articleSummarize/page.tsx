import Header from '@/components/shared/header';
import { Newspaper } from 'lucide-react';

const ArticleSummarize = () => {
	return (
		<>
			<Header
				title='Article Summarize Page title'
				subtitle='Summarize articles in a jiffy!'
				testid='ArticleSummarize_page_header'
				icon=<Newspaper color={'#005B41'} height={'60px'} width={'40px'} />
			/>
		</>
	);
};
export default ArticleSummarize;
