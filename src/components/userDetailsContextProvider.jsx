import { createContext, useState } from "react";

export const userDetailsContext = createContext({
    email :'',
    author:'',
    picture :'',
    userPosts:[] ,
    loggedIn: false,
    setUserDetails : ()=>{}
});



export default function UserDetailsContextProvider({ children }) { 
    const oldState = JSON.parse(localStorage.getItem('userDetails'));
    const [userState,setUserState]= useState( oldState ? oldState :{
        email :'',
        author:'',
        picture :'',
        userPosts:[] ,
        loggedIn: false,
    });
    function setUserDetails({ email, given_name, picture, userPosts }) {
        setUserState((prev) => {
          const newUserState = {
            ...prev,
            loggedIn: true
          };
      
          if (email) newUserState.email = email;
          if (given_name) newUserState.author = given_name;
          if (picture) newUserState.picture = picture;
          if (userPosts) newUserState.userPosts = userPosts;
      
          localStorage.setItem('userDetails', JSON.stringify(newUserState));
          return newUserState;
        });
      }

    const ctxValue = {
        email : userState.email,
        author: userState.author,
        picture: userState.picture,
        loggedIn: userState.loggedIn,
        userPosts: userState.userPosts,
        setUserDetails : setUserDetails
    }

    return (
        <userDetailsContext.Provider value={ctxValue}>
            {children}
        </userDetailsContext.Provider>
    );
}