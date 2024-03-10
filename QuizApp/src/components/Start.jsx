import React from 'react'
import '../app.css'
const Start = ({userName,setUserName}) => {


  return (
    <div className="start">
        <input placeholder="enter your name" className="startInput"/>
        <button className="startButton" onClick={()=>{
                setUserName(!userName)
        }}>Start</button>
    </div>
  )
}

export default Start