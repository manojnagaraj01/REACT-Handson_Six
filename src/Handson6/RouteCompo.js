import React, { useState } from "react";
import Home from "./Home";
import Student from "./Student";
import Contact from "./Contact";
import { BrowserRouter, Routes ,Route, Link } from "react-router-dom";
import Store from "./StoreComp";
import EditStudent from "./Editstudent";
import NewStudent from "./NewStudent";
import "./Handson6.css"

function RouteCompo(){
    const [ data, setData] = useState([
        {name : "Joe" , age:25, course:"MERN" ,  batch: "May"},
        {name : "Biden" , age:26, course:"MERN" , batch: "April"},
        {name : "Trump" , age:22, course:"MEAN" , batch: "March"},
        {name : "Gill" , age:24, course:"MEVN" , batch: "Feb"},
        {name : "Virat" , age:23, course:"MERN" , batch: "Dec"},
        {name : "Surya" , age:24, course:"MEAN" , batch: "April"},
        {name : "Dhoni" , age:26, course:"MEVN" , batch: "Oct"},
        {name : "Rahul" , age:21, course:"MEAN" , batch: "May"},
        {name : "Putin" , age:23, course:"MERN" , batch: "Jun"},
        {name : "Modi" , age:24, course:"MERN" , batch: "Nov"},
    ])
    return(
        <>
            <BrowserRouter>
            <ul>
                <li><Link to="/">Home </Link></li>
                <li><Link to="/student">  Students  </Link></li>
                <li><Link to="/contact">  Contact US</Link></li>
            </ul>
                
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/student" element=
                    {<Store.Provider value={{data : data , setData : setData}}>
                            <Student/>
                    </Store.Provider>}
                    />
                    <Route path="/editstudent/:id" element=
                    {<Store.Provider value={{data : data , setData : setData}}>
                            <EditStudent/>
                    </Store.Provider>}
                    />
                    <Route path="/newstudent" element=
                    {<Store.Provider value={{data : data , setData : setData}}>
                            <NewStudent/>
                    </Store.Provider>}
                    />
                    <Route path="/contact" element={<Contact/>}/>  
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default RouteCompo;