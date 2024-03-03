import React, { useRef } from 'react'
import { formatDate } from '../scripts/general';
import '../styles/resumePage.css'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Box } from '@mui/material';

export default function ResumeShow(props) {
    const resume=props.resume
    console.log(resume)
    const pdfRef=useRef()

    const downloadPDF = () =>{
      const input = pdfRef.current;
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4', true);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const imgX = (pdfWidth - imgWidth * ratio);
        const imgY = 0;
        pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
        pdf.save('resume.pdf');
      });
    };




    return (
      <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',maxWidth:'100%'}}>
        <button onClick={downloadPDF} className='btn btn-warning w-50'>download as pdf</button>
        <Box sx={{width:'100%',overflowX:'auto' }}>
        <article ref={pdfRef} className='page'>
          <header>
            <h2>{resume.fullname}</h2>
            <p>About: {resume.about}</p>
            <p>Phone: {resume.phone}</p>
            <p>Email: {resume.email}</p>
          </header>
          <div className='resumeRight'>
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
                <p>{formatDate(edu.timeStart)} - {formatDate(edu.timeEnd)}</p>
              </div>
            ))}
          </section>}
          </div>
        </article>
        </Box>
        <button onClick={downloadPDF} className='btn btn-warning w-50'>download as pdf</button>
        </Box>
      );
}
