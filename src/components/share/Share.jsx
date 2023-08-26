
import "./share.css"
import { EmojiEmotions, Label, PermMedia, Room } from "@mui/icons-material"
export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
         <div className="shareTop">
            <img className="shareProfileImg" src="/assest/person/1.jpeg" alt="" c />
            <input placeholder="what's in your mind " className="shareInput" />
         </div>
         <hr className="shareHr"/>
         <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMedia htmlColor="tomato" className="shareIcon"></PermMedia>
                    <span className="shareOptionText">Photo or video</span>
                </div>
                <div className="shareOption">
                    <Label htmlColor="Blue" className="shareIcon"></Label>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <Room htmlColor="green" className="shareIcon"></Room>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions htmlColor="yellow" className="shareIcon"></EmojiEmotions>
                    <span className="shareOptionText">Feelings</span>
                </div>
            </div>
            <button className="shareButton">Share</button>
         </div>
      </div>
    </div>
  )
}
