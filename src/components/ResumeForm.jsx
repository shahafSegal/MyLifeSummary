import React, { useEffect, useRef, useState } from 'react'
import { getObjHandleForm } from '../scripts/general'
import '../styles/resumeForm.css'
import WorkForm from './WorkForm'

export default function ResumeForm(props) {
    // const preExistData=props.resumeData;
    // const [WorkCards,SetWorkCard]=useState(preExistData?)
    const [FirstFormObj,SetFirstFormObj]=useState({})
    const [WorkFormArr,SetWorkForm]=useState([])
    const [EduFormArr,SetEduForm]=useState([])
    const fFormRef=useRef()

    useEffect(()=>{
        const formObj= Object.fromEntries( new FormData( fFormRef.current))
        SetFirstFormObj(formObj)
    },[])

    useEffect(()=>{if(!isObjectEmpty(FirstFormObj))sendBigForm()},[FirstFormObj,WorkFormArr,EduFormArr])
    
    function isObjectEmpty(obj) {
        return Object.keys(obj).length === 0;
    }
    

    const firstSubmitFunc=(e)=>{
        const formObj= getObjHandleForm(e)
        SetFirstFormObj(formObj)
        fFormRef.current.classList.remove('changedForm')
    }

    const sendBigForm=()=>{
        let newResume={}
        newResume={...newResume,...FirstFormObj}
        newResume={...newResume,work:WorkFormArr,education:EduFormArr}
        props.resumeChange(newResume)
    }

    const fFormChange=()=>{
        fFormRef.current.classList.add('changedForm')
    }

    const addWork=(newWork)=>{
        SetWorkForm([...WorkFormArr,newWork])
    }
    const removeWork=(removeIndex)=>{
        SetWorkForm(WorkFormArr.filter((_,index)=> index !== removeIndex))
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
        <WorkForm WorkCards={WorkFormArr} addWork={addWork} removeWork={removeWork}></WorkForm>
    </div>
  )
}
