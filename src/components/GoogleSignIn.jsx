import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientId =  "664807478784-95m0jem6mgo0b2bl458p10s34ik4cpe9.apps.googleusercontent.com";

// client id
// 664807478784-95m0jem6mgo0b2bl458p10s34ik4cpe9.apps.googleusercontent.com
//secret
// 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

const GoogleSignIn = () => {
    const handleLogin = (response) => {
        console.log(response); // Access user profile information and access token
        // Process the login response here (e.g., send it to your backend)
      };
    
      const handleError = (error) => {
        console.error(error);
      };

    return (
        <GoogleOAuthProvider clientId={clientId}>
                {/* Your app content */}
                <GoogleLogin
                    buttonText="Login with Google"
                    onSuccess={handleLogin}
                    onError={handleError}
                />
        </GoogleOAuthProvider>
    );
};

export default GoogleSignIn;
