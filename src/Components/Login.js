import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios'



function Login() {

    // const location = useNavigate()

   const[id,setId]=useState('')
   const[pass,setPass]=useState('')

   const login=async(e)=>{

    console.log(id);
    console.log(pass);

    const body={id,pass}
    console.log(body);

    const result =await axios.post('http://localhost:8000/login',body)
    console.log(result);
    alert(result.data.message)
    


   }

    return (
        < >

            <div className="container">
                <div className="row " style={{marginTop:'140px'}}>
                    <div className="col-4"></div>

                    <div className="col-4 p-4" >

                        <Form >
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Login ID</Form.Label>
                                <Form.Control onChange={(e)=>setId(e.target.value)} type="text" placeholder="Enter your id" />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={(e)=>setPass(e.target.value)} type="password" placeholder="Password" />
                            </Form.Group>

                           <Link to={`/main/${id}`}> <Button onClick={(e)=>login(e)} style={{marginLeft:'120px'}} type="submit">Login</Button> </Link> <br /> <br />

                           Don't have an account?<Link to={'/register'} className='mx-4'>Register here</Link> 

                        </Form>

                    </div>

                    <div className="col-4"></div>
                </div>
            </div>





        </>
    )



}

export default Login