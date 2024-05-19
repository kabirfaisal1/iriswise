'use client';
import { Button, Header } from '@/components/index';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { MessageSquare } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import axios from 'axios';
import { conversationSchema } from './constants';
type Message = {
	role: string;
	content: string;
};

const ConversationPage = () => {
	const router = useRouter();
	const [messages, setMessages] = useState<Message[]>([]);

	const form = useForm<z.infer<typeof conversationSchema>>({
		resolver: zodResolver(conversationSchema),
		defaultValues: {
			prompt: '',
		},
	});

	const isLoading = form.formState.isSubmitting;

	const onSubmit = async (values: z.infer<typeof conversationSchema>) => {
		try {
			const userMessage: Message = {
				role: 'user',
				content: values.prompt,
			};

			const newMessages = [...messages, userMessage];

			const response = await axios.post('/api/conversation', {
				messages: newMessages,
			});

			setMessages(prev => [...prev, userMessage, response.data]);

			form.reset();
		} catch (error: any) {
			if (error?.response?.status === 403) {
			} else {
				console.error(error);
			}
		} finally {
			router.refresh();
		}
	};

	return (
		<div>
			{/* // Header component */}
			<Header
				title='Conversation Page title'
				subtitle='Chat with the smartest AI'
				testid='Conversation_page_header'
				icon=<MessageSquare color='#3EC70B' height={'60px'} width={'40px'} />
			/>
			{/* // Form component */}
			<div className='px-4 lg:px-8'>
				<div className='mx-auto max-w-3xl'>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className='rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2'
							data-testid='conversation_form'
						>
							<FormField
								name='prompt'
								render={({ field }) => (
									<FormItem className='col-span-12 lg:col-span-10'>
										<FormControl className='m-0 p-0'>
											<Input
												className='border-10 outline-none focus-visible:ring-2 focus-visible:ring-transparent'
												testid='conversation_input'
												disabled={isLoading}
												placeholder='What are the recognized species of Iris flowers?'
												{...field}
											/>
										</FormControl>
									</FormItem>
								)}
							/>
							<Button
								className='col-span-12 lg:col-span-2 w-full'
								disabled={isLoading}
							>
								Generate
							</Button>
						</form>
					</Form>
				</div>

				<div className='flex flex-col gap-3'>
					{messages.map(message => (
						<div key={message.content}>
							<div className='summary_box'>
								<p className='font-inter font-medium text-sm text-gray-700'>
									{message.content}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ConversationPage;
