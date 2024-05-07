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
    // if ( isProtectedRoute( req ) )
    // {
    //     auth().protect( has =>
    //     {
    //         return (
    //             has( { permission: 'org:sys_memberships:manage' } ) ||
    //             has( { permission: 'org:sys_domains_manage' } )
    //         );
    //     } );
    // }
} );


export const config = {
    matcher: [ '/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)' ],
};
