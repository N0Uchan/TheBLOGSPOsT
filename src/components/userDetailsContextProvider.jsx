import { createContext, useState } from "react";

export const userDetailsContext = createContext({
    email :'',
    given_name:'',
    picture :'',
    userPosts:[] ,
    loggedIn: false,
    setUserDetails : ()=>{}
});



export default function UserDetailsContextProvider({ children }) { 
    const oldState = JSON.parse(localStorage.getItem('userDetails'));
    const [userState,setUserState]= useState( oldState ? oldState :{
        email :'',
        given_Name:'',
        picture :'',
        userPosts:[] ,
        loggedIn: false,
    });
    function setUserDetails (email,given_name,picture,userPosts){
        setUserState((prev)=>{
            const newUserState = {
                email : email,
                given_name: given_name,
                picture: picture,
                userPosts: userPosts,
                loggedIn: true
            }
            localStorage.setItem('userDetails', JSON.stringify(newUserState));
            return newUserState;
        } )
    }

    const ctxValue = {
        email : userState.email,
        given_name: userState.given_name,
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