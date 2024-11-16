import { Bookmark, Chat, Group, MusicVideo, QuestionMarkRounded, RssFeed, Work, Event, School } from '@mui/icons-material'
import React from 'react'
import {Users} from '../../dummyData'
import Closefriend from '../closefriend/Closefriend'

const Sidebar = () => {
  return (
    <div style={{ height: '100vh', flex: '2.8',overflowY:'scroll',position:'sticky',top:'50px' }}>
      <div>
        <ul className='mt-3' style={{listStyle:'none'}}>
          <li className='mb-3'>
            <RssFeed />
            <span>Feed</span></li>
          <li className='mb-3'>
            <Chat />
            <span>Chats</span></li>
          <li className='mb-3'>
            <MusicVideo />
            <span>Videos</span></li>
          <li className='mb-3'>
            <Group />
            <span>Groups</span></li>
          <li className='mb-3'>
            <Bookmark />
            <span>Bookmarks</span></li>
          <li className='mb-3'>
            <QuestionMarkRounded />
            <span>Questions</span></li>
          <li className='mb-3'>
            <Work />
            <span>Jobs</span></li>
          <li className='mb-3'>
            <Event />
            <span>Evnets</span></li>
          <li className='mb-3'>
            <School />
            <span>Courses</span></li>
        </ul>
        <button className='btn mx-3' style={{border:'none'}}>Show More</button>
        <hr className='mx-3' style={{width:'250px'}} />
        <ul style={{listStyle:'none'}}>
          {Users.map((item,i)=>(
            <Closefriend key={i} id={item.id} profilePicture={item.profilePicture} username={item.username}/>
          ))}
         
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
