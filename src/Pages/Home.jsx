import React, { useState } from 'react'
import Projectlist from './Projectlist'
import ProjectForm from './ProjectForm'

function Home() {
    let[formdata,setFormdata]=useState({})
    let formhandle=(a)=>{
      let name=a.target.name
      let value=a.target.value
        setFormdata(values=>({...values,[name]:value}))
    }
    let handleSubmit= (a)=>{
        a.preventDefault() 
        console.log(formdata)
    }
  return (
    <>
      <div className="container-expand-lg bg-primary ">
        <h3 className='text-center py-3 text-white '>Login</h3>
        <form onSubmit={handleSubmit}>
            <fieldset className=' border py-3 rounded bb'>
                <label htmlFor='name'>Email/Username</label> <br />
                <input className='w'onClick=''type="text" id='name' name='name'onChange={formhandle}/> <br />
                <label htmlFor='password' >Password</label> <br />
                <input className='w' type="password" id='password' name='password' onChange={formhandle}/> <br />
                <button className='btn btn-danger m-2 p-2'>Sign In</button>
            </fieldset>
        </form>

      </div>
      <br />
      <Projectlist/>
<br />
      <ProjectForm/>
     
    </>
  )
}

export default Home;
