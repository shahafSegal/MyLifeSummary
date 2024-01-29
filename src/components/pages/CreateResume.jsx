import React, { useState } from 'react'
import ResumeForm from '../ResumeForm'
import { getObjHandleForm } from '../../scripts/general'

export default function CreateResume() {

    const [FormName,SetFormName]=useState('')

    const getName=(e)=>{
        const formObj= getObjHandleForm(e)
        SetFormName(formObj.name)
    }


  return (
    <div>
        <form onSubmit={getName}>
            <label htmlFor="name">name for form:
                <input type="text" name='name' />
            </label>
            <button type="submit">{FormName?'add':'change'} resume name</button>
        </form>
        {FormName?[<ResumeForm key={FormName} />,<button>save new resume</button>]:<h2>Name Resume to start filling</h2>}
        
    </div>
    
  )
}
