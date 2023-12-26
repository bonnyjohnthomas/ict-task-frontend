import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';





function Add() {

  const location=useNavigate()

    const[id,setId]=useState('')
    const[url,setUrl]=useState('')

    const pathParams = useParams()
    console.log(pathParams.id);
    
    
    
    const fetchData=async()=>{
        
        setId(pathParams.id)
        
        
       }


       useEffect(()=>{
        fetchData()
       },[])
       
       console.log(id);
       console.log(url);

    
       const add=async(e)=>{
    
        const body={id,url}
        console.log(body);
    
        const result =await axios.post(`http://localhost:8000/main/add/${id}`,body)
        console.log(result);
        alert(result.data.message)

        // location(`main/${}`)
         
       }
    


  return (


    <div className='mt-5' style={{width:"1000px" , marginLeft:"170px"}}>

          <Form.Control onChange={(e)=>setUrl(e.target.value)}  type="text" placeholder="Enter Url" />  <br />

          <Button onClick={(e)=>add(e)} className='mt-5' style={{marginLeft:"800px"}} variant="success">Add Photos</Button>

    </div>



  )
}

export default Add