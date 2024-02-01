import React, { useEffect,useState } from 'react'
import { getObjHandleForm } from '../scripts/general'
import FormCard from './formCard'

export default function EduForm(props) {
    const handleSubmit=(e)=>{
        const formObj = getObjHandleForm(e)
        formObj.timeStart=new Date(formObj.timeStart).getTime()
        formObj.timeEnd=new Date(formObj.timeEnd).getTime()
        if(formObj.timeEnd&&formObj.timeStart)
        {
            addEdu(formObj)
            e.target.reset()
        }
        else{
            console.log('Invalid Dates')
        }
       
    }
    const renderECards=()=>{
        const rECards=EduCards.map((val,index)=><FormCard key={index} currCard={{...val,index:index}} remove={removeEdu}></FormCard>)
        console.log(rECards)
        setRenderedEduCards(rECards)
    }


    const EduCards=props.EduCards
    const addEdu=props.addEdu
    const removeEdu=props.removeEdu
    const [renderedEduCards, setRenderedEduCards] = useState([]);

    

    useEffect(renderECards,[EduCards])
    



    return (
    <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="place">
                company:
                <input type="text" name="place"/>
            </label>
            <label htmlFor="skill">
                skill:
                <input type="text" name="skill"/>
                
            </label>
            <label htmlFor="timeStart">
                from:
                <input type="date" name="timeStart"/>
            </label>
            <label htmlFor="timeEnd">
                to:
                <input type="date" name="timeEnd"/>                
            </label>
            <button type="submit">Add Education</button>

        </form>
        <div>
            {renderedEduCards}
        </div>
    </>
    )
}
