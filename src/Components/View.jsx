import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link, useParams } from 'react-router-dom';


 


function View() {

  const base_url='http://localhost:8000'
  const [conData,setConData]=useState({})//object

  //get an id from url

  const {id}=useParams()
  console.log(id);

  //api call

  const fetchAContact=async(id)=>{
    const result=await axios.get(`${base_url}/view-contact/${id}`)
    setConData(result.data.persons)
  }
  console.log(conData);//object

  useEffect(()=>{
    fetchAContact(id)
  },[])

  return (
    <div>
      <div className="row"  >
      <h2 className='text-center text-danger mt-5 '>Contact Details</h2>

      <img src="" alt="" />

        <Card style={{ width: '500px',marginLeft:"420px",height:"360px",padding:"5px"}}>
      {
        <ListGroup variant="flush">
        <ListGroup.Item>Id:{conData.id}</ListGroup.Item>
        <ListGroup.Item>FullName:{conData.name}</ListGroup.Item>
        <ListGroup.Item>Address:{conData.address}</ListGroup.Item>
        <ListGroup.Item>Email:{conData.email}</ListGroup.Item>
        <ListGroup.Item>UserName:{conData.username}</ListGroup.Item>
        <ListGroup.Item>Password:{conData.password}</ListGroup.Item>
        <ListGroup.Item>PhoneNumber:{conData.phone}</ListGroup.Item>

      </ListGroup>
      }
      <div className='text-center'>
        <Link to={'/home'}>
        <button className='btn btn-danger m-2 '>Go Back
      </button>
        </Link>
      
      </div>
        
    </Card>
      </div>
    </div>
  )
}

export default View