import React, { useEffect, useRef, useState } from 'react'
import { getObjHandleForm } from '../scripts/general'
import '../styles/resumeForm.css'
import WorkForm from './WorkForm'
import EduForm from './EduForm';

export default function ResumeForm(props) {
    const {preResume}=props;
    console.log(preResume)
    // const [WorkCards,SetWorkCard]=useState(preExistData?)
    const [FirstFormObj,SetFirstFormObj]=useState({})
    const [WorkFormArr,SetWorkForm]=useState(preResume.work??[])
    const [EduFormArr,SetEduForm]=useState(preResume.education??[])
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
    const addEdu=(newEdu)=>{
        SetEduForm([...EduFormArr,newEdu])
    }
    const removeEdu=(removeIndex)=>{
        SetEduForm(EduFormArr.filter((_,index)=> index !== removeIndex))
    }


  return (
    <div className='bigForm'>
        <div className='formContainer'>
            <h1 className='text-center'> genral info: </h1>
            <form ref={fFormRef} onSubmit={firstSubmitFunc}>
                <label htmlFor="fullname">fullname:
                    <input onChange={fFormChange} type="text" name="fullname" defaultValue={preResume.fullname??''}/>
                </label>
                <label htmlFor="about">about:
                    <input onChange={fFormChange} type="text" name="about" defaultValue={preResume.about??''} />
                </label>
                <label htmlFor="phone">phone:
                    <input onChange={fFormChange} type="number" name="phone" defaultValue={preResume.phone??''}/>
                </label>
                <label htmlFor="email">email:
                    <input onChange={fFormChange} type="email" name="email" defaultValue={preResume.email??''} />
                </label>
                <button type="submit">submit</button>
            </form>
        </div>
        <div className='formContainer'>
            <h1 className='text-center'> work experience: </h1>
            <WorkForm WorkCards={WorkFormArr} addWork={addWork} removeWork={removeWork}></WorkForm>
        </div>
        <div className='formContainer'>
            <h1 className='text-center'> education: </h1>
            <EduForm  EduCards={EduFormArr} addEdu={addEdu} removeEdu={removeEdu} ></EduForm>
        </div>
        <br></br>
    </div>
  )
}
