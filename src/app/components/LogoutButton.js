'use client';

import { useUser } from '@auth0/nextjs-auth0'; // Import useUser

const LogoutButton = () => {
  const { logout } = useUser(); // Get logout function from useUser hook

    return (
    <button onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
    </button>
    );
};

export default LogoutButton;
