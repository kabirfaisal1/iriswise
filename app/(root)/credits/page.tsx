import Header from '@/components/shared/header';
import { ScanBarcode } from 'lucide-react';

const CreditsPage = () => {
	return (
		<>
			<Header
				title='User Credits'
				subtitle='User Credits Page subtitle'
				testId='User_Credits_page_header'
				icon=<ScanBarcode color={'#76885B'} height={'60px'} width={'40px'} />
			/>
		</>
	);
};
export default CreditsPage;
