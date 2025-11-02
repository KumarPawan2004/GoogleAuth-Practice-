    // import React from 'react';
    // import { GoogleLogin } from '@react-oauth/google';

    // const MyAuthComponent = () => {
    //   const handleGoogleLoginSuccess = (credentialResponse) => {
    //     console.log('Login Success:', credentialResponse);
    //     // Process the credentialResponse (e.g., send the JWT token to your backend for verification)
    //   };

    //   const handleGoogleLoginError = () => {
    //     console.log('Login Failed');
    //   };

    //   return (
    //     <div>
    //       <h2>Sign in with Google</h2>
    //       <GoogleLogin
    //         onSuccess={handleGoogleLoginSuccess}
    //         onError={handleGoogleLoginError}
    //       />
    //     </div>
    //   );
    // };

    // export default MyAuthComponent;


    // src/MyAuthComponent.js

import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

// **Replace with your GitHub Client ID and your server's callback URL**
const GITHUB_CLIENT_ID = "Ov23li6KThqPIBrQF48k";
 const GITHUB_CALLBACK_URL = "http://localhost:5173/auth/github/callback"; 

// Construct the URL to initiate the GitHub login flow
const githubAuthURL = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${encodeURIComponent(GITHUB_CALLBACK_URL)}&scope=user`;

const MyAuthComponent = () => {
  const handleGoogleLoginSuccess = (credentialResponse) => {
    console.log('Google Login Success:', credentialResponse);
    // ...
  };

  const handleGoogleLoginError = () => {
    console.log('Google Login Failed');
  };

  // --- New GitHub Login Handler ---
  // The user will be redirected to the URL, so this function is not an onClick handler
  // (unless you want to add more logic before the redirect).
  
  return (
    <div>
      <h3>Sign in with Google</h3>
      <GoogleLogin
        onSuccess={handleGoogleLoginSuccess}
        onError={handleGoogleLoginError}
      />
      
      <hr /> {/* Separator for visual clarity */}
      
      <h3>Sign in with GitHub</h3>
      {/* This link starts the OAuth flow. GitHub takes over, and then redirects 
        to the CALLBACK_URL (which your server/backend should handle).
      */}
      <a href={githubAuthURL} style={{ padding: '10px', backgroundColor: '#333', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>
        Sign in with GitHub
      </a>
      
    </div>
  );
};

export default MyAuthComponent;