import
{
    clerkMiddleware,
    createRouteMatcher,
    ClerkMiddlewareAuth // Add this import statement
} from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher( [
    '/dashboard(.*)',
] );

export default clerkMiddleware( ( auth, req ) =>
{
    publicRoutes: [ '/', '/api/webhooks/clerk', '/api/webhooks/stripe' ];

    if ( isProtectedRoute( req ) ) auth().protect();
} );


export const config = {
    matcher: [ '/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)' ],
};
