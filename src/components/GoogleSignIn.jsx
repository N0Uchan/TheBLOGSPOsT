import { GoogleLogin } from "@react-oauth/google";
import { postUserInfo } from "../assets/httpReq";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userDetailsContext } from "./userDetailsContextProvider";

function GoogleSignIn(){
  const navigate = useNavigate();
  const {setUserDetails} = useContext(userDetailsContext);

  async function handleLogin (response){
    const authCode = response.code;
    const resUserData = await postUserInfo(authCode);    
    setUserDetails(resUserData.email,resUserData.given_name,resUserData.picture,resUserData.userPosts);
    console.log(resUserData);
    if (resUserData.email) {      
      navigate('/home');
    }
  };

  function handleError (error) {
    console.error(error);
  };

  return (
    <GoogleLogin
      buttonText='Login with Google'
      onSuccess={handleLogin}
      onError={handleError}
      cookiePolicy={"single_host_origin"}
      isSignedIn={true}
    />
  );
};

export default GoogleSignIn;
