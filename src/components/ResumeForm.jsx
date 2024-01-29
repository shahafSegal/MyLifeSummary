import React, { useState } from 'react'
import { getObjHandleForm } from '../scripts/general'

export default function ResumeForm(props) {
    // const preExistData=props.resumeData;
    // const [WorkCards,SetWorkCard]=useState(preExistData?)

    const mainsubmitFunc=(e)=>{
        const formObj= getObjHandleForm(e)
        console.log(formObj)

    }

  return (
    <form onSubmit={mainsubmitFunc}>
        <label htmlFor="fullname">fullname:
            <input type="text" name="fullname"/>
        </label>
        <label htmlFor="about">about:
            <input type="text" name="about"/>
        </label>
        <label htmlFor="phone">phone:
            <input type="number" name="phone"/>
        </label>
        <label htmlFor="email">email:
            <input type="email" name="email" />
        </label>
        <button type="submit">submit</button>
    </form>
  )
}
