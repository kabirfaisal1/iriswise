import
{
    clerkMiddleware,
    createRouteMatcher,
    ClerkMiddlewareAuth // Add this import statement
} from '@clerk/nextjs/server';
import { navLinks } from './constants';

// This is storing all the routes from the navLinks array
const routes = navLinks.map( link => link.route );
// This is creating a route matcher function
const isProtectedRoute = createRouteMatcher( routes );

export default clerkMiddleware( ( auth, req ) =>
{
    publicRoutes: [ '/', '/api/webhooks/clerk', '/api/webhooks/stripe' ];

    if ( isProtectedRoute( req ) ) auth().protect();
} );


export const config = {
    matcher: [ '/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)' ],
};
