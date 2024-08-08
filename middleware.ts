export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    // Apply middleware to all routes except those that match these patterns
    "/((?!api|_next/static|_next/image|favicon.ico|auth).*)",
  ],
};
