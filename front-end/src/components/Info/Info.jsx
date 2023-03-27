import React from 'react'
import './Info.css'
import {student, file, infoBgElement,} from '../../assets'

const Info = () => {
    return(
        <section id="info" className="dark-gray">
            <div className="wrapper">
                <div className="content-container">
                    <div className="info-content">
                        <img src={student} />
                        <div className="amount">23,000+</div>
                        <div className="type">Students</div>
                    </div>
                    <div className="info-content">
                        <img src={file} />
                        <div className="amount">26 Hrs</div>
                        <div className="type">Video Content</div>
                    </div>
                </div>
                <img src={infoBgElement} className="bg-element-2" />
            </div>
        </section>
    )
}

export default Info