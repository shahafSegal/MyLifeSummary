import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../contexts/UserManager'
import { collection, query, where ,getDocs} from 'firebase/firestore'
import { db } from '../../config/config'
import { Dropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function MyResumes() {
    const {UserObj}=useContext(UserContext)
    const [UserResumes,SetUserResumes]=useState([])

    useEffect(()=>{if(UserObj.id)fetchResumes()},[UserObj])

    async function fetchResumes(){
        try {
            const queryUser=query(collection(db,'resumes'),where('userId','==',UserObj.id))
            const querySnapshot = await getDocs(queryUser);
            const data = querySnapshot.docs.map(doc =>{return {...doc.data(),id:doc.id}});
            SetUserResumes(data)
        }catch (error) {
            console.error('Error fetching data from Firestore:', error);
          }
    }
    function renderDropDown(){
        if(UserObj.id){
            const dropdownContent=UserResumes.map((val)=><Dropdown.Item><NavLink to={`/resumes/${val.id}`} className={'btn'}>{val.docName} </NavLink></Dropdown.Item>)
            dropdownContent.push(<Dropdown.Item><NavLink to={'/'} className={'btn'}>+ new Resume </NavLink></Dropdown.Item>)
            return(<Dropdown>
                <Dropdown.Toggle variant="link" className="bg-dark text-decoration-none" id="dropdown-basic">Your resumes ({UserResumes.length})</Dropdown.Toggle>
                <Dropdown.Menu>
                    {dropdownContent}
                </Dropdown.Menu>
            </Dropdown>
            )
        }
        return <NavLink to={"/register"}>register to look at your resumes</NavLink>

    }


  return (

    <div>
        {renderDropDown()}
    </div>
  )
}
