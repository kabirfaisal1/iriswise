'use client';
import { Button, Empty, Header } from '@/components/index';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { AudioLines } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { audioSchema } from './constants';

import Loader from '@/components/shared/loader';
import toast from 'react-hot-toast';

const AudioGenerationPage = () => {
	const router = useRouter();
	const [music, setMusic] = useState<string>();

	const form = useForm<z.infer<typeof audioSchema>>({
		resolver: zodResolver(audioSchema),
		defaultValues: {
			prompt: '',
		},
	});

	const isLoading = form.formState.isSubmitting;

	const onSubmit = async (values: z.infer<typeof audioSchema>) => {
		try {
			setMusic(undefined);

			const response = await axios.post('/api/music', values);

			setMusic(response.data.audio);

			form.reset();
		} catch (error: any) {
			if (error?.response?.status === 403) {
			} else {
				toast.error('Something went wrong.');
			}
			console.log(error);
		} finally {
			router.refresh();
		}
	};

	return (
		<div>
			<Header
				title='Music Generation Page title'
				subtitle='Turn your text into music!'
				testid='music_page_header'
				icon=<AudioLines color='#7469B6' height={'60px'} width={'40px'} />
			/>
			{/* // Form component */}
			<div className='px-4 lg:px-8'>
				<div className='mx-auto max-w-3xl'>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className='rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2'
							data-testid='audio_form'
						>
							<FormField
								name='prompt'
								render={({ field }) => (
									<FormItem className='col-span-12 lg:col-span-10'>
										<FormControl className='m-0 p-0'>
											<Input
												className='border-10 outline-none focus-visible:ring-2 focus-visible:ring-transparent'
												testid='audio_input'
												disabled={isLoading}
												placeholder='Funky Saxophone Solo'
												{...field}
											></Input>
										</FormControl>
									</FormItem>
								)}
							></FormField>
							<Button
								data-testid='audio_Generate'
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
						<div className='p-20'>
							<Loader />
						</div>
					)}
					{!music && !isLoading && <Empty label='No music generated' />}
					{music && (
						<audio controls className='w-full mt-8'>
							<source data-testid='audio_source' src={music} />
						</audio>
					)}
				</div>
			</div>
		</div>
	);
};
export default AudioGenerationPage;
