import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Add() {

 const [id,setId]=useState('')
 const [name,setName]=useState('')
 const [address,setAddress]=useState('')
 const [email,setEmail]=useState('')
 const [username,setUsername]=useState('')
 const [password,setPassword]=useState('')
 const [phone,setPhone]=useState('')

 const base_url='http://localhost:8000'
const location=useNavigate()

 const AddContact=async(e)=>{
  e.preventDefault()
  console.log(id,name,address,email,username,password,phone);
  const body={
    id,name,address,email,username,password,phone
  }
  //Api call for add a contact
  const result=await axios.post(`${base_url}/add-contact`,body).then((response)=>{
    console.log(response);
    alert(response.data.message)
    location('/home')

  })
  .catch((error)=>{
    alert('Please enter a unique id')
  })
   
 }
 
    
  return (
    <div>
      <div className="container text-center mt-5 " >
      <Card style={{ width: "500px",marginLeft:"340px",marginTop:"80px",padding:'20px'}}>
        <h1>Add Contact</h1>
        <MDBInput onChange={(e)=>setId(e.target.value)} label='Id' id='formControlLg' type='text' size='lg' className='mb-2' />
        <br /> 
        <MDBInput onChange={(e)=>setName(e.target.value)} label='Name' id='formControlLg' type='text' size='lg' className='mb-2' />
        <br />
        <MDBInput onChange={(e)=>setAddress(e.target.value)} label='Address' id='formControlLg' type='text' size='lg'  className='mb-2'/>
        <br />
        <MDBInput onChange={(e)=>setEmail(e.target.value)} label='Email' id='formControlLg' type='text' size='lg'  className='mb-2'/>
        <br />
        <MDBInput onChange={(e)=>setUsername(e.target.value)} label='Username' id='formControlLg' type='text' size='lg'  className='mb-2'/>
        <br />
        <MDBInput onChange={(e)=>setPassword(e.target.value)} label='Password' id='formControlLg' type='text' size='lg'  className='mb-2'/>
        <br />
        <MDBInput onChange={(e)=>setPhone(e.target.value)} label='Phone Number' id='formControlLg' type='text' size='lg'  className='mb-2'/>
        <br />
     
      <div>
        <button className='btn btn-info p-3 m-3' onClick={(e)=>AddContact(e)}>Add</button>
      </div>
    </Card>
      </div>
       
    </div>
  )
}

export default Add