import React from 'react'

const Online = ({user}) => {
  return (
    <div>
      <li className='d-flex mb-3'>
          <div className='align-item-center' style={{position:'relative',marginLeft:'-30px'}}>
            <img src={user.profilePicture} alt="" style={{width:'40px',height:'40px',borderRadius:'50%'}}/>
            <span style={{width:'12px',height:'12px',backgroundColor:'green',borderRadius:'50%',position:'absolute',top:'-3px',right:'0',border:'1px solid white'}}></span>
          </div>
          <b>
          <span className='mx-2'>{user.username}</span>
          </b>
        </li>
      
    </div>
  )
}

export default Online
