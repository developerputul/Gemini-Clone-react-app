import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets/assets'

const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello, Dev</span></p>
                <p>How can I help you Today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Lorem Ipsum is simply dummy text of the printing.</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>It is a long established reader distracted.</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Lorem Ipsum is that it has a more-or-less.</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main
