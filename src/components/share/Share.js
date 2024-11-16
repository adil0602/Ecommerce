import { PermMedia,Label,Room,EmojiEmotions } from '@mui/icons-material'
import React from 'react'

const Share = () => {
    return (
        <div className='container mt-4'>
            <div style={{ width: '100%', height: '160px', borderRadius: '10px', WebkitBoxShadow: `0px 0px 16px -8px rgba(0,0,0,0.68)`, boxShadow: '0px 0px 16px -8px rgba(0,0,0,0.68)' }}>
                <div className='p-3'>
                    <img src="/assets/person/1.jpeg" alt="" style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }} />
                    <input type="text" name="" id="" placeholder='whats in your mind' style={{border:'none',width:'80%'}} />
                </div>
                <hr className='mb-2' style={{width:'90%',margin:'auto'}}/>
                <div className='container'>
                    <div className='d-flex justify-content-between'>
                        <div className='d-flex' style={{cursor:'pointer',alignItems:'center',marginRight:'15px'}}>
                            <PermMedia htmlColor='tomato'/>
                            <span>Photo or Video</span>
                        </div>
                        <div className='d-flex' style={{cursor:'pointer',alignItems:'center',marginRight:'15px'}}>
                            <Label htmlColor='blue'/>
                            <span>Tag</span>
                        </div>
                        <div className='d-flex' style={{cursor:'pointer',alignItems:'center',marginRight:'15px'}}>
                            <Room htmlColor='green'/>
                            <span>Location</span>
                        </div>
                        <div className='d-flex' style={{cursor:'pointer',alignItems:'center',marginRight:'15px'}}>
                            <EmojiEmotions htmlColor='goldenrod' />
                            <span>Feelings</span>
                        </div>
                        <button className='btn btn-success' style={{border:'none'}}>Share</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Share
