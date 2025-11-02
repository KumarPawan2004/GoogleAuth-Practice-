    import React from 'react';
    import { GoogleLogin } from '@react-oauth/google';

    const MyAuthComponent = () => {
      const handleGoogleLoginSuccess = (credentialResponse) => {
        console.log('Login Success:', credentialResponse);
        // Process the credentialResponse (e.g., send the JWT token to your backend for verification)
      };

      const handleGoogleLoginError = () => {
        console.log('Login Failed');
      };

      return (
        <div>
          <h2>Sign in with Google</h2>
          <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onError={handleGoogleLoginError}
          />
        </div>
      );
    };

    export default MyAuthComponent;