import React, { useEffect,useState } from 'react'
import { getObjHandleForm } from '../scripts/general'
import FormCard from './formCard'

export default function WorkForm(props) {
    const handleSubmit=(e)=>{
        const formObj = getObjHandleForm(e)
        formObj.timeStart=new Date(formObj.timeStart).getTime()
        formObj.timeEnd=new Date(formObj.timeEnd).getTime()
        if(formObj.timeEnd&&formObj.timeStart)
        {
            addWork(formObj)
            e.target.reset()
        }
        else{
            console.log('Invalid Dates')
        }
       
    }
    const renderWCards=()=>{
        const rWCards=WorkCards.map((val,index)=><FormCard key={index} currCard={{...val,index:index}} remove={removeWork} isWork={true}></FormCard>)
        console.log(rWCards)
        setRenderedWorkCards(rWCards)
    }


    const WorkCards=props.WorkCards
    const addWork=props.addWork
    const removeWork=props.removeWork
    const [renderedWorkCards, setRenderedWorkCards] = useState([]);

    

    useEffect(renderWCards,[WorkCards])
    



    return (
    <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="place">
                <input type="text" name="place"/>
            </label>
            <label htmlFor="role">
                <input type="text" name="role"/>
                
            </label>
            <label htmlFor="timeStart">
                <input type="date" name="timeStart"/>
            </label>
            <label htmlFor="timeEnd">
                <input type="date" name="timeEnd"/>                
            </label>
            <button type="submit">submit</button>

        </form>
        <div>
            {renderedWorkCards}
        </div>
    </>
    )
}
