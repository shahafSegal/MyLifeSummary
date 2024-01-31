import React from 'react'
import { formatDate } from '../scripts/general';

export default function ResumeShow(props) {
    const resume=props.resume
    console.log(resume)


    return (
        <article className='bg-dark text-primary'>
          <header>
            <h2>fullname: {resume.fullname}</h2>
            <p>About: {resume.about}</p>
            <p>Phone: {resume.phone}</p>
            <p>Email: {resume.email}</p>
          </header>
    
          {resume.work.length==0?null:<section>
            <h2>Work Experience</h2>
            <ul>
            {resume.work.map((experience, index) => {return (
                <li key={index}>
                    <h3>{experience.role}</h3>
                    <p>{experience.place}</p>
                    <p>{formatDate(experience.timeStart)} - {formatDate(experience.timeEnd)}</p>
                </li>
                )
            })}
            </ul>
          </section>}
    
          {resume.education.length==0?null:<section>
            <h2>Education</h2>
            {resume.education.map((edu, index) => (
              <div key={index}>
                <h3>{edu.skill}</h3>
                <p>{edu.place}</p>
                <p>{formatDate(experience.timeStart)} - {formatDate(experience.timeEnd)}</p>
              </div>
            ))}
          </section>}
        </article>
      );
}
