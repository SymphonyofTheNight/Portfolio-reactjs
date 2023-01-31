import React from 'react';
import { useState, useEffect } from 'react';

// img
import profile from '../../img/profile.jpg';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Landingpage = ({ ID }) => {

    const [text, setText] = useState("");
    const [fulltext] = useState("Hello, I am Gino Dela Vega! I enjoy transforming ideas into reality. Being an Urban Planner by profession, I ventured on a mission to search for solutions to make smarter and more resilient communities – an endless quest for technological innovations which eventually led me to the fascinating world of Web Development. After all, the web is just an evolved form of the communities that we know. We connect, we communicate, we interact. Everything just turned digital. Today, my mission still remains, but I am more focused now on developing beautifully designed websites and web applications that foster seamless and worthwhile digital community experiences. Hungry to further enhance my knowledge in this field, I am open to working in environments where I can learn, grow, and contribute more.")
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < fulltext.length) {
            setTimeout(() => {
                setText(text + fulltext[index])
                setIndex(index + 1)
            }, 1);
        }
    }, [index])

    return (
        <div className={ID}>
            <div className='imgContainer'>
                <img src={profile} className='img' alt='img' />
            </div>
            <div className='container-form about'>
                <span className='label'>
                    ABOUT
                </span>
                <div className='container-text'>
                    <span className='text-form-one'>About Me</span>
                    <div className='text-form-two-container'>
                        Hello, I am Gino Dela Vega! I enjoy transforming ideas into reality. <br />
                        Being an Urban Planner by profession, I ventured on a mission to search for solutions to make smarter and more resilient communities – an endless quest for technological innovations which eventually led me to the fascinating world of Web Development.

                        After all, the web is just an evolved form of the communities that we know. We connect, we communicate, we interact. Everything just turned digital.

                        Today, my mission still remains, but I am more focused now on developing beautifully designed websites and web applications that foster seamless and worthwhile digital community experiences. Hungry to further enhance my knowledge in this field, I am open to working in environments where I can learn, grow, and contribute more.
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Landingpage;