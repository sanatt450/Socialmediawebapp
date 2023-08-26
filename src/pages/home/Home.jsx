import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Rightbar from "../../components/righrbar/Rightbar"
import Feed from "../../components/feed/Feed"
import './home.css'
 export default function Home () {
    return (
      <>
         <Topbar></Topbar>
         <div className="homeContainer">
         <Sidebar></Sidebar>
         <Feed></Feed>
         <Rightbar></Rightbar>
         </div>
         
      </>
    )
  }
