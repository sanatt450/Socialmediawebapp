import Friend from '../friend/Friend'
import './sidebar.css'
import { User } from "../../DummyData"
import { RssFeed ,Chat, OndemandVideo ,Group,Bookmark, HelpOutline,WorkOutline,Event,School } from '@mui/icons-material'

export default function Sidebar(){
    return(
         <div className="sidebar">
            <div className="sidebarwraper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                      <RssFeed className='sidebarIcon'></RssFeed>
                      <span className='sidebarListItemText'>Feed</span>
                    </li>
                    <li className="sidebarListItem">
                      <Chat className='sidebarIcon'></Chat>
                      <span className='sidebarListItemText'>Chat</span>
                    </li>
                    <li className="sidebarListItem">
                      <OndemandVideo className='sidebarIcon'></OndemandVideo>
                      <span className='sidebarListItemText'>Video</span>
                    </li>
                    <li className="sidebarListItem">
                      <Group className='sidebarIcon'></Group>
                      <span className='sidebarListItemText'>Groups</span>
                    </li>
                    <li className="sidebarListItem">
                      <Bookmark className='sidebarIcon'></Bookmark>
                      <span className='sidebarListItemText'>Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                      <HelpOutline className='sidebarIcon'></HelpOutline>
                      <span className='sidebarListItemText'>Questions</span>
                    </li>
                    <li className="sidebarListItem">
                      <WorkOutline className='sidebarIcon'></WorkOutline>
                      <span className='sidebarListItemText'>Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                      <Event className='sidebarIcon'></Event>
                      <span className='sidebarListItemText'>Event</span>
                    </li>
                    <li className="sidebarListItem">
                      <School className='sidebarIcon'></School>
                      <span className='sidebarListItemText'>Courses</span>
                    </li>
                </ul>
                <button className='sidebarButton'>Show More</button>
                <hr className="sidebarHr" />
                {User.map((u)=>(<Friend key={u.id} user={u}/>))}
            </div>
         </div>
    )
}