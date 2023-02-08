import React from 'react';
import { useState, useEffect } from 'react';

// img
import profile from '../../assets/img/profile.jpg';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Landingpage = () => {

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
        <div className='bg-black h-[250vh] w-[100vw] relative overflow-auto landing'>

            {/* img */}
            <div className='h-[80vh] w-[100vw] mt-[20vh] grid items-center justify-center img-container'>
                <img src={profile} className='h-[40vh] img' alt='img' />
            </div>

            {/* about me */}
            <div className='h-[auto] w-[100vw] mt-[5vh] relative grid items-center justify-center text-left about'>
                <span className='font-Oxygen font-bold text-[.7em] text-white tracking-[5px] absolute label'>
                    ABOUT
                </span>
                <div className='text-justify h-[auto] w-[auto] grid items-center'>
                    <span className='font-Oxygen font-bold text-[2.5em] text-yellow-500 ml-[2vw] mt-[3vh]'>
                        Hi, I'm Gino
                    </span>
                    <span className='text-white ml-[2vw] font-Oxygen font-bold'>
                        Gino Dela Vega
                    </span>
                    <div className='w-[auto] text-white font-Oxygen leading-[200%] m-[2vw] text-[1.4em]'>
                        Full-stack web developer and also an Instructor based in City of Malolos,Bulacan. <br />
                        I'm passionate in creating web applications with the latest technologies available in the market. <br />
                    </div>
                </div>

            </div>

            {/* Technologies using */}
            <div className='bg-red-700 h-[50vh] w-[100vw] mt-[20vh] relative'>

            </div>

        </div>
    )
}

export default Landingpage;