import React, {Fragment,useState} from 'react'
import PropTypes from 'prop-types'

GetList.propTypes = {
    studentList: PropTypes.array,

};

GetList.defaultProps = {
    studentList: [],
}

//fetching the unique student list for each subject

function GetList(props) {
    const { studentList } = props;
    const [studentIDList, setStudentList] = useState([]);
    const onClick = (subjectID) => {
        fetch(`http://localhost:5000/get-students-by-subject/${subjectID}`)
        .then(result=>result.json())
        .then(result=>{
            setStudentList(result.student_ids)
        })

    }

    //Mapping the unique subject list and diplaying Student IDs as pop-ups
    return (
        <Fragment>
            <ul className='list-group'>
            
            {studentList.map((post, index) =>(
                <li key={index} className='list-group-item'>
                    {post.subject_code}  &nbsp;- &nbsp; {post.subject_desc} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
                 <button  type="button" className='btn btn-secondary btn-sm' data-toggle="modal" data-target="#exampleModal" onClick={()=>onClick(post.subject_code)}>Student List</button>
                </li>
               
                
            ))}

        </ul>
                

        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">List of Student IDs</h5>
        
          
      </div>
      <div className="modal-body">
        {
            studentIDList.map((value,index)=>{
                return(
                    <p key={index}>
                        {
                            value
                        }
                    </p>
                )
            })
        }
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
     
      </div>
    </div>
  </div>
</div>
        

        </Fragment>
        
        
    );
}

export default GetList;

