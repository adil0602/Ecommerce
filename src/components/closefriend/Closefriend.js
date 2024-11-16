import React from 'react'

const Closefriend = (props) => {
  return (
    <div>
         <li className='mb-3'>
            <img className='mx-1' src={props.profilePicture} alt="" style={{height:'30px',width:'30px',borderRadius:'50%'}}/>
            <span>{props.username}</span>
          </li>
      
    </div>
  )
}

export default Closefriend
