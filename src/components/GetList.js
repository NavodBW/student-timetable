import React from 'react'
import PropTypes from 'prop-types'

GetList.propTypes = {
    studentList: PropTypes.array,

};

GetList.defaultProps = {
    studentList: [],
}


function GetList(props) {
    const { studentList } = props;
    return (
        <ul className='list-group'>
            
            {studentList.map(post =>(
                <li className='list-group-item'>{post.subject_code}  &nbsp;- &nbsp; {post.subject_desc} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <a href={'http://localhost:5000/get-students-by-subject/'+post.subject_code}><button className='btn btn-secondary btn-sm'>Student List</button></a>
                </li>
               
                
            ))}

        </ul>
        
    );
}

export default GetList;

