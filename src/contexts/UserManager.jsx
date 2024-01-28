import React, { useState,useEffect, createContext } from 'react'
import {signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut,onAuthStateChanged} from "firebase/auth"
import { auth } from '../config/config'
export const UserContext= createContext({})

export default function UserManager({children}) {

    const SignUpFunc= (email,pass)=>{
        createUserWithEmailAndPassword(auth,email,pass)
          .then((userCredential) => {
            setUserObj({email:email,id:userCredential.user.uid,error:''})
          })
          .catch((error) => {
            const errorMessage = extractErrorType(error.message);
            console.log(errorMessage)
            setUserObj({...UserObj,error:errorMessage})
          });
    }

    const LoginFunc=(email,pass)=>{
        signInWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
          setUserObj({email:email,id:userCredential.user.uid,error:''})
        })
        .catch((error) => {
          const errorMessage = extractErrorType(error.message);
          setUserObj({...UserObj,error:errorMessage})
      });
    }
    
    const logOut=()=>{
        signOut(auth).then(() => {
          setUserObj({email:'',id:'',error:''})
        }).catch((error) => {
          console.log(error)
        })
    };

    const extractErrorType=(errorString)=> {
        const prefix = "auth/";
        const suffix = ")";
        
        const startIndex = errorString.indexOf(prefix);
        const endIndex = errorString.indexOf(suffix, startIndex + prefix.length);
      
        if (startIndex !== -1 && endIndex !== -1) {
          return errorString.slice(startIndex + prefix.length, endIndex);
        } else {
          // Handle the case where the expected substrings are not found
          return "";
        }
    }
    const ClearUserErr=()=>{setUserObj({...UserObj,error:""})}

  
    const[UserObj,setUserObj]=useState({email:'',id:'',error:''})

    useEffect(()=>{
    
        onAuthStateChanged(auth,(user) => {
          if (user) {
           setUserObj({email:user.email,id:user.uid,error:''})
          } else {
            console.log("not signed")
          }
        });
    
    },[])
  
    return (
        <UserContext.Provider value={{UserObj,LoginFunc,SignUpFunc,logOut,ClearUserErr}}>
            {children}
        </UserContext.Provider>
    )
}
