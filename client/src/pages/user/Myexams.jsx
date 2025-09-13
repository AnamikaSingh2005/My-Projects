import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';

const Myexams = () => {
    const [data,setData]=useState([]);
    const handlefetch=async()=>{
        const res= await axios.get('http://localhost:5000/api/exams/exams')
        setData(res.data)
       // console.log(res)
    }
    useEffect(()=>{
        handlefetch();

    },[])
  return (
     <div className='exam-container'>
     <div className="row">
        <div className="col-sm-12">
          
            <table className="table  ">
              <thead className="table-primary text-center">
                <tr>
                  
                </tr>
                <tr>
                  <th>S No.</th>
                  <th>Exam Name</th>
                  <th>Date</th>
                  <th>Duration</th>
                  <th>Action</th>
                 
                </tr>
              </thead>
              <tbody>
                {data.map((item,i)=>(
                    <tr key={item._id}>
                        <td>{i+1}</td>
                        <td>{item.title}</td>
                        <td>{item.date}</td>
                        <td>{item.duration}</td>
                        <td><Link className='btn btn-primary' to={`/userDashboard/getexam/`+item._id} >START</Link></td>
                    </tr>

                ))}
              </tbody>
              </table>

    </div>
   </div>
   </div>
  
  )
}

export default Myexams