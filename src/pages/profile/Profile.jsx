import './profile.css'
import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Rightbar from "../../components/righrbar/Rightbar"
import Feed from "../../components/feed/Feed"

export default function Profile() {
  return (
    <div>
      <Topbar></Topbar>
         <div className="profile">
         <Sidebar></Sidebar>
         <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
            <img className='profileCoverImg' src="assest/post/3.jpeg" alt="" srcset="" />
            <img className='profileUserImg' src="assest/person/3.jpeg" alt="" srcset="" />
            </div>
            <div className="profileInfo">
              <h4 className='profileInfoName'>ilanos</h4>
              <span className='profileInfoDesc'>Hello my friend</span>
            </div>
          </div>
          <div className="profileRightBottom">
         <Feed></Feed>
         <Rightbar></Rightbar>
         </div>
         </div>
         </div>
    </div>
  )
}
