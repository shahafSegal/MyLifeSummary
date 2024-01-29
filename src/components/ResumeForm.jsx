import React, { useEffect, useRef, useState } from 'react'
import { getObjHandleForm } from '../scripts/general'
import '../styles/resumeForm.css'

export default function ResumeForm(props) {
    // const preExistData=props.resumeData;
    // const [WorkCards,SetWorkCard]=useState(preExistData?)
    const [FirstFormObj,SetFirstFormObj]=useState({})
    const [WorkFormObj,SetWorkForm]=useState([])
    const [EduFormObj,SetEduForm]=useState([])
    const fFormRef=useRef()

    useEffect(()=>{
        const formObj= Object.fromEntries( new FormData( fFormRef.current))
        SetFirstFormObj(formObj)
    },[])
    

    const firstSubmitFunc=(e)=>{
        const formObj= getObjHandleForm(e)
        SetFirstFormObj(formObj)
        fFormRef.current.classList.remove('changedForm')
    }

    const sendBigForm=()=>{
        let newResume={}
        newResume={...newResume,...FirstFormObj}
        newResume={...newResume,work:WorkFormObj,education:EduFormObj}
        props.resumeChange(newResume)
    }

    const fFormChange=()=>{
        fFormRef.current.classList.add('changedForm')
    }


  return (
    <div>
        <form ref={fFormRef} onSubmit={firstSubmitFunc}>
            <label htmlFor="fullname">fullname:
                <input onChange={fFormChange} type="text" name="fullname"/>
            </label>
            <label htmlFor="about">about:
                <input onChange={fFormChange} type="text" name="about"/>
            </label>
            <label htmlFor="phone">phone:
                <input onChange={fFormChange} type="number" name="phone"/>
            </label>
            <label htmlFor="email">email:
                <input onChange={fFormChange} type="email" name="email" />
            </label>
            <button type="submit">submit</button>
        </form>
        <button onClick={sendBigForm}>save new resume</button>
    </div>
  )
}
