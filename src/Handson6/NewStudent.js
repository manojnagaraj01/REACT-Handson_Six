import React, { useContext } from 'react'
import Store from "./StoreComp";
import { useNavigate } from 'react-router-dom';
import "./Handson6.css";

function NewStudent() {
    const dataContext =  useContext(Store)
    console.log(dataContext);
    const Navi = useNavigate()

    const newObj = {
        name : " ",
        age : " ",
        course : " ",
        batch : " "
    }
    const handleChange = (e) =>{
        newObj[e.target.name] = e.target.value;
    }
    const handleSubmit = (e) =>{
        dataContext.data.push(newObj)
        console.log('data');
        Navi('/student')
    }
    const handleCancel = () =>{
        Navi('/student')
    }
    return (
        <div>
            <h1>Add new student</h1>
            <div className='inputs'>
                <label className='new-label'>NAME
                    <input className='new-input' type='text' placeholder='Enter name'  name='name'  onChange={handleChange}/>
                </label>
                <label className='new-label'>AGE
                    <input className='new-input' type='number' placeholder='Enter age' name='age'  onChange={handleChange}/>
                </label>
            </div>
            <div className='inputs'>
                <label className='new-label'>COURSE 
                    <input className='new-input' type='text' placeholder='Enter course' name='course'  onChange={handleChange}/>
                </label>
                <label className='new-label'>BATCH
                    <input className='new-input' type='text' placeholder='Enter Batch' name='batch' onChange={handleChange}/>
                </label>
            </div>
            <div className='new-student-button'>

            <button className='update-button' onClick={handleSubmit}>Update</button>
            <button className='cancel-button' onClick={handleCancel}> cancel </button>
            </div>
        </div>
    )
}

export default NewStudent