import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../contexts/UserManager'
import { collection, query, where ,getDocs} from 'firebase/firestore'
import { db } from '../../config/config'
// import { Dropdown } from 'react-bootstrap'
import { NavLink, useParams } from 'react-router-dom'
import { isObjectEmpty } from '../../scripts/general'
import ResumeShow from '../ResumeShow'
import DropDownResume from '../DropDownResume'

export default function MyResumes() {
    const {resumeID}=useParams()
    const {UserObj,UserID}=useContext(UserContext)
    const [UserResumes,SetUserResumes]=useState([])
    const[CurrResume,SetCurrResume]=useState({})

    useEffect(()=>{if(UserObj.id)fetchResumes()},[UserObj])
    useEffect(()=>{if(resumeID)getCurrResume()},[resumeID,UserResumes])
    useEffect(()=>{console.log(CurrResume)},[CurrResume])

    function getCurrResume(){
        const targetObject = UserResumes.find(res => res.id === resumeID);
        if(targetObject){
            SetCurrResume(targetObject)
        }
        else{
            SetCurrResume({})
        }
    }
    

    async function fetchResumes(){
        try {
            const queryUser=query(collection(db,'resumes'),where('userId','==',UserObj.id))
            const querySnapshot = await getDocs(queryUser);
            const data = querySnapshot.docs.map(doc =>{return {...doc.data(),id:doc.id}});
            SetUserResumes(data)
        }catch (error) {
            console.error('Error fetching data from Firestore:', error);
          }
    }
    function renderDropDown(){
        if(UserID){
            return (<DropDownResume UserResumes={UserResumes}/>)         
        }
        return <NavLink to={"/register"}>register to look at your resumes</NavLink>
    }


  return (

    <div>
        {UserObj.id?renderDropDown():<NavLink to={'/register'} className={'btn btn-danger w-100'}>register to view resumes</NavLink>}
        {isObjectEmpty(CurrResume)?null:<ResumeShow resume={CurrResume}></ResumeShow>}
    </div>
  )
}
