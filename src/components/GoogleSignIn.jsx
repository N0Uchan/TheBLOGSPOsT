import { GoogleLogin } from "@react-oauth/google";
import { postUserInfo } from "../assets/httpReq";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userDetailsContext } from "./userDetailsContextProvider";

function GoogleSignIn(){
  const navigate = useNavigate();
  const {setUserDetails} = useContext(userDetailsContext);

  async function handleLogin (response){
    const credential = response.credential;
    const resUserData = await postUserInfo(credential);     
    setUserDetails({email :resUserData.email, author :resUserData.given_name,picture :resUserData.picture, userPosts:resUserData.userPosts , uid : resUserData._id});
    if (resUserData.email) {      
      navigate('/home');
    }
  };

  function handleError (error) {
    console.error('error'+error);
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
