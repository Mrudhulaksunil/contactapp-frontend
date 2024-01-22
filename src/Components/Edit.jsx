import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {
  const [conid,setId]=useState('')
  const [conname,setName]=useState('')
  const [conaddress,setAddress]=useState('')
  const [conemail,setEmail]=useState('')
  const [conusername,setUsername]=useState('')
  const [conpassword,setPassword]=useState('')
  const [conphone,setPhone]=useState('')

  const base_url='http://localhost:8000'

  const location=useNavigate()


  //get id from url
  const {id}=useParams()
  console.log(id);
  //get contact details using this id
  const fetchAContact=async(id)=>{
    const result=await axios.get(`${base_url}/view-contact/${id}`)
    console.log(result.data.persons);//object
    setId(result.data.persons.id)
    setName(result.data.persons.name)
    setAddress(result.data.persons.address)
    setEmail(result.data.persons.email)
    setUsername(result.data.persons.username)
    setPassword(result.data.persons.password)
    setPhone(result.data.persons.phone)
  }

  useEffect(()=>{
    fetchAContact(id)
  },[])

  //edit function call for edit contact

  const EditContact=async(e)=>{
    e.preventDefault()
    const body={
      id:conid,
      name:conname,
      address:conaddress,
      email:conemail,
      username:conusername,
      password:conpassword,
      phone:conphone
    }
    const result=await axios.post(`${base_url}/edit-contact/${id}`,body)
    console.log(result);
    alert(result.data.message)
    location('/home')

  }
  return (
    <div>
        <div className="container text-center mt-5 " >
      <Card style={{ width: "500px",marginLeft:"340px",marginTop:"80px",padding:'20px'}}>
        <h1>Edit Contact</h1>
        <MDBInput onChange={(e)=>setId(e.target.value)} label='Id' id='formControlLg' value={conid} type='text' size='lg' className='mb-2' />
        <br /> 
        <MDBInput onChange={(e)=>setName(e.target.value)} label='Name' id='formControlLg' value={conname} type='text' size='lg' className='mb-2' />
        <br />
        <MDBInput onChange={(e)=>setAddress(e.target.value)} label='Address' value={conaddress} id='formControlLg' type='text' size='lg'  className='mb-2'/>
        <br />
        <MDBInput onChange={(e)=>setEmail(e.target.value)} label='Email' value={conemail} id='formControlLg' type='text' size='lg'  className='mb-2'/>
        <br />
        <MDBInput onChange={(e)=>setUsername(e.target.value)} label='Username'  value={conusername} id='formControlLg' type='text' size='lg'  className='mb-2'/>
        <br />
        <MDBInput onChange={(e)=>setPassword(e.target.value)} label='Password' value={conpassword} id='formControlLg' type='text' size='lg'  className='mb-2'/>
        <br />
        <MDBInput onChange={(e)=>setPhone(e.target.value)} label='Phone Number' value={conphone} id='formControlLg' type='text' size='lg'  className='mb-2'/>
        <br />
     
      <div>
        <button className='btn btn-info p-3 m-3' onClick={(e)=>EditContact(e)}>Edit</button>
      </div>
    </Card>
      </div>
       
    </div>
  )
}

export default Edit