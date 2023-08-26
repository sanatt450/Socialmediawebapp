import "./friend.css";

export default function Friend({user}) {
  return (
    <div>
    <ul className="sidebarFriendlist">
        <li className="sidebarFriend">
            <img className='sidebarFriendImg' src={user.profilePicture} alt="" />
            <span className='sidebarFriendName'>{user.username}</span>
        </li>
    </ul>
    </div>
  )
}
