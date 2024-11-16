import React from 'react'
import {Search,Person,Chat,Notifications} from "@mui/icons-material"
import {Link} from 'react-router-dom'


const Topbar = () => {
  return (
  <>
 <div className='bg-info text-white' style={{height:'50px',alignContent:'center',position:'sticky',top:'0px'}}>
 <div className=' d-flex justify-content-between '>
    <div>
        <span className='fs-4 fw-bold ms-5'>Lamao</span>

    </div>
    <div style={{marginLeft:'100px'}}>
        <div>
            <Search/>
            <input  type="text" placeholder='Search for friend,post' style={{width:'500px',borderRadius:'20px',border:'none'}}/>
        </div>

    </div>
    <div className='d-flex'>
        <div >
            <Link to="/" className=' mx-3 fw-bold text-white' style={{textDecoration:'none'}}>Home</Link>
            <span className='mx-3 fw-bold'>Timeline</span>
        </div>
        <div style={{cursor:'pointer',position:'relative',marginRight:'15px'}}>
            <Person/>
            <span style={{backgroundColor:'red',position:'absolute',top:'-5px',right:'-5px',width:'15px',borderRadius:'50%'}}>1</span>
        </div>
        <div style={{cursor:'pointer',position:'relative',marginRight:'15px'}}>
            <Chat/>
            <span style={{backgroundColor:'red',position:'absolute',top:'-5px',right:'-5px',width:'15px',borderRadius:'50%'}}>2</span>
        </div>
        <div style={{cursor:'pointer',position:'relative',marginRight:'15px'}}>
            <Notifications/>
            <span style={{backgroundColor:'red',position:'absolute',top:'-5px',right:'-5px',width:'15px',borderRadius:'50%'}}>1</span>
        </div>

    </div>
   <Link to="/profile"> <img src="/assets/person/1.jpeg" alt="" style={{width:'30px',height:'30px',marginRight:'50px',borderRadius:'50%',cursor:'pointer'}}/></Link>
  </div>
 </div>
  </>
  )
}

export default Topbar
