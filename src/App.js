import React, { useState,useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from "./components/Header";
import GetList from "./components/GetList";



//fetching the student list

function App() {

  const [studentList, setStudentList] = useState([]);
  useEffect(() => {
    async function fetchStudentList(){
      try{
        const requestUrl = 'http://localhost:5000/subjects';
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log(responseJSON);
        setStudentList(responseJSON);
      }catch{

      }
      
    }
  
    fetchStudentList();
  }, []);




  return (
    <Router>
    <div className="container">

      <Header />
      <GetList studentList={studentList} />
      
    </div>
    </Router>
  );
}

export default App;
