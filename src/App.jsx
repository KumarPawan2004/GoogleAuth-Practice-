    import React from 'react';
    import { GoogleOAuthProvider } from '@react-oauth/google';
    import MyAuthComponent from './MyAuthComponent'; // Your component with the Google login button

    const App = () => {
      const clientId = "37118026115-mhlhq2vtetdl8ncf98n71iboh80joutg.apps.googleusercontent.com"; // Replace with your actual Client ID
//test
      return (
        <GoogleOAuthProvider clientId={clientId}>
          <MyAuthComponent />
        </GoogleOAuthProvider>
      );
    };

    export default App;