import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { FaArrowAltCircleRight, FaGithub, FaFacebookMessenger, FaCode, FaDiscord, FaPhone, FaEnvelope } from 'react-icons/fa'

// developer
import developer from '../../developer/developer';

// techstack 
import techstack from '../../developer/techstack';

// vector
import vector from '../../assets/vector/vector';

// projects
import projects from '../../assets/projectsimg/projects';

// svg
import RotatingTextCircle from '../SVG/RotatingTextCircle';

const Landingpage = ({ colortoggle }) => {

    const [hover, setHover] = useState("");

    gsap.registerPlugin(ScrollTrigger);
    // useEffect(() => {
    //     let ctx = gsap.context(() => {
    //         gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: '.box-1',
    //                 scrub: true,
    //                 start: "top center",
    //             }
    //         }).fromTo('.landing',
    //             {
    //                 background: '#0A0909'
    //             },
    //             {
    //                 duration: 2,
    //                 background: '#1F2124',
    //                 transition: 1
    //             }
    //         );
    //         gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: '.box-2',
    //                 scrub: true,
    //                 start: "top center",
    //             }
    //         }).fromTo('.landing',
    //             {
    //                 background: '#1F2124'
    //             },
    //             {
    //                 duration: 2,
    //                 background: '#161824',
    //                 transition: 1
    //             }
    //         );
    //         gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: '.box-3',
    //                 scrub: true,
    //                 start: "top center",
    //             }
    //         }).fromTo('.landing',
    //             {
    //                 background: '#161824'
    //             },
    //             {
    //                 duration: 2,
    //                 background: '#22272E',
    //                 transition: 1
    //             }
    //         );
    //     });

    //     return () => ctx.revert();
    // }, []);

    return (
        <div className={`${colortoggle ? 'bg-[#ffffff]' : 'bg-[#0A0909]'} h-full w-full overflow-hidden landing`}>

            {/* img */}
            <div className='h-[70vh] w-[100vw] md:mt-[30vh] xs:mt-[50vh] relative grid items-center justify-center img-container'>
                <img src={developer.img} className='h-[70vh] md:h-[60vh] xs:h-[50vh] img' alt='img' />
            </div>

            {/* about me */}
            <div className='h-[auto] w-[100vw] mt-[5vh] relative grid items-center justify-center text-left about'>
                <span className={`font-Oxygen font-bold xl:text-[.7em] lg1:text-[.4em] lg:text-[.6em] xs:text-[.5em] ${!colortoggle ? 'text-white' : 'text-black'} tracking-[5px] absolute label`}>
                    ABOUT
                </span>
                <div className='lg:text-justify xs:h-[auto] lg:w-[50vw] xs:w-[90vw] grid items-center'>
                    <span className={`font-Poppins font-bold xl:text-[2.5em] ${!colortoggle ? 'text-[#FFB64B]' : 'text-[#FFB64B]'} ml-[2vw] mt-[3vh] lg2:text-[2.2em] lg1:text-2xl lg:text-2xl md:text-4xl xs:text-2xl`}>
                        Hi, I'm Gino
                    </span>
                    <span className={`${!colortoggle ? 'text-[#E2E2E2]' : 'text-black'} ml-[2vw] font-Oxygen font-bold xl:text-sm lg:text-[.7em] md:text-[1.1em] xs:text-[.7em]`}>
                        {developer.fullname}
                    </span>
                    <div className={`w-[auto] ${!colortoggle ? 'text-[#E2E2E2]' : 'text-black'} opacity-[0.6] font-Poppins leading-[200%] m-[2vw] xl:text-[1em] lg2:text-[1em] lg:text-base md:text-[1em] xs:text-[.9em] md:text-justify`}>
                        Hello! My name's Gino, an ambitious and independent developer. Along my studies in college, I develop applications for communities or for my clients, giving me much needed experience on what it's like launching, maintaining, and scaling digital products in real-world environments.
                    </div>
                </div>
            </div>

            {/* Services */}
            {/* <div className={`w-[full] lg:h-[auto] xs:h-[105vh] sm:h-auto sm:p-[7vh] md:h-[auto] lg:mt-[20vh] xs:mt-[15vh] sm:mt-[5vh] relative grid items-start justify-center services text-center`}>
                <span className={`font-Oxygen font-bold xl:text-[.7em] lg1:text-[.4em] lg:text-[.6em] xs:text-[.5em] ${!colortoggle ? 'text-white' : 'text-black'} tracking-[5px] absolute label`}>
                    SERVICES
                </span>
                <span className={`${!colortoggle ? 'text-white' : 'text-black'}  xl:text-[2em] lg2:text-[2.2em] lg1:text-2xl lg:text-2xl md:text-4xl sm:text-3xl xs:text-2xl`}>
                    What I <span className={`text-yellow-500`}>offer?</span>
                </span>
                <div className={`xl:h-[40vh] xl:w-[60vw] lg2:h-[40vh] lg2:w-[65vw] lg1:h-[40vh] lg1:w-[65vw] lg:h-[40vh] lg:w-[65vw] md:h-[auto] sm:h-[auto] w-[70vw] md:w-[80vw] xs:h-[95vh] relative flex lg:flex-wrap xs:flex-col lg:flex-row md:flex-row md:flex-wrap lg:items-center justify-around`}>
                    {Object.keys(vector).map(state => {
                        return <div key={vector[state].label} className={`lg:h-[38vh] lg:w-[19vw] md:h-auto sm:h-auto sm:p-[5vh] xs:h-[45vh] md:w-[40vw] flex sm:grid md:flex md:flex-row flex-wrap items-top justify-center text`}>
                            <img className='lg:h-[18vh] xs:h-[13vh] sm:h-[18vh] xl:mt-[5vh] md:mt-[0vh] md:h-[9vh]' src={vector[state].svg} alt={vector[state].label} />
                            <h1 className={`font-Oxygen ${!colortoggle ? 'text-yellow-500' : 'text-black'} font-bold xl:text-[1.1em] lg2:text-base lg1:text-sm lg:text-[.7em] md:text-[1.4em] xs:text-[.9em] text-center`}>
                                {vector[state].label}
                            </h1>
                            <span className={`font-Oxygen ${!colortoggle ? 'text-white' : 'text-black'} text-center lg1:text-[.8em] lg:text-sm md:text-[1em] xs:text-[.8em] sm:w-[40vw] md:mt-[.5em]`}>
                                {vector[state].description}
                            </span>
                        </div>
                    })}
                </div>
            </div> */}

            {/* projects */}
            {/* <div className='xs:h-[auto] w-[100vw] xs:mt-[5vh] relative grid align-center justify-center lg:mt-[15vh] lg2:mt-[0vh] xl:mt-[10vh] projects'>
                <span className={`font-Poppins font-bold xl:text-[1.5em] ${!colortoggle ? 'text-white' : 'text-black'} tracking-[5px] lg2:text-[1.3em] lg1:text-sm lg:text-sm md:text-2xl sm:text-2xl xs:text-xl xs:ml-4 xs:mt-[3vh]`}>
                    My <span className={`text-yellow-500`}>Projects</span>
                </span>
                <div className='w-auto xs:h-auto lg:h-auto lg2:h-[100vh] xs:w-[100vw] relative flex xs:flex-wrap xs:flex-col items-center justify-around'>
                    {projects && Object.keys(projects).map(state => {
                        return (
                            <div className='xs:m-4 xs:h-[auto] w-[90vw] lg:w-[60vw] lg1:w-[59vw] lg2:w-[54vw] xl:w-[49vw] flex xs:flex-wrap xs:flex-col lg:flex lg: flex-wrap lg:flex-row' key={projects[state].name}>
                                <div className='xs:h-[auto] w-[90vw] lg:h-[22vh] lg:w-[30vw] lg1:h-[220px] lg1:w-[27vw] lg2:w-[25vw] lg2:h-[27vh] xl:w-[23vw] xl:h-[26vh] grid'>
                                    <span className={`font-Poppins ${!colortoggle ? 'text-white' : 'text-black'} text-xl xs:mt-[1vh] lg:mt-[0vh] sm:text-2xl lg:text-xl xl:text-2xl lg:font-bold lg:w-[22vw] lg:flex lg:items-center lg:justify-start lg:leading-6`}>
                                        {projects[state].project}
                                    </span>
                                    <p className={`font-Poppins ${!colortoggle ? 'text-white' : 'text-black'} text-[.9em] xs:mt-[1vh] lg:mt-[0vh] sm:text-[1.1em] lg:text-[.7em] xl:text-[.9em] lg:w-[25vw] lg2:w-[23vw] xl:w-[20vw] lg:text-justify `}>
                                        {projects[state].description}
                                    </p>
                                    <div className='flex xs:h-[11vh] lg:h-[10vh] w-[90vw] lg:w-[30vw] xl:w-[25vw] relative lg:mt-[3vh]'>
                                        <span className={`font-Poppins ${colortoggle ? 'text-black' : 'text-[#cbd5e1]'} text-sm xs:mt-[2vh] lg:mt-[0vh] sm:text-[1em] lg:text-[.8em] absolute`}>
                                            {projects[state].hashtag}
                                        </span>
                                        <button className={`${!colortoggle ? 'bg-white' : 'bg-black'} font-Poppins flex items-center justify-center h-[4vh] w-auto p-2 text-oxygen xs:text-sm lg:text-[.7em] xs:mt-[5.5vh] lg:mt-[5vh] rounded-[3px] ${colortoggle ? 'text-white' : 'text-black'} outline-none`}>
                                            Live demo <FaArrowAltCircleRight className='text-base xs:ml-2 transform-all xs:mt-1 lg:mt-0' />
                                        </button>
                                        <button className={`${!colortoggle ? 'bg-white' : 'bg-black'} font-Poppins flex items-center justify-center h-[4vh] w-auto p-2 text-oxygen xs:text-sm lg:text-[.7em] xs:mt-[5.5vh] lg:mt-[5vh] xs:ml-[2vw] lg:ml-[.5vw] rounded-[3px] ${colortoggle ? 'text-white' : 'text-black'} outline-none`}>
                                            Code repo <FaGithub className='text-base xs:ml-2 transform-all xs:mt-1 lg:mt-0' />
                                        </button>
                                    </div>
                                </div>
                                <div className='h-auto w-[90vw] lg:p-[.50px] lg:w-[30vw] lg1:w-[32vw] lg2:w-[29vw] xl:w-[26vw] border-white border-[1px]'>
                                    <img src={projects[state].img} alt={projects[state].name} className={`w-[100%]`} />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div> */}

            <div className='h-auto w-full flex items-center justify-center mt-5 projects-container'>
                <div className='xs:w-[90vw] h-full'>
                    {projects && Object.keys(projects).map((index) => {
                        return (
                            <div className='h-[45vh] w-full relative mt-4 mb-4'>
                                <h1 className={`font-Poppins ${!colortoggle ? 'text-[#E2E2E2]' : 'text-black'} text-[30px] font-[700] absolute top-0 left-0`}>{projects[index].project}</h1>
                                <span className={`font-Poppins ${!colortoggle ? 'text-[#E2E2E2]' : 'text-black'} p-[10px] text-[12px] font-[700] absolute top-0 right-0`}>{projects[index].web}</span>
                                <div className='h-[auto] w-[90vw] right-0 mt-[5vh] img-container'>
                                    <img src={`${projects[index].img}`} alt='img' />
                                    <div className='h-[auto] w-[90vw] mt-4'>
                                        <span className='font-Poppins font-[700] text-[#E2E2E2] text-sm'>
                                            {projects[index].description}
                                        </span>
                                    </div>
                                    <div className='h-[10vh] w-[90vw] flex items-center justify-start'>
                                        <button className='h-[40px] w-[180px] border border-[#E2E2E2]'>
                                            <span className='text-[#E2E2E2]'>Live Demo</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Technologies using */}
            <div className='lg:h-[auto] xs:h-auto md:h-[auto] w-[100vw] xs:mt-[5vh] md:mt-[7vh] relative grid items-center justify-center lg:mt-[10vh] xl:mt-[10vh] technologies'>
                <span className={`font-Oxygen font-bold xl:text-[.7em] lg1:text-[.4em] lg:text-[.6em] xs:text-[.5em] ${!colortoggle ? 'text-white' : 'text-black'} tracking-[5px] absolute label`}>
                    TECHNOLOGIES
                </span>
                <span className={`font-Poppins font-bold xl:text-[1.5em] ${!colortoggle ? 'text-white' : 'text-black'} tracking-[5px] lg2:text-[1.3em] lg1:text-base lg:text-base md:text-2xl xs:text-xl`}>
                    My <span className={`text-[#FFB64B]`}>Skills</span>
                </span>
                <div className='mt-2 h-auto xs:w-[85vw] lg:w-[60vw] rounded-[20px] relative flex flex-wrap items-center justify-between'>
                    <span className={`xs:hidden lg:grid -z-7 absolute font-Oxygen ${!colortoggle ? 'text-white' : 'text-black'} lg:text-[4em] lg1:text-[4em] lg2:text-[4em] xl:text-[5em] grid place-items-center font-bold tracking-[50px] pointer-events-none text transition-all`}>
                        {hover}
                    </span>
                    {Object.keys(techstack).map(tech => {
                        return (
                            <React.Fragment>
                                <img className='m-3 mb-4 xl:h-[3.5vh] lg2:h-[3.4vh] lg1:h-[3.9vh] lg:h-[3.5vh] md:h-[3.5vh] sm:h-[4.5vh] sss:h-[4vh] xs:h-[3vh] lg:m-5 lg:grayscale xs:m-4 xs:grayscale hover:grayscale-0 trasition duration-[.3s]' src={techstack[tech].svg} alt={techstack[tech].tech} key={techstack[tech].tech} onMouseOver={() => setHover(techstack[tech].tech)} />
                            </React.Fragment>)
                    })}
                </div>
            </div>

            <div className='bg-white/[0.063] h-auto w-auto grid place-items-center gap-2 relative mt-[10vh]'>

                <div className='h-auto w-[90vw] mt-5 flex align-center justify-center text-center'>
                    <p className='font-Poppins text-2xl text-white'>Need a front-end
                        <br />
                        <span className='font-Poppins text-[#FFB64B] font-[500]'>Developer ?</span>
                        <p className='text-base font-[500]'>Let's <span className='text-[#FFB64B]'>work</span> together!!</p>
                    </p>
                </div>

                <div className='h-auto w-[80vw] mb-5 mt-2 flex flex-wrap justify-center align-center'>
                    <div className='h-auto w-[70vw] m-3 rounded-[5px]'>
                        <p className='font-Poppins text-white text-[.8em] ml-3 mt-2'><span className='text-[#FFB64B]'>CONTACT</span> INFORMATION</p>
                        <p className='font-Poppins text-white w-[65vw] text-sm ml-3 mt-2 leading-[1.25rem] text-left'>If you have a good opportunity that matches my skills then don't hesitate to contact me.</p>

                        <br />
                        <button className='w-auto flex align-center justify-center ml-3'><FaDiscord className='text-white mt-[.1em] xs:text-[.9em]' /><span className='text-white font-Poppins ml-[.75em] text-sm'>Discord</span></button>
                        <button className='w-auto flex align-center justify-center ml-3 mt-2'><FaEnvelope className='text-white mt-[.1em] xs:text-[.9em]' /><span className='text-white font-Poppins ml-[.75em] text-sm'>ginodelavega1997@gmail.com</span></button>
                        <button className='w-auto flex align-center justify-center ml-3 mt-2'><FaPhone className='text-white mt-[.1em] xs:text-[.9em]' /><span className='text-white font-Poppins ml-[.75em] text-sm'>+63 9922325221</span></button>
                        <button className='w-auto flex align-center justify-center ml-3 mt-2'><FaFacebookMessenger className='text-white mt-[.1em] xs:text-[.9em]' /><span className='text-white font-Poppins ml-[.75em] text-sm'>Messenger</span></button>
                    </div>

                    <div className='h-auto w-[70vw] mb-3 rounded-[5px] flex flex-wrap justify-center'>
                        <button className='bg-[#E2E2E2] h-[40px] w-[240px] border border-[#E2E2E2] xs:mt-3 rounded-[3px]'>
                            <span className='text-black font-Poppins'>Discord</span>
                        </button>
                        <button className='bg-[#E2E2E2] h-[40px] w-[240px] border border-[#E2E2E2] xs:mt-3 rounded-[3px]'>
                            <span className='text-black font-Poppins'>Gmail</span>
                        </button>
                        <button className='bg-[#E2E2E2] h-[40px] w-[240px] border border-[#E2E2E2] xs:mt-3 mb-3 rounded-[3px]'>
                            <span className='text-black font-Poppins'>Messenger</span>
                        </button>
                        {/* <input type="text" className='h-[4.5vh] w-[60vw] xs:mt-3 bg-transparent border-[#757575] border-2 outline-none text-white p-2 font-Oxygen text-sm' placeholder='Your name' />
                        <input type="text" className='h-[4.5vh] w-[60vw] xs:mt-3 bg-transparent border-[#757575] border-2 outline-none text-white p-2 font-Oxygen text-sm' placeholder='Your email' />
                        <textarea type="text" className='h-[24vh] w-[60vw] xs:mt-3 xs:mb-3 bg-transparent border-[#757575] border-2 outline-none text-white p-2 font-Oxygen text-sm resize-none' placeholder='Your message' />
                        <button className='bg-[#757575] text-Oxygen h-[4vh] w-[60vw] mb-3 text-white grid place-items-center text-sm'>Send</button> */}
                    </div>
                </div>

                <div className={`${!colortoggle ? 'text-white' : 'text-black'} xs:h-[5vh] w-full flex items-center justify-center font-Poppins text-[.7em] sm:text-base lg:text-[.7em]`}>
                    Built with <FaCode className={`xs:ml-2 transform-all`} /> &nbsp; by Gino Dela Vega
                </div>
            </div>

        </div>
    )
}

export default Landingpage;