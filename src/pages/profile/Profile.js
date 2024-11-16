import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
const Profile = () => {
    return (
        <div>
            <Topbar />
            <div className='d-flex '>
                <Sidebar />
                <div className='' style={{ flex: '9' }}>
                    <div style={{height:'360px',position:'relative'}}>
                       <div >
                       <img src="assets/post/3.jpeg" alt="" style={{height:'250px',width:'100%'}}/>
                       <img src="assets/post/7.jpeg" alt="" style={{position:'absolute',height:'150px',width:'150px',borderRadius:'50%',left:'0',right:'0',margin:'auto',top:'150px',border:'3px solid white',objectFit:'cover'}}/>
                       </div>
                       <div className='d-flex justify-content-center align-items-center  mt-5 ' style={{flexDirection:'column'}}>
                        <h4>Adil Anwar</h4>
                        <span>Hello my freinds</span>
                       </div>
                    </div>
                    <div className='d-flex'>
                    <Feed />
                    <Rightbar profile/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
