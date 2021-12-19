import React from "react";
import Header from "./components/Header";
import { useState,useEffect } from 'react'
import GetList from "./components/GetList";
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
    <div className="container">

      <Header />
      <GetList studentList={studentList} />
     
    </div>
  );
}

export default App;
