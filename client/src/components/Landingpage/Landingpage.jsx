import React from 'react';
import { useState, useEffect } from 'react';

// developer
import developer from '../../developer/developer';

// techstack 
import techstack from '../../developer/techstack';

// vector
import vector from '../../assets/vector/vector';

// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);

const Landingpage = ({ colortoggle, setColortoggle }) => {

    return (
        <div className={`${colortoggle ? 'bg-white' : 'bg-black'} h-[auto] w-[100vw] relative overflow-auto landing`}>

            {/* img */}
            <div className='h-[80vh] w-[100vw] mt-[30vh] grid items-center justify-center img-container'>
                <img src={developer.img} className='h-[70vh] img' alt='img' />
            </div>

            {/* about me */}
            <div className='h-[auto] w-[100vw] mt-[5vh] relative grid items-center justify-center text-left about'>
                <span className={`font-Oxygen font-bold text-[.7em] ${!colortoggle ? 'text-white' : 'text-black'} tracking-[5px] absolute label`}>
                    ABOUT
                </span>
                <div className='text-justify h-[auto] w-[auto] grid items-center'>
                    <span className={`font-Oxygen font-bold text-[2.5em] ${!colortoggle ? 'text-yellow-500' : 'text-yellow-500'} ml-[2vw] mt-[3vh]`}>
                        Hi, I'm Gino
                    </span>
                    <span className={`${!colortoggle ? 'text-white' : 'text-black'} ml-[2vw] font-Oxygen font-bold`}>
                        {developer.fullname}
                    </span>
                    <div className={`w-[auto] ${!colortoggle ? 'text-white' : 'text-black'} font-Oxygen leading-[200%] m-[2vw] text-[1.4em]`}>
                        Full-stack web developer and also an Instructor based in City of Malolos,Bulacan. <br />
                        I'm passionate in creating web applications with the latest technologies available in the market. <br />
                    </div>
                </div>

            </div>

            {/* Services */}
            <div className={`w-[full] h-[90vh] mt-[20vh] relative grid items-center justify-center services`}>
                <span className={`font-Oxygen font-bold text-[.7em] ${!colortoggle ? 'text-white' : 'text-black'} tracking-[5px] absolute label`}>
                    SERVICES
                </span>
                <div className={`h-[90vh] w-[70vw] relative flex flex-wrap flex-row items-center justify-around`}>
                    <span className={`text-[2.5em] font-Oxygen absolute text-white top-0 mt-[2vh]`}>
                        What I <span className={`text-yellow-500`}>offer?</span>
                    </span>
                    {Object.keys(vector).map(state => {
                        return <div key={vector[state].label} className={`h-[38vh] w-[19vw] flex flex-wrap items-top justify-center text`}>
                            <img className='h-[18vh] mt-[5vh]' src={vector[state].svg} alt={vector[state].label} />
                            <h1 className={`font-Oxygen ${!colortoggle ? 'text-yellow-500' : 'text-black'} font-bold text-[1.1em]`}>
                                {vector[state].label}
                            </h1>
                            <span className={`font-Oxygen ${!colortoggle ? 'text-white' : 'text-black'} text-center`}>
                                {vector[state].description}
                            </span>
                        </div>
                    })}
                </div>
            </div>

            {/* Technologies using */}
            <div className='h-[70vh] w-[100vw] mt-[20vh] relative grid items-center justify-center technologies'>
                <span className={`font-Oxygen font-bold text-[.7em] ${!colortoggle ? 'text-white' : 'text-black'} tracking-[5px] absolute label`}>
                    TECHNOLOGIES
                </span>
                <span className={`font-Oxygen font-bold text-[2em] ${!colortoggle ? 'text-white' : 'text-black'} tracking-[5px]`}>
                    My <span className={`text-yellow-500`}>Skills</span>
                </span>
                <div type='input' className='h-[auto] w-[60vw] rounded-[20px] relative flex flex-wrap items-center justify-center'>
                    {Object.keys(techstack).map(tech => {
                        return <img className='h-[9.5vh] m-5 grayscale hover:grayscale-0 trasition duration-[.3s]' src={techstack[tech].svg} alt={techstack[tech].tech} key={techstack[tech].tech} />
                    })}
                </div>
            </div>

            {/* projects */}
            <div className='h-[200vh] w-full bg-green-700 mt-[30vh]'>

            </div>

        </div>
    )
}

export default Landingpage;