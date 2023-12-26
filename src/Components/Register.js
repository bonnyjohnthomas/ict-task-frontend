import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';



function Register() {

  const location = useNavigate()

   const[id,setId]=useState('')
   const[pass,setPass]=useState('')
   const[name,setName]=useState('')

   const register=async(e)=>{

    console.log(id);
    console.log(pass);
    console.log(name);

    const body={id,pass,name}
    console.log(body);

    const result =await axios.post('http://localhost:8000/register',body)
    console.log(result);
    alert(result.data.message)
  


   }

  return (
    <>

      <div className="container">
        <div className="row " style={{ marginTop: '90px' }}>
          <div className="col-4"></div>

          <div className="col-4 p-4" >

            <Form >

              <Form.Group className="mb-3" controlId="formGroupName">
                <Form.Label>Enter your Name</Form.Label>
                <Form.Control onChange={(e)=>setName(e.target.value)}  type="text" placeholder="Enter name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Unique ID</Form.Label>
                <Form.Control onChange={(e)=>setId(e.target.value)}  type="text" placeholder="Enter ID" />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={(e)=>setPass(e.target.value)}  type="password" placeholder="Password" />
              </Form.Group>

              <Button onClick={(e)=>register(e)} style={{ marginLeft: '120px' }} >Register</Button> <br /> <br />

              Already have an account?<Link to={'/'} className='mx-4'>Login here</Link>

            </Form>

          </div>

          <div className="col-4"></div>
        </div>
      </div>


    </>
  )
}

export default Register