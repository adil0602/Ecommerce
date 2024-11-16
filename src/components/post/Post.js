import { MoreVert } from '@mui/icons-material'
import React, { useState } from 'react'
import { Users } from '../../dummyData'
const Post = ({ post }) => {
const[like,setlike]=useState(post.like);
const[islike,setislike]=useState(false);
const likehandler=()=>{
    setlike(islike?like-1:like+1);
    setislike(!islike)
}

    return (
        <div className='container'>
            <div style={{ width: '100%', margin: '30px 0px', borderRadius: '10px', WebkitBoxShadow: `0px 0px 16px -8px rgba(0,0,0,0.68)`, boxShadow: '0px 0px 16px -8px rgba(0,0,0,0.68)' }}>
                <div className='d-flex justify-content-between mx-1 '>
                    <div className='mt-1' >
                        <img src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="" style={{ borderRadius: '50%', height: '30px', width: '30px' }} />
                        <strong>
                            <span className='mx-3'>{Users.filter((u) => u.id === post.userId)[0].username}</span>
                        </strong>
                        <small>  <span>{post.date}</span></small>
                    </div>
                    <div>
                        <MoreVert />
                    </div>
                </div>
                <div className='p-2'>
                    <p>{post?.desc}</p>
                    <img src={post.photo} alt="" style={{ width: '100%', maxHeight: '400px' }} />
                </div>

                <div className='d-flex justify-content-between p-2' style={{ alignItems: 'center' }}>
                    <div>
                        <img className='me-1' src="/assets/like.png" alt="" style={{ height: '20px',cursor:'pointer' }} onClick={likehandler}/>
                        <img className='me-1' src="/assets/heart.png" alt="" style={{ height: '20px',cursor:'pointer' }} onClick={likehandler}/>
                        <span>{like} people liked it</span>
                    </div>
                    <div>
                        <span>{post.commnet} comments</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Post
