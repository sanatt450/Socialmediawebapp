import { MoreVert } from '@mui/icons-material'
import './post.css'
import { User } from "../../DummyData"
import { useState } from 'react'

export default function Post({post}) {
  const[like,setlike]=useState(post.like)
  const[isliked,setislike]=useState(false)
  const likeHandler =()=>{
    setlike(isliked? like-1:like+1)
    setislike(!isliked)
  }

  return (
    <div className='post'> 
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img className='postProfileImg' src={User.filter((u)=>u.id===post?.userId)[0].profilePicture} alt="" srcset="" />
                <span className="postUsername">{User.filter((u)=>u.id===post?.userId)[0].username}</span>
                <span className="postDate">{post.date}</span>
            </div>
            <div className="postTopRight">
                <MoreVert></MoreVert>
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">Hey ! Its my first post</span>
            <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postbottom">
            <div className="postbottomLeft">
                <img className='likeIcon' src="/assest/like.png" onClick={likeHandler} alt="" srcset="" />
                <img className='likeIcon' src="/assest/heart.png" onClick={likeHandler} alt="" srcset="" />
                <span className="likeCounter">{like} people liked it</span>
            </div>
            <div className="postbottomRight">
                <span className="postCommentText">{post.comment} comment</span>
            </div>
        </div>
      </div>
    </div>
  )
}
