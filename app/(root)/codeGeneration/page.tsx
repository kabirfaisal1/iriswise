'use client';
import { BotAvatar, Button, Empty, UserAvatar } from '@/components/index';
import Header from '@/components/shared/header';
import Loader from '@/components/shared/loader';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { FileCode } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { RefObject, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import ReactMarkdown from 'react-markdown';
import * as z from 'zod';
import { codeSchema } from './constants';
type Message = {
	role: string;
	content: string;
};

const CodeSummarizePage = () => {
	const router = useRouter();
	const [messages, setMessages] = useState<Message[]>([]);
	const [copyButtonText, setCopyButtonText] = useState<string>('Copy');
	const preRef: RefObject<HTMLPreElement> = useRef(null);

	const copyToClipboard = async () => {
		if (!preRef.current) return;

		await navigator.clipboard.writeText(preRef.current.innerText);
		setCopyButtonText('Copied!');
		setTimeout(() => {
			setCopyButtonText('Copy');
		}, 1500);
	};

	const form = useForm<z.infer<typeof codeSchema>>({
		resolver: zodResolver(codeSchema),
		defaultValues: {
			prompt: '',
		},
	});

	const isLoading = form.formState.isSubmitting;

	const onSubmit = async (values: z.infer<typeof codeSchema>) => {
		try {
			const userMessage: Message = {
				role: 'user',
				content: values.prompt,
			};

			const newMessages = [...messages, userMessage];

			const response = await axios.post('/api/code', {
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
			<Header
				title='Code Generation'
				subtitle='Produce code effortlessly from descriptive text.'
				testid='code_page_header'
				icon=<FileCode color={'#D8D8D8'} height={'60px'} width={'40px'} />
			/>
			{/* // Form component */}
			<div className='px-4 lg:px-8'>
				<div className='mx-auto max-w-3xl'>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className='rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2'
							data-testid='code_form'
						>
							<FormField
								name='prompt'
								render={({ field }) => (
									<FormItem className='col-span-12 lg:col-span-10'>
										<FormControl className='m-0 p-0'>
											<Input
												className='border-10 outline-none focus-visible:ring-2 focus-visible:ring-transparent'
												testid='code_input'
												disabled={isLoading}
												placeholder='Create a simple toggle button using React Hooks.'
												{...field}
											/>
										</FormControl>
									</FormItem>
								)}
							/>
							<Button
								data-testid='code_Generate'
								className='col-span-12 lg:col-span-2 w-full'
								disabled={isLoading}
							>
								Generate
							</Button>
						</form>
					</Form>
				</div>

				<div className='space-y-4 mt-4'>
					{isLoading && (
						<div className='p-8 rounded-lg w-full flex items-center justify-center bg-muted'>
							<Loader />
						</div>
					)}
					{messages.length === 0 && !isLoading && (
						<Empty label='No code generated' />
					)}
					<div className='flex flex-col gap-y-4'>
						{messages.map(message => (
							<div
								key={message.content}
								className={cn(
									'p-8 w-full flex items-center gap-x-8 rounded-lg',
									message.role === 'user'
										? 'bg-white border border-black/10'
										: 'bg-muted',
								)}
								data-testid='code_message'
							>
								{message.role === 'user' ? <UserAvatar /> : <BotAvatar />}
								<ReactMarkdown
									components={{
										pre: ({ node, ...props }) => (
											<div className='overflow-auto w-full my-2 bg-black/10 p-2 rounded-lg relative'>
												<pre ref={preRef} {...props} />
												<button
													data-testid='code_copy_button'
													onClick={copyToClipboard}
													className='absolute top-5 right-5 h-10 w-20 hover:bg-accent hover:text-accent-foreground rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
												>
													{copyButtonText}
												</button>
											</div>
										),
										code: ({ node, ...props }) => (
											<code className='bg-black/10 rounded-lg p-1' {...props} />
										),
									}}
									className='text-sm overflow-hidden leading-7'
								>
									{message.content || ''}
								</ReactMarkdown>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CodeSummarizePage;
