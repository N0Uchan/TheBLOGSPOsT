import { createContext, useState } from "react";
import { getUserPosts } from "../assets/httpReq";

export const userDetailsContext = createContext({
    email :'',
    author:'',
    picture :'',
    userPosts:[] ,
    uid:'',
    loggedIn: false,
    setUserDetails : ()=>{},
    refreshUserPosts : ()=>{}
});



export default function UserDetailsContextProvider({ children }) { 
    const oldState = JSON.parse(localStorage.getItem('userDetails'));
    const [userState,setUserState]= useState( oldState ? oldState :{
        email :'',
        author:'',
        picture :'',
        userPosts:[] ,
        uid:'',
        loggedIn: false,
    });
    function setUserDetails({ email, author, picture, userPosts , uid }) {
        setUserState((prev) => {
          const newUserState = {
            ...prev,
            loggedIn: true
          };
      
          if (email) newUserState.email = email;
          if (author) newUserState.author = author;
          if (picture) newUserState.picture = picture;
          if (userPosts) newUserState.userPosts = userPosts;
          if (uid) newUserState.uid = uid;
      
          localStorage.setItem('userDetails', JSON.stringify(newUserState));
          return newUserState;
        });
      }

    async function refreshUserPosts(){
        const resNewUserPosts = await getUserPosts(userState.email);
        const newUserPosts = resNewUserPosts.userPosts ;
        setUserState( (prev) => {
            const newUserState = {
                ...prev,
                userPosts: newUserPosts
            }
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
        uid : userState.uid,
        setUserDetails : setUserDetails,
        refreshUserPosts : refreshUserPosts
    }

    return (
        <userDetailsContext.Provider value={ctxValue}>
            {children}
        </userDetailsContext.Provider>
    );
}