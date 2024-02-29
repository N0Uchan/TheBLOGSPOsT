import { GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode';

const GoogleSignIn = () => {
    const handleLogin = (response) => {
        const credentialResponseDecoded = jwtDecode(response.credential);
        console.log(credentialResponseDecoded);
        // Access user profile information and access token
        // Process the login response here (e.g., send it to your backend)
      };
    
      const handleError = (error) => {
        console.error(error);
      };

    return (      
                <GoogleLogin
                    buttonText="Login with Google"
                    onSuccess={handleLogin}
                    onError={handleError}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
    );
};

export default GoogleSignIn;
