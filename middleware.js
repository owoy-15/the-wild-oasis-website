// import { NextResponse } from "next/server";

// export function middleware(request) {
//   console.log(request);

//   // use URL web api to create a new URL object
//   // get this too many redirects errors. And the reason for that is that the middleware,
//   // so in order to make this stop, we need to basically only run this middleware here for the certaian routes.
//   return NextResponse.redirect(new URL("/about", request.url)); // or json like api
// }

// ------------------------

// use the middleware that provided by nextAuth

import { auth } from "@/app/_lib/auth";

// auth serve as a middleware function that checks the authentication status of the user.
export const middleware = auth;

// This is a middleware file for Next.js that handles requests to specific routes.
// It redirects all requests to the "..." page(return from middleware or auth function), regardless of the original path.
// The middleware function is executed for every request, and it uses the NextResponse object to perform the redirect.
export const config = {
  matcher: ["/account"], // protect the account route
};
