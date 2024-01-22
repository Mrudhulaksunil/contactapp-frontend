import React, { useEffect } from 'react'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios'
import { useState } from 'react';
import { Link } from 'react-router-dom';



function Home() {

  const base_url='http://localhost:8000'
  const [conData,setConData]=useState([])

  const fetchData=async()=>{
    const result=await axios.get(`${base_url}/get-all-contacts`)
    setConData(result.data.persons)
  }
  console.log(conData);

  const DeleteContact=async(id)=>{
    const result=await axios.delete(`${base_url}/delete-contact/${id}`)
    alert(result.data.message)
    fetchData()

  }
  useEffect(()=>{
    fetchData()
  },[])

    
  return (
    <div>
        <h1 className='text-center mt-5'>CONTACTS</h1>
        <MDBTable align='middle' className='m-3 p-2'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Id</th>
          <th scope='col'>Name</th>
          <th scope='col'>Email</th>
          <th scope='col'>Phone Number</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {conData.map(item=>(
            <tr>
            <td>
              {item.id}
            </td>
            <td>
              <div className='d-flex align-items-center'>
                <i class="fa-solid fa-user fs-5"></i>
                <div className='ms-3'>
                  <p className='fw-bold mb-1'>{item.name}</p>
                </div>
              </div>
            </td>
            <td>
              {item.email}
            </td>
           
            <td>
              {item.phone}
            </td>
           
            <td >
              <Link to={`/view/${item.id}`}>
              <i class="fa-regular fa-eye fa-success me-2"></i>
              </Link>
              <Link to={`/edit/${item.id}`}>
              <i class="fa-solid fa-pen fa-primary me-3"></i>
              </Link>
              <i class="fa-solid fa-trash fa-danger " onClick={()=>DeleteContact(item.id)}></i>
            </td>
            
          </tr>
          
        ))}
        
      </MDBTableBody>
    </MDBTable>

    <div className='text-center'>
      <Link to={'/add'}>
      <button className='btn btn-success'>Add Contacts<i class="fa-solid fa-plus ms-3"></i></button>
      </Link>
    </div>
          
    </div>
  )
}

export default Home