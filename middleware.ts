import
{
    clerkMiddleware,
    createRouteMatcher
} from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher( [
    '/dashboard(.*)',
    '/forum(.*)',
] );

export default clerkMiddleware( ( auth, req ) =>
{
    publicRoutes: [ '/', '/api/webhooks/clerk', '/api/webhooks/stripe' ];
} );


export const config = {
    matcher: [ '/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)' ],
};
