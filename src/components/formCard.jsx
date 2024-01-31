import React from 'react'
import { formatDate } from '../scripts/general';

export default function FormCard(props) {
    const isWork=props.isWork;
    const{ place, role,skill, timeStart, timeEnd,index }=props.currCard
 
    return (
        <div className="card">
          <h2>{isWork?'Company:':'institution:'} {place}</h2>
          <p> {isWork?`Role: ${role}`:`skill ${skill}`}</p>
          <p>{formatDate(timeStart)}- {formatDate(timeEnd)} </p>
          <button onClick={()=>{props.remove(index)}}>remove</button>
        </div>
      );
}
