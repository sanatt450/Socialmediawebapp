
import "./topbar.css";
import { Search } from "@mui/icons-material";
import { Person , Chat , Notifications} from "@mui/icons-material";


export default function Topbar(){
    return(
        <div className="topbar-Container">
           <div className="topbarLeft">
                <span className="logo"> ilanos</span>
           </div>
           <div className="topbarCenter">
                 <div className="searchBar">
                    <Search className="searchIcon"></Search>
                    <input placeholder="Search for friend , Post " className="searchInput"/>
                 </div>
           </div>
           <div className="topbarRight">
                 <div className="topbarLink">
                    <span className="topbar-link">Homepage</span>
                    <span className="topbar-link">Timline</span>
                 </div>
                 <div className="topbar-icon">
                    <div className="topbariconItem">
                        <Person></Person>
                        <span className="topbarIconBadge">
                            1
                        </span>
                    </div>
                    <div className="topbariconItem">
                        <Chat></Chat>
                        <span className="topbarIconBadge">
                            1
                        </span>
                    </div>
                    <div className="topbariconItem">
                        <Notifications></Notifications>
                        <span className="topbarIconBadge">
                            1
                        </span>
                    </div>
                 </div>
                 <img src="/assest/person/1.jpeg" alt="" className="topbarImg"/>
           </div>
        </div>
    )
}