import React, { useContext, useEffect, useState } from 'react'
import ResumeForm from '../ResumeForm'
import { getObjHandleForm } from '../../scripts/general'
import {addDoc, collection} from 'firebase/firestore'
import { db } from '../../config/config'
import { UserContext } from '../../contexts/UserManager'
import { NavLink } from 'react-router-dom/dist'
import ResumeShow from '../resumeShow'

export default function CreateResume() {
    const {UserObj}=useContext(UserContext)
    const userId=UserObj.id;
    const[IsResumeSent,SetIsResumeSend]=useState(false);
    const[CurrResume,SetCurrResume]=useState({})
    useEffect(()=>{console.log(CurrResume)},[CurrResume])

    async function addResumeDb(){
        {
          try{
            const docRef= await addDoc(collection(db,"resumes"),
            {...CurrResume,userId:userId
            }
            )
            SetIsResumeSend(true)
            SetCurrResume({})
          }catch (error) {
            console.error("Error setting resumes:", error);
          }
        }
    }
    const anotherResume=()=>{
        SetIsResumeSend(false)
        SetCurrResume({})
    }


    const getName=(e)=>{
        const formObj= getObjHandleForm(e)
        SetCurrResume({...CurrResume,...formObj})
    }
    const changeCurrResume=(newResumeData)=>{
        SetCurrResume({...CurrResume,...newResumeData})
    }

  return (
    <div>
        {userId?null:<NavLink to='/register'><h1>register to save</h1></NavLink>}
        {IsResumeSent?[<h1>Resume created Succesfully</h1>,<button onClick={anotherResume}>Create Another Resume</button>]:<> <form onSubmit={getName}>
           
                <label htmlFor="docName">name for form:
                    <input type="text" name='docName' />
                </label>
                <button type="submit">{CurrResume.docName?'change':'add'} resume name</button>
            </form>
            {CurrResume.docName?<ResumeForm resumeChange={changeCurrResume}/>:<h2>Name Resume to start filling</h2>}
            {CurrResume.work&&userId?<button onClick={addResumeDb}> send Doc</button>:null}
            </>
        }
        {CurrResume.work?<ResumeShow resume={CurrResume}></ResumeShow>:null}
    </div>
    
  )
}
