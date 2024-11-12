'use client';

import { useUser } from '@auth0/nextjs-auth0'; // Import useUser

const LoginButton = () => {
    const { loginWithRedirect } = useUser(); // Get login function from useUser hook

    return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;
