import * as z from 'zod';

export const conversationSchema = z.object( {
    prompt: z.string().min( 1, {
        message: 'Please is required'
    } ).max( 100, {
        message: 'Exceeded maximum length of 100 characters'
    } ),
} );
