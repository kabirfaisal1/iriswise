import { clerkMiddleware, createRouteMatcher, NextResponse } from '@clerk/nextjs/server';
const publicRoute = createRouteMatcher( [ '/' ] );
const isProtectedRoute = createRouteMatcher( [ '/dashboard(.*)' ] );

export default clerkMiddleware( ( auth, req ) =>
{
    if ( !auth().userId && isProtectedRoute( req ) )
    {
        return NextResponse.redirect( '/sign-in' );
    }

} );

export const config = { matcher: [ '/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)' ] };
