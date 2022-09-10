import React from 'react'
import { AiFillPhone, AiOutlineFacebook, AiOutlineLinkedin, AiOutlineMail} from "react-icons/ai";

function Contact() {
  return (
    <div className="container4">
        <div>Phone: <span className="info">+48 XXX XXX XXX</span> <AiFillPhone/></div>
        <div>Mail: <span className="info">cygantamara@gmail.com </span><AiOutlineMail/> </div>
        <div>Linkedin: <span className="info">@Tamara Cygan</span> <AiOutlineLinkedin/> </div>
        <div>Facebook: <span className="info">@Tamara Cygan </span><AiOutlineFacebook/> </div>

        
        </div>
  )
}

export default Contact