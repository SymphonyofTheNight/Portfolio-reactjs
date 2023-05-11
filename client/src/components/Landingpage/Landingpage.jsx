import React, { useState } from 'react';
import { FaFacebookMessenger, FaCode, FaDiscord, FaPhone, FaEnvelope, FaFacebook, FaEnvelopeSquare } from 'react-icons/fa';

// developer
import developer from '../../developer/developer';

// techstack 
import techstack from '../../developer/techstack';

// projects
import projects from '../../assets/projectsimg/projects';


const Landingpage = ({ colortoggle }) => {

    const [hover, setHover] = useState("");
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
            <div className='h-[auto] w-[100vw] mt-[5vh] relative flex flex-wrap xs:flex-col lg:flex-row items-center lg:items-start lg:justify-center text-left about'>
                <div className='xs:h-[auto] w-[90vw] lg:w-[220px] lg:h-[10vh]'>
                    <span className={`${!colortoggle ? 'text-white' : 'text-black'} opacity-[0.9] font-Poppins xl:text-[1em] lg2:text-[1em] lg:text-base md:text-[1em] xs:text-[1.20em]  md:text-justify`}>
                        <span className='text-[#FFB64B] m-[2vw] sm:m-[0vw] font-Poppins xl:text-[1em] lg2:text-[1em] lg:text-base md:text-[1em] xs:text-base md:text-justify'>02.</span> About Me.
                    </span>
                </div>
                <div className='xs:mt-[4vh] lg:mt-[0vh] lg:text-justify xs:h-[auto] lg:w-[750px] xs:w-[90vw] grid items-center'>
                    <div className={`w-[auto] ${!colortoggle ? 'text-[#E2E2E2]' : 'text-black'} opacity-[0.6] font-Poppins leading-[170%] lg:leading-[auto] m-[2vw] lg:mt-0 lg:mb-0 xl:text-[1em] lg2:text-[1em] lg:text-base md:text-[1em] xs:text-base md:text-justify`}>
                        Hello! My name's Gino, an ambitious and independent developer. Along my studies in college, I develop applications for communities or for my clients, giving me much needed experience on what it's like launching, maintaining, and scaling digital products in real-world environments.
                    </div>
                    <div className={`mt-4 w-[auto] p-0 ${!colortoggle ? 'text-[#E2E2E2]' : 'text-black'} opacity-[0.6] font-Poppins leading-[170%] lg:leading-[auto] m-[2vw] lg:mt-0 lg:mb-0 xl:text-[1em] lg2:text-[1em] lg:text-base md:text-[1em] xs:text-base md:text-justify`}>
                        Along with my college journey I also did some freelancing and created a POS system. Since that was the first project I built with some actual users, I faced some problems which I ended up learning a lot.
                    </div>
                </div>
            </div>

            {/* projects */}
            <div className='xs:mt-[15vh] h-auto w-full flex flex-wrap xs:flex-col items-center justify-center projects-container'>
                <div className='xs:h-[auto] w-[90vw] lg:w-[970px]'>
                    <span className={`${!colortoggle ? 'text-white' : 'text-black'} opacity-[0.9] font-Poppins xl:text-[1em] lg2:text-[1em] lg:text-base md:text-[1em] xs:text-[1.20em] md:text-justify`}>
                        <span className='text-[#FFB64B] m-[2vw] sm:m-[0vw] font-Poppins xl:text-[1em] lg2:text-[1em] lg:text-base md:text-[1em] xs:text-base md:text-justify'>02.</span> Projects.
                    </span>
                </div>
                <div className='xs:mt-[4vh] h-auto xs:w-[90vw] lg:w-[970px] lg:mt-[7vh] flex flex-wrap justify-between'>
                    {projects && Object.keys(projects).map((index) => {
                        return (
                            <div className='h-auto w-full relative mt-2 mb-5'>
                                <h1 className={`font-Poppins ${!colortoggle ? 'text-[#E2E2E2]' : 'text-black'} text-[30px] lg:text-[30px] font-[700] absolute top-0 left-0 lg:left-1`}>{projects[index].project}</h1>
                                <span className={`font-Poppins ${!colortoggle ? 'text-[#E2E2E2]' : 'text-black'} p-[10px] text-[12px] font-[700] absolute top-0 right-0`}>{projects[index].web}</span>
                                <div className='h-[auto] w-[90vw] lg:w-full right-0 mt-[5vh] img-container'>
                                    <img src={`${projects[index].img}`} alt='img' />
                                    <div className='h-[auto] w-[90vw] lg:w-auto mt-4'>
                                        <span className='font-Poppins font-[700] text-[#E2E2E2] text-sm lg:text-[0.95em]'>
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
                <span className={`font-Poppins font-bold xl:text-[1.5em] ${!colortoggle ? 'text-white' : 'text-black'} tracking-[5px] lg2:text-[1.3em] lg1:text-base lg:text-base md:text-2xl xs:text-xl`}>
                    My <span className={`text-[#FFB64B]`}>Skills</span>
                </span>
                <div className='mt-2 h-auto xs:w-[85vw] lg:w-[970px] rounded-[20px] relative flex flex-wrap items-center justify-center'>
                    <span className={`xs:hidden lg:block absolute font-Oxygen ${!colortoggle ? 'text-white' : 'text-black'} lg:text-[3em] grid place-items-center font-bold tracking-[50px] pointer-events-none text transition-all`}>
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

            {/* footer */}
            <div className='bg-white/[0.063] h-auto w-auto grid place-items-center gap-2 relative mt-[10vh]'>

                <div className='h-auto w-[90vw] mt-5 flex align-center justify-center text-center'>
                    <p className='font-Poppins text-2xl text-white'>Need a front-end
                        <br />
                        <span className='font-Poppins text-[#FFB64B] font-[500]'>Developer ?</span>
                        <p className='text-base font-[500]'>Let's <span className='text-[#FFB64B]'>work</span> together!!</p>
                    </p>
                </div>

                <div className='h-auto w-[80vw] md:w-auto mb-5 mt-2 flex flex-wrap justify-center align-center'>
                    <div className='h-auto w-[70vw] md:w-[60vw] lg:w-[650px] m-3 rounded-[5px]'>
                        <p className='font-Poppins text-white text-[.8em] ml-3 mt-2'><span className='text-[#FFB64B]'>CONTACT</span> INFORMATION</p>
                        <p className='font-Poppins text-white w-[65vw] text-sm ml-3 mt-2 leading-[1.25rem] text-left'>If you have a good opportunity that matches my skills then don't hesitate to contact me.</p>

                        <br />
                        <button className='w-auto flex align-center justify-center ml-3'><FaDiscord className='text-white mt-[.1em] xs:text-[.9em]' /><span className='text-white font-Poppins ml-[.75em] text-sm'>Discord</span></button>
                        <button className='w-auto flex align-center justify-center ml-3 mt-2'><FaEnvelope className='text-white mt-[.1em] xs:text-[.9em]' /><span className='text-white font-Poppins ml-[.75em] text-sm'>ginodelavega1997@gmail.com</span></button>
                        <button className='w-auto flex align-center justify-center ml-3 mt-2'><FaPhone className='text-white mt-[.1em] xs:text-[.9em]' /><span className='text-white font-Poppins ml-[.75em] text-sm'>+63 9922325221</span></button>
                        <button className='w-auto flex align-center justify-center ml-3 mt-2'><FaFacebookMessenger className='text-white mt-[.1em] xs:text-[.9em]' /><span className='text-white font-Poppins ml-[.75em] text-sm'>Messenger</span></button>
                    </div>

                    <div className='h-auto w-[70vw] md:w-[80vw] lg:w-[1150px] xl:w-[1550px] mb-3 rounded-[5px] flex flex-wrap justify-center sm:mt-[3vh] xs:mt-[2vh] '>
                        <button className='bg-[#FFB64B] h-[40px] w-[270px] sm:w-[200px] xs:mt-3 sm:m-2 rounded-[3px]'>
                            <span className='text-black font-Poppins'>Discord</span>
                        </button>
                        <button className='bg-[#FFB64B] h-[40px] w-[270px] sm:w-[200px] xs:mt-3 sm:m-2 rounded-[3px]'>
                            <span className='text-black font-Poppins'>Gmail</span>
                        </button>
                        <button className='bg-[#FFB64B] h-[40px] w-[270px] sm:w-[200px] xs:mt-3 mb-3 sm:m-2 rounded-[3px]'>
                            <span className='text-black font-Poppins'>Messenger</span>
                        </button>
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