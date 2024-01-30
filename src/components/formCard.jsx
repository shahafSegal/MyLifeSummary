import React from 'react'

export default function FormCard(props) {
    const isWork=props.isWork;
    const{ place, role,skill, timeStart, timeEnd,index }=props.currCard
 
    return (
        <div className="card">
          <h2>{isWork?'Company:':'institution:'} {place}</h2>
          <p> {isWork?`Role: ${role}`:`skill ${skill}`}</p>
          <p>Time Start: {timeStart.toLocaleDateString()}</p>
          <p>Time End: {timeEnd.toLocaleDateString()}</p>
          <button onClick={()=>{props.remove(index)}}>remove</button>
        </div>
      );
}
