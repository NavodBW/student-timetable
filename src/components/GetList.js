import React from 'react'
import PropTypes from 'prop-types'

GetList.propTypes = {
    studentList: PropTypes.array,

};

GetList.defaultProps = {
    studentList: [],
}

function showStudents(){
    window.location.href="http://url.com"
}
function GetList(props) {
    const { studentList } = props;
    return (
        <ul className='post-list'>
            
            {studentList.map(post =>(
                <li>{post.subject_code}  -  {post.subject_desc}   <a href={'http://localhost:5000/get-students-by-subject/'+post.subject_code}><button>Link Text</button></a>
                </li>
               
                
            ))}

        </ul>
        
    );
}

export default GetList;

