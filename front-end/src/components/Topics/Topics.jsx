import React, { useState } from 'react'
import './Topics.css'
import {topics1,topics2,topics3,topics4,topics5,topics6} from "../../assets"

const Topics = () => {

    const [currentImage, setCurrentImage] = useState(topics1)

    return(
        <section id="topics" className="black">
            <div className="wrapper">
                <h2>What will you learn?</h2>
                <div className="content-container">
                    <ul>
                        <li onMouseEnter={() => setCurrentImage(topics1)}>What are frequencies?</li>
                        <li onMouseEnter={() => setCurrentImage(topics2)}>Using DAW</li>
                        <li onMouseEnter={() => setCurrentImage(topics3)}>Vocals Processing</li>
                        <li onMouseEnter={() => setCurrentImage(topics4)}>Mixing</li>
                        <li onMouseEnter={() => setCurrentImage(topics5)}>Mixing Console</li>
                        <li onMouseEnter={() => setCurrentImage(topics6)}>Mastering</li>
                    </ul>
                    <div className="topic-image">
                        <img src="" alt="" />
                    </div>
                </div>
                <img src={currentImage} alt="" />
            </div>
        </section>
    )
}

export default Topics