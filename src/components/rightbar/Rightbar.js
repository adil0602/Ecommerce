import React from 'react'
import {Users} from '../../dummyData'
import Online from '../online/Online'

const Rightbar = ({profile}) => {
  const HomeRight=()=>{
    return(
      <div>
      <div  className='d-flex align-item-center'>
        <img src="assets/gift.png" alt="" style={{height:'40px',width:'40px'}}/>
        <span className='p-2'>
         <small> <b>Adil Anwar</b> and <b>3 other friend </b>have birthday today.</small>
        </span>
      </div>
      <img className='mt-2 mb-2' src="assets/ad.png" alt="" style={{width:'100%',borderRadius:'20px'}}/>
      <h4>Online Friends</h4>
      <ul style={{listStyle:'none'}}>
        {Users.map(u=>(
          <Online key={u.id} user={u}/>
        ))}
          
      </ul>
    </div>
    )
  }
  const Profileright=()=>{
    return(
      <>
      <h4>User information</h4>
      <div className='mb-3'>
        <div>
          <b><span >City:</span></b>
          <span className='mx-2'>New York</span>
        </div>
        <div>
          <b><span>From:</span></b>
          <span className='mx-2'>Madrid</span>
        </div>
        <div>
         <b> <span>Relationship:</span></b>
          <span className='mx-2'>Single</span>
        </div>
      </div>
      <h4>
        User Friends
      </h4>
      <div className='d-flex' style={{flexWrap:'wrap',justifyContent:'space-between'}}>
        <div className='d-flex'style={{flexFlow:'column',alignItems:'center',cursor:'pointer'}}>
          <img src="assets/person/1.jpeg" alt="" style={{height:'80px',width:'80px',borderRadius:'10px',margin:'10px'}}/>
          <span>Adil</span>
        </div>
        <div className='d-flex'style={{flexFlow:'column',alignItems:'center',cursor:'pointer'}}>
          <img src="assets/person/2.jpeg" alt="" style={{height:'80px',width:'80px',borderRadius:'10px',margin:'10px'}}/>
          <span>Adil</span>
        </div>
        <div className='d-flex'style={{flexFlow:'column',alignItems:'center',cursor:'pointer'}}>
          <img src="assets/person/3.jpeg" alt="" style={{height:'80px',width:'80px',borderRadius:'10px',margin:'10px'}}/>
          <span>Adil</span>
        </div>
        <div className='d-flex'style={{flexFlow:'column',alignItems:'center',cursor:'pointer'}}>
          <img src="assets/person/4.jpeg" alt="" style={{height:'80px',width:'80px',borderRadius:'10px',margin:'10px'}}/>
          <span>Adil</span>
        </div>
        <div className='d-flex'style={{flexFlow:'column',alignItems:'center',cursor:'pointer'}}>
          <img src="assets/person/5.jpeg" alt="" style={{height:'80px',width:'80px',borderRadius:'10px',margin:'10px'}}/>
          <span>Adil</span>
        </div>
        <div className='d-flex'style={{flexFlow:'column',alignItems:'center',cursor:'pointer'}}>
          <img src="assets/person/6.jpeg" alt="" style={{height:'80px',width:'80px',borderRadius:'10px',margin:'10px'}}/>
          <span>Adil</span>
        </div>
      </div>
      </>
    )
  }
  return (
    <div className='mt-3' style={{flex:'3.5'}}>
   {profile?<Profileright/>:<HomeRight/>}
    </div>
  )
}

export default Rightbar
