import React, { useState,useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from "./components/Header";
import GetList from "./components/GetList";
// import PropTypes from 'prop-types'

// GetIDList.propTypes = {
//     IDList: PropTypes.array,

// };

// GetIDList.defaultProps = {
//     IDList: [],
// };

// GetUniqueList.propTypes = {
//   UniqueList: PropTypes.array,

// };

// GetUniqueList.defaultProps = {
//   UniqueList: [],
// };

// function GetIDList(props) {
//   const { IDList } = props;
//   return (
//       <ul className='list-group'>
          
//           {IDList.map(post =>(
//               <li>{'http://localhost:5000/get-students-by-subject/'+post.subject_code}
//               </li>
             
              
//           ))}

//       </ul>
      
//   );
// }


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

//   const [UniqueList, setUniqueList] = useState([]);
// useEffect(() => {
//   async function fetchUniqueList(){
//     try{
//       const requestUrl = 'http://localhost:5000/subjects'+GetIDList;
//       const response = await fetch(requestUrl);
//       const responseJSON = await response.json();
//       console.log(responseJSON);
//       setUniqueList(responseJSON);
//     }catch{

//     }
    
//   }

//   fetchUniqueList();
// }, []);




  return (
    <Router>
    <div className="container">

      <Header />
      <GetList studentList={studentList} />
      {/* <Route path='/student' element={<GetList UniqueList={UniqueList}/>}/> */}
    </div>
    </Router>
  );
}

export default App;
