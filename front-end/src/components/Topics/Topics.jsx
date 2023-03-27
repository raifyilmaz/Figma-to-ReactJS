import React, { useState } from 'react'
import './Topics.css'
import {topics1,topics2,topics3,topics4,topics5,topics6, topicsBgElement} from "../../assets"

const Topics = () => {

    const [currentImage, setCurrentImage] = useState(topics2)

    return(
        <section id="topics" className="black">
            <div className="wrapper">
                <h2>What will you learn?</h2>
                <div className="content-container">
                    <ul className='topics-list'>
                        <li onMouseEnter={() => setCurrentImage(topics2)}>What are frequencies?</li>
                        <li onMouseEnter={() => setCurrentImage(topics1)}>Using DAW</li>
                        <li onMouseEnter={() => setCurrentImage(topics3)}>Vocals Processing</li>
                        <li onMouseEnter={() => setCurrentImage(topics4)}>Mixing</li>
                        <li onMouseEnter={() => setCurrentImage(topics5)}>Mixing Console</li>
                        <li onMouseEnter={() => setCurrentImage(topics6)}>Mastering</li>
                    </ul>
                    <div className="topic-image">
                        <img src={currentImage}/>
                    </div>
                </div>
                <img src={topicsBgElement} className="bg-element-1" />
            </div>
        </section>
    )
}

export default Topics