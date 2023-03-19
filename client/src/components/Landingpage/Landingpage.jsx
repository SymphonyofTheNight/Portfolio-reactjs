import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaGithub, FaTelegram, FaCode, FaDiscord } from 'react-icons/fa'

// developer
import developer from '../../developer/developer';

// techstack 
import techstack from '../../developer/techstack';

// vector
import vector from '../../assets/vector/vector';

// projects
import projects from '../../assets/projectsimg/projects';

// Email-Modal
import EmailModal from '../EmailModal/EmailModal';

const Landingpage = ({ colortoggle }) => {

    const [hover, setHover] = useState("");

    const [toggleModal, setToggleModal] = useState(false);

    return (
        <div className={`${colortoggle ? 'bg-white' : 'bg-black'} h-[auto] w-[100vw] relative overflow-hidden landing`}>

            {/* img */}
            <div className='h-[70vh] w-[100vw] md:mt-[30vh] xs:mt-[50vh] grid items-center justify-center img-container'>
                <img src={developer.img} className='h-[70vh] md:h-[60vh] xs:h-[50vh] img' alt='img' />
            </div>

            {/* about me */}
            <div className='h-[auto] w-[100vw] mt-[5vh] relative grid items-center justify-center text-left about'>
                <span className={`font-Oxygen font-bold xl:text-[.7em] lg1:text-[.4em] lg:text-[.6em] xs:text-[.5em] ${!colortoggle ? 'text-white' : 'text-black'} tracking-[5px] absolute label`}>
                    ABOUT
                </span>
                <div className='lg:text-justify xs:h-[auto] lg:w-[auto] xs:w-[80vw] grid items-center'>
                    <span className={`font-Oxygen font-bold xl:text-[2.5em] ${!colortoggle ? 'text-yellow-500' : 'text-yellow-500'} ml-[2vw] mt-[3vh] lg2:text-[2.2em] lg1:text-2xl lg:text-2xl md:text-4xl xs:text-2xl`}>
                        Hi, I'm Gino
                    </span>
                    <span className={`${!colortoggle ? 'text-white' : 'text-black'} ml-[2vw] font-Oxygen font-bold xl:text-sm lg:text-[.7em] md:text-[1.1em] xs:text-[.7em]`}>
                        {developer.fullname}
                    </span>
                    <div className={`w-[auto] ${!colortoggle ? 'text-white' : 'text-black'} font-Oxygen leading-[200%] m-[2vw] xl:text-[1.2em] lg2:text-[1.3em] lg:text-base md:text-[1.1em] xs:text-[.9em] md:text-justify`}>
                        Full-stack web developer and also an Instructor based in City of Malolos,Bulacan. <br />
                        I'm passionate in creating web applications with the latest technologies available in the market. <br />
                    </div>
                </div>
            </div>

            {/* Services */}
            <div className={`w-[full] lg:h-[auto] xs:h-[105vh] sm:h-auto sm:p-[7vh] md:h-[auto] lg:mt-[20vh] xs:mt-[15vh] sm:mt-[5vh] relative grid items-start justify-center services text-center`}>
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
            </div>

            {/* projects */}
            <div className='xs:h-[auto] w-[100vw] xs:mt-[5vh] relative grid align-center justify-center lg:mt-[15vh] lg2:mt-[0vh] xl:mt-[10vh] projects'>
                <span className={`font-Oxygen font-bold xl:text-[1.5em] ${!colortoggle ? 'text-white' : 'text-black'} tracking-[5px] lg2:text-[1.3em] lg1:text-sm lg:text-sm md:text-2xl sm:text-2xl xs:text-xl xs:ml-4 xs:mt-[3vh]`}>
                    My <span className={`text-yellow-500`}>Projects</span>
                </span>
                <div className='w-auto xs:h-auto lg:h-auto lg2:h-[100vh] xs:w-[100vw] relative flex xs:flex-wrap xs:flex-col items-center justify-around'>
                    {projects && Object.keys(projects).map(state => {
                        return (
                            <div className='xs:m-4 xs:h-[auto] w-[90vw] lg:w-[60vw] lg1:w-[59vw] lg2:w-[54vw] xl:w-[49vw] flex xs:flex-wrap xs:flex-col lg:flex lg: flex-wrap lg:flex-row' key={projects[state].name}>
                                <div className='xs:h-[auto] w-[90vw] lg:h-[22vh] lg:w-[30vw] lg1:h-[220px] lg1:w-[27vw] lg2:w-[25vw] lg2:h-[27vh] xl:w-[23vw] xl:h-[26vh] grid'>
                                    <span className={`font-Oxygen ${!colortoggle ? 'text-white' : 'text-black'} text-xl xs:mt-[1vh] lg:mt-[0vh] sm:text-2xl lg:text-xl xl:text-2xl lg:font-bold lg:w-[22vw] lg:flex lg:items-center lg:justify-start lg:leading-6`}>
                                        {projects[state].project}
                                    </span>
                                    <p className={`font-Oxygen ${!colortoggle ? 'text-white' : 'text-black'} text-[.9em] xs:mt-[1vh] lg:mt-[0vh] sm:text-[1.1em] lg:text-[.7em] xl:text-[.9em] lg:w-[25vw] lg2:w-[23vw] xl:w-[20vw] lg:text-justify `}>
                                        {projects[state].description}
                                    </p>
                                    <div className='flex xs:h-[11vh] lg:h-[10vh] w-[90vw] lg:w-[30vw] xl:w-[25vw] relative lg:mt-[3vh]'>
                                        <span className={`font-Oxygen ${colortoggle ? 'text-black' : 'text-[#cbd5e1]'} text-sm xs:mt-[2vh] lg:mt-[0vh] sm:text-[1em] lg:text-[.8em] absolute`}>
                                            {projects[state].hashtag}
                                        </span>
                                        <button className={`${!colortoggle ? 'bg-white' : 'bg-black'} font-Oxygen flex items-center justify-center h-[4vh] w-auto p-2 text-oxygen xs:text-sm lg:text-[.7em] xs:mt-[5.5vh] lg:mt-[5vh] rounded-[3px] ${colortoggle ? 'text-white' : 'text-black'} outline-none`}>
                                            Live demo <FaArrowAltCircleRight className='text-base xs:ml-2 transform-all xs:mt-1 lg:mt-0' />
                                        </button>
                                        <button className={`${!colortoggle ? 'bg-white' : 'bg-black'} font-Oxygen flex items-center justify-center h-[4vh] w-auto p-2 text-oxygen xs:text-sm lg:text-[.7em] xs:mt-[5.5vh] lg:mt-[5vh] xs:ml-[2vw] lg:ml-[.5vw] rounded-[3px] ${colortoggle ? 'text-white' : 'text-black'} outline-none`}>
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
            </div>

            {/* Technologies using */}
            <div className='lg:h-[auto] xs:h-auto md:h-[auto] w-[100vw] xs:mt-[5vh] md:mt-[7vh] relative grid items-center justify-center lg:mt-[10vh] xl:mt-[10vh] technologies'>
                <span className={`font-Oxygen font-bold xl:text-[.7em] lg1:text-[.4em] lg:text-[.6em] xs:text-[.5em] ${!colortoggle ? 'text-white' : 'text-black'} tracking-[5px] absolute label`}>
                    TECHNOLOGIES
                </span>
                <span className={`font-Oxygen font-bold xl:text-[1.5em] ${!colortoggle ? 'text-white' : 'text-black'} tracking-[5px] lg2:text-[1.3em] lg1:text-base lg:text-base md:text-2xl xs:text-xl`}>
                    My <span className={`text-yellow-500`}>Skills</span>
                </span>
                <div type='input' className='h-auto xs:w-[90vw] lg:w-[60vw] rounded-[20px] relative flex flex-wrap items-center justify-center'>
                    <span className={`xs:hidden lg:grid -z-7 absolute font-Oxygen ${!colortoggle ? 'text-white' : 'text-black'} lg:text-[4em] lg1:text-[4em] lg2:text-[4em] xl:text-[5em] grid place-items-center font-bold tracking-[50px] pointer-events-none text transition-all`}>
                        {hover}
                    </span>
                    {Object.keys(techstack).map(tech => {
                        return (
                            <React.Fragment>
                                <img className='xl:h-[3.5vh] lg2:h-[3.4vh] lg1:h-[3.9vh] lg:h-[3.5vh] md:h-[3.5vh] sm:h-[4.5vh] sss:h-[3.5vh] xs:h-[3vh] lg:m-5 lg:grayscale xs:m-4 xs:grayscale hover:grayscale-0 trasition duration-[.3s]' src={techstack[tech].svg} alt={techstack[tech].tech} key={techstack[tech].tech} onMouseOver={() => setHover(techstack[tech].tech)} />
                            </React.Fragment>)
                    })}
                </div>
            </div>

            {/* footer */}
            <div className='h-auto w-auto xs:mt-[5vh]'>
                <div className='xs:h-[auto] w-[100vw] lg:grid lg:items-center lg:justify-center lg:text-center'>
                    <span className={`font-Oxygen ${!colortoggle ? 'text-white' : 'text-black'} grid text-2xl md:text-4xl lg:text-4xl xl:text-5xl font-bold xs:ml-3 sm:ml-[3vw] xs:mt-1 lg:ml-[0vw]`}>
                        Say hi to Gino.
                    </span>
                    <p className={`w-[90vw] font-Oxygen ${!colortoggle ? 'text-white' : 'text-black'} text-[.9em] xs:ml-3 sm:ml-[3vw] sm:text-base md:text-xl xs:mt-1 lg:text-sm xl:w-[35vw] lg:ml-[0vw]`}>
                        I would love to hear from you. Whether it’s a project, a job opportunity,
                        or just a chat. Feel free to contact me.
                    </p>
                </div>
                <div className='xs:h-[15vh] lg:h-[20vh] xl:h-[30vh] w-[100vw] grid items-start justify-center lg:grid lg:items-center lg:justify-center'>
                    <button className={`${colortoggle ? 'bg-white' : 'bg-black'} font-Oxygen flex items-center justify-center h-[4vh] w-auto p-2 text-oxygen xs:text-sm sm:text-xl lg:text-sm xl:text-xl xs:mt-[5.5vh] lg:mt-[0vh] xs:ml-[2vw] lg:ml-[0vw] rounded-[3px] ${!colortoggle ? 'text-white' : 'text-black'} outline-none`}
                        onClick={() => {
                            setToggleModal(state => !state)
                        }}
                    >
                        Email <FaTelegram className={`text-base xs:ml-2 transform-all`} />
                    </button>
                </div>
                <div className='xs:h-[auto] w-full flex items-center justify-center font-Oxygen text-white text-[.7em] sm:text-base'>
                    <button className={`hover:bg-[#cbd5e1] hover:text-black xs:h-[3vh] xs:w-[8vw] flex items-center justify-center rounded-[2px]`}>
                        <FaGithub className={`text-base sm:text-xl transform-all ${!colortoggle ? 'text-white' : 'text-black'}`} />
                    </button>
                    <button className={`hover:bg-[#cbd5e1] hover:text-black xs:h-[3vh] xs:w-[8vw] flex items-center justify-center rounded-[2px]`}>
                        <FaDiscord className={`text-base sm:text-xl transform-all ${!colortoggle ? 'text-white' : 'text-black'}`} />
                    </button>
                </div>
                <div className={`${!colortoggle ? 'text-white' : 'text-black'} xs:h-[5vh] w-full flex items-center justify-center font-Oxygen text-[.7em] sm:text-base lg:text-[.7em]`}>
                    Built with <FaCode className={`xs:ml-2 transform-all`} /> &nbsp; by Gino Dela Vega
                </div>
            </div>

            {/* popup modal */}
            <EmailModal toggleModal={toggleModal} setToggleModal={setToggleModal} />

        </div>
    )
}

export default Landingpage;