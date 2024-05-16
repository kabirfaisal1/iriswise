import Header from '@/components/shared/header';
import { SquareUser } from 'lucide-react';

const ProfilePage = () => {
	return (
		<>
			<Header
				title='Profile Page title'
				subtitle='Profile Page subtitle'
				testId='Profile_page_header'
				icon=<SquareUser color='#76549A' height={'60px'} width={'40px'} />
			/>
		</>
	);
};
export default ProfilePage;
