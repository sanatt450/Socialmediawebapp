import './rightbar.css'
import { User } from "../../DummyData"
import Online from '../online/Online'

export default function Rightbar() {
  return (
    <div className='rightbar'>
        <div className="rightbarWrapper">
          <div className="birthdayContainer">
            <img className='birthdayImg' src="/assest/gift.png" alt="" />
            <span className="birthdayText">
             <b>yogesh</b>  and <b>2 other friends</b> have a birthday today
            </span>
          </div>
          <img className='rightbarAd' src="/assest/ad.png" alt="" />
          <h4 className='rightbarTitle'>Online Friends</h4>
          {User.map((u)=>(<Online key={u.id} user={u}/>))}
        </div>
    </div>
  )
}
 