import { React,  useContext} from 'react';
import  {Link, useNavigate } from 'react-router-dom';
import Store from "./StoreComp";
import "./Handson6.css"
function Student() {
    const contextData = useContext(Store)
    // console.log(contextData)
    const Navi = useNavigate()
  return (
    <>
        <div className='new-button-parent'>
            <button className='new-button' onClick={()=>Navi('/newstudent')}>Add new student</button>
        </div>
        <table className='student-table'>
            <thead >
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody  style={{fontFamily:"monospace"}}>
                {contextData.data.map((item, index)=>{
                    return (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.course}</td>
                            <td>{item.batch}</td>
                            <td><Link className="editOption" to= {`/editstudent/${index}`}>Edit</Link></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </>
  )
}

export default Student;