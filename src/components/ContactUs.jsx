import React from 'react'
import {motion} from "framer-motion" 
import { BsSend } from "react-icons/bs";

function ContactUs() {
  return (
    <>
      <div className='con-form'>
        <div className='col-form'>
        <input placeholder='Name' type="text" />
        <input placeholder='Email' type="email" />
        <input placeholder='Subject' type="text" />
        <textarea className='gg' placeholder='Enter your message' cols="30" rows="10"></textarea>
        <motion.button
        className="box"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}>Submit<BsSend/></motion.button>
        </div>
      </div>
    </>
  )
}

export default ContactUs