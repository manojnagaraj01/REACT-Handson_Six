import React, { useContext } from 'react'
import Store from "./StoreComp";
import { useNavigate, useParams } from 'react-router-dom';
import "./Handson6.css"

function EditStudent() {
    const contextData = useContext(Store);
    const index = useParams().id;
    const Navi =  useNavigate()
    console.log(contextData)
    console.log(index)
    console.log(contextData.data[index]);
    

    const updateObj = {
        name : " ",
        age : " ",
        course : " ",
        batch : " "
    }
    
    const handleChange = (e) =>{
        updateObj[e.target.name] = e.target.value;
    }

    const handleSubmit = () =>{
        console.log(updateObj)
        contextData.data[index] = updateObj;
        Navi('/student')
    }
    const handleCancel = () =>{
        Navi('/student')
    }

    return (
        <>
            <h1>edit student</h1>
            <label>NAME</label>
            <input type='text' placeholder='Enter name' name='name'  onChange={handleChange}/>
            <label>Age</label>
            <input type='number' placeholder='Enter age' name='age'  onChange={handleChange}/>
            <label>course</label>
            <input type='text' placeholder='Enter course' name='course'  onChange={handleChange}/>
            <label>BATCH</label>
            <input type='text' placeholder='Enter Batch' name='batch' onChange={handleChange}/>
            
            <button onClick={handleSubmit}>Update</button>
            <button className='backButton' onClick={handleCancel}>cancel</button>
        </>
    )
}

export default EditStudent;