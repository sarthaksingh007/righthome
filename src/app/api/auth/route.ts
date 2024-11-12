// src/app/api/auth/route.ts

import { handleAuth } from '@auth0/nextjs-auth0';

export const handler = handleAuth();

export { handler as GET, handler as POST }; // Ensure it works for both GET and POST requests

