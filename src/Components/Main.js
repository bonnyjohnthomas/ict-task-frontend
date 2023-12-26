import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import './Main.css'




function Main() {
   

  const pathParams=useParams()
  console.log(pathParams.id);

  
  const[id,setId]=useState('')
  const[name,setName]=useState('')
  const[pass,setPass]=useState('')
  const[images,setImage]=useState([])


  const fetchData=async()=>{
    const result=await axios.get('http://localhost:8000/getUser/'+pathParams.id)
    console.log(result.data.user);
    // setId(result.data.employee.id)
    // setName(result.data.employee.empname)
    setImage(result.data.user.images)
    setId(result.data.user.id)
    
    
   }
   console.log(images);
   console.log(id);
   

   

   useEffect(()=>{
    fetchData()
   },[])


    return (

        <>

   <Link to={'add'}><Button className='mt-5' style={{marginLeft:"1200px"}} variant="success">Add Photos</Button></Link> 


           { 
           images.map((item)=>(
            <div  className="container mt-5 mb-5">
                <div id='img' className="row">
                    <div  className="col">

                       <Card  style={{ width: '200px' }}>
                           <Card.Img  variant="top" src={item.url} />
                    
                        </Card>

                    </div>
                </div>
                
            </div>

           ))
           

            }

                   {/* <Image height={'20px'} src={images} fluid />; */}
        </>

    )
}

export default Main