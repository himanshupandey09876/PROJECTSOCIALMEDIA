import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// without auth not access the page 
// by default the pages are public
const isProtectedRoute = createRouteMatcher(["/settings(.*)"])
// above added list of routes to be protected
export default clerkMiddleware((auth,req)=>{
    if (isProtectedRoute(req)) auth().protect();
}); 
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};