import Header from '@/components/shared/header';
import { MessageSquare } from 'lucide-react';

const ConversationPage = () => {
	return (
		<>
			<Header
				title='Conversation Page title'
				subtitle='Chat with the smartest AI'
				testId='Conversation_page_header'
				icon=<MessageSquare color='#3EC70B' height={'60px'} width={'40px'} />
			/>
		</>
	);
};
export default ConversationPage;
