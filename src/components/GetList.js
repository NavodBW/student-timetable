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
        <ul className='post-list'>
            {studentList.map(post =>(
                <li>{post.subject_code}  -  {post.subject_desc}</li>
            ))}

        </ul>
    );
}

export default GetList;

