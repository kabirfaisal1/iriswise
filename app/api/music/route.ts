
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import Replicate from "replicate";


const replicate = new Replicate( {
    auth: process.env.REPLICATE_API_KEY!
} );

export async function POST ( req: Request )
{
    try
    {
        const { userId } = auth();
        const body = await req.json();
        const { prompt } = body;

        if ( !userId )
        {
            return new NextResponse( "Unauthorized", { status: 401 } );
        }


        if ( !prompt )
        {
            return new NextResponse( "prompt is required", { status: 400 } );
        }


     
            const input = {
                bpm: 124,
                prompt: prompt,
                duration: 60,
                time_sig: "4/4",
                text_chords: "C C G G A:min A:min F F",
                multi_band_diffusion: true
            };
   

        const response = await replicate.run( "riffusion/riffusion:8cf61ea6c56afd61d8f5b9ffd14d7c216c0a93844ce2d82ac1c9ecc9c7f24e05", { input } );
        return NextResponse.json( response );
    } catch ( error )
    {
        console.log( "[AUDIO_ERROR] : ", error );
        return new NextResponse( "Internal server error", { status: 500 } );
    }
}
