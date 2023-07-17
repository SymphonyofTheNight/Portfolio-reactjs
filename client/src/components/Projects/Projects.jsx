import React, { useRef, useEffect, useState } from 'react';
import { FaFacebookMessenger, FaCode, FaDiscord, FaPhone, FaEnvelope, FaTimes, } from 'react-icons/fa';
import { RiGithubLine, RiFacebookBoxLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

// resume
import resume from '../../resume/resume.pdf';

const Projects = ({ colortoggle, setHambugertoggle, hamburgertoggle }) => {

    const selected_proj_from_local = localStorage.getItem("selected_project");

    const dom_child = useRef();
    const home = useRef(null);
    // const about = useRef(null);

    // selected project
    const [proj_selected] = useState(selected_proj_from_local ? JSON.parse(selected_proj_from_local) : null);

    const scrollInto_home = () => {
        home.current.scrollIntoView({ behavior: 'smooth' });
        setHambugertoggle(state => !state);
    }

    // const scrollInto_about = () => {
    //     about.current.scrollIntoView({ behavior: 'auto', block: 'center', inline: 'center' });
    // }

    const location_github = () => {
        window.open('https://github.com/gamexgaming1997', '_blank');
    }

    const location_fb = () => {
        window.open('https://www.facebook.com/Crissaegrim1997', '_blank');
    }

    // social_media endpoints
    const github_endpoint = () => {
        window.open('https://github.com/gamexgaming1997', '_blank');
    }

    const gmail_endpoint = () => {
        window.open('mailto:ginodelavega1997@gmail.com', '_blank');
    }

    const messenger_endpoint = () => {
        window.open('https://www.facebook.com/Crissaegrim1997', '_blank');
    }

    useEffect(() => {
        if (!hamburgertoggle) {
            dom_child.current.style.transform = 'TranslateX(100%)';
        } else {
            dom_child.current.style.transform = 'TranslateX(0%)';
        }
    }, [hamburgertoggle])

    console.log(proj_selected)

    return (
        <div className={`${colortoggle ? 'bg-[#ffffff]' : 'bg-[#0A0909]'} grid items-center justify-center h-auto w-full overflow-hidden`} ref={home}>

            <div className={`h-[auto] pt-10 pb-10 mt-[70vh] flex flex-wrap flex-col items-center justify-center xs:w-[100vw]`}>
                <div className='h-[10vh] grid items-center justify-start w-[90vw]'>
                    <p className={`font-Poppins ${!colortoggle ? 'text-white' : 'text-black'} text-xl font-bold`}>{proj_selected.project}</p>
                </div>

                <div className='h-auto mt-[5vh] w-[90vw] tracking-[.10em] leading-8'>
                    <p className={`font-Poppins ${!colortoggle ? 'text-white' : 'text-black'} text-xl`}>{proj_selected.description}</p>
                </div>

                <div className='h-auto mt-[5vh] w-[90vw] tracking-[.10em] leading-7'>
                    <p className={`font-Poppins ${!colortoggle ? 'text-white' : 'text-black'} text-base font-bold`}>Location</p>
                    <p className={`font-Poppins ${!colortoggle ? 'text-white' : 'text-black'} text-sm`}>{proj_selected.location}</p>
                </div>

                <div className='h-auto mt-[1.5vh] w-[90vw] tracking-[.10em] leading-7'>
                    <p className={`font-Poppins ${!colortoggle ? 'text-white' : 'text-black'} text-base font-bold`}>Date</p>
                    <p className={`font-Poppins ${!colortoggle ? 'text-white' : 'text-black'} text-sm`}>{proj_selected.date}</p>
                </div>

                <div className='h-auto mt-[1.5vh] w-[90vw] tracking-[.10em] leading-7'>
                    <p className={`font-Poppins ${!colortoggle ? 'text-white' : 'text-black'} text-base font-bold`}>Technologies</p>
                    <p className={`font-Poppins ${!colortoggle ? 'text-white' : 'text-black'} text-sm`}>{proj_selected.technologies}</p>
                </div>

                <div className='h-auto mt-[1.5vh] w-[90vw] tracking-[.10em] leading-7'>
                    <p className={`font-Poppins ${!colortoggle ? 'text-white' : 'text-black'} text-base font-bold`}>Product</p>
                    <p className={`font-Poppins ${!colortoggle ? 'text-white' : 'text-black'} text-sm`}>{proj_selected.product}</p>
                </div>

                <div className='h-auto mt-[4.5vh] w-[90vw] tracking-[.10em] leading-7'>
                    <img src={proj_selected.img} className='h-auto w-[100%]' alt='img' />
                </div>

                <div className='h-auto mt-[4.5vh] w-[90vw] tracking-[.10em] leading-7'>
                    <p className={`font-Poppins ${!colortoggle ? 'text-white' : 'text-black'} text-base font-bold`}>/ 01 CONTEXT</p>
                    <p className={`font-Poppins ${!colortoggle ? 'text-white' : 'text-black'} text-sm mt-[1.5vh]`}>{proj_selected.context}</p>
                </div>

                {proj_selected.img2 === "" || null || undefined ?
                    <>
                    </>
                    :
                    <div className='h-auto mt-[4.5vh] w-[90vw] tracking-[.10em] leading-7'>
                        <img src={proj_selected.img2} className='h-auto w-[100%]' alt='img' />
                    </div>
                }
            </div>

            {/* footer */}
            <div className={`bg-white/[0.063] h-auto w-auto grid place-items-center gap-2 relative mt-[20vh]`}>

                <div className='h-auto w-[90vw] mt-5 flex align-center justify-center text-center'>
                    <p className={`font-Poppins text-2xl ${!colortoggle ? 'text-white' : 'text-black'}`}>Need a front-end
                        <br />
                        <span className='font-Poppins text-[#FFB64B] font-[500]'>Developer ?</span>
                        <p className='text-base font-[500]'>Let's <span className='text-[#FFB64B]'>work</span> together!!</p>
                    </p>
                </div>

                <div className='h-auto w-[80vw] md:w-auto mb-5 mt-2 flex flex-wrap justify-center align-center'>
                    <div className='h-auto w-[70vw] md:w-[60vw] lg:w-[650px] m-3 rounded-[5px]'>
                        <p className={`font-Poppins ${!colortoggle ? 'text-white' : 'text-black'} text-[.8em] ml-3 mt-2`}><span className='text-[#FFB64B]'>CONTACT</span> INFORMATION</p>
                        <p className={`font-Poppins ${!colortoggle ? 'text-white' : 'text-black'} w-[65vw] text-sm ml-3 mt-2 leading-[1.25rem] text-left`}>If you have a good opportunity that matches my skills then don't hesitate to contact me.</p>

                        <br />
                        <button className='w-auto flex align-center justify-center ml-3'><FaDiscord className={`${!colortoggle ? 'text-white' : 'text-black'} mt-[.1em] xs:text-[.9em]`} /><span className={`${!colortoggle ? 'text-white' : 'text-black'} font-Poppins ml-[.75em] text-sm`}>Discord</span></button>
                        <button className='w-auto flex align-center justify-center ml-3 mt-2'><FaEnvelope className={`${!colortoggle ? 'text-white' : 'text-black'} mt-[.1em] xs:text-[.9em]`} /><span className={`${!colortoggle ? 'text-white' : 'text-black'} font-Poppins ml-[.75em] text-sm`}>ginodelavega1997@gmail.com</span></button>
                        <button className='w-auto flex align-center justify-center ml-3 mt-2'><FaPhone className={`${!colortoggle ? 'text-white' : 'text-black'} mt-[.1em] xs:text-[.9em]`} /><span className={`${!colortoggle ? 'text-white' : 'text-black'} font-Poppins ml-[.75em] text-sm`}>+63 9922325221</span></button>
                        <button className='w-auto flex align-center justify-center ml-3 mt-2'><FaFacebookMessenger className={`${!colortoggle ? 'text-white' : 'text-black'} mt-[.1em] xs:text-[.9em]`} /><span className={`${!colortoggle ? 'text-white' : 'text-black'} font-Poppins ml-[.75em] text-sm`}>Messenger</span></button>
                    </div>

                    <div className='h-auto w-[70vw] md:w-[80vw] lg:w-[1150px] xl:w-[1550px] mb-3 rounded-[5px] flex flex-wrap justify-center sm:mt-[3vh] xs:mt-[2vh] '>
                        <button onClick={github_endpoint} className='bg-[#FFB64B] h-[40px] w-[270px] sm:w-[200px] xs:mt-3 sm:m-2 rounded-[3px]'>
                            <span className='text-black font-Poppins'>Github</span>
                        </button>
                        <button onClick={gmail_endpoint} className='bg-[#FFB64B] h-[40px] w-[270px] sm:w-[200px] xs:mt-3 sm:m-2 rounded-[3px]'>
                            <span className='text-black font-Poppins'>Gmail</span>
                        </button>
                        <button onClick={messenger_endpoint} className='bg-[#FFB64B] h-[40px] w-[270px] sm:w-[200px] xs:mt-3 mb-3 sm:m-2 rounded-[3px]'>
                            <span className='text-black font-Poppins'>Messenger</span>
                        </button>
                    </div>
                </div>

                <div className={`${!colortoggle ? 'text-white' : 'text-black'} xs:h-[5vh] w-full flex items-center justify-center font-Poppins text-[.7em] sm:text-base lg:text-[.7em]`}>
                    Built with <FaCode className={`xs:ml-2 transform-all`} /> &nbsp; by Gino Dela Vega
                </div>
            </div>

            {/* hamburgernav */}
            <div className={`xs:h-full xs:w-[100vw] ${!colortoggle ? 'bg-transparent' : 'bg-transparent'} absolute top-0 left-0 z-20 transition-all duration-500 ease-in-out HamburgerNav`} ref={dom_child}>
                <div className='absolute top-0 right-0 xs:h-full xs:w-[100vw] sm:w-[412px]'>
                    <button className='h-[5vh] xs:w-[50px] absolute top-5 right-3 grid place-items-center'
                        onClick={() => {
                            setHambugertoggle(state => !state)
                        }}
                    >
                        <FaTimes className={`${!colortoggle ? 'text-[#FFB64B]' : 'text-black'} text-1xl`} />
                    </button>
                    <div className={`${!colortoggle ? 'bg-[#181818]' : 'bg-[#ffffff]'} xs:h-[100vh] xs:w-full grid`}>
                        <div className='h-[41vh] w-[410px] mt-[25vh]'>
                            <Link to="/" path="relevant" >
                                <button className='h-[7vh] w-full text-left flex items-end justify-bottom' onClick={scrollInto_home}>
                                    <span className='text-[#FFB64B] ml-5 font-Poppins text-base'>01 <span className={`${!colortoggle ? 'text-white' : 'text-black'} ml-2 font-Poppins text-3xl`}>HOME</span></span>
                                </button>
                            </Link>
                            <div className='mt-[6vh] h-[7vh] w-[270px] ml-5 text-left flex items-center justify-between'>
                                <a href={resume} download="resume">
                                    <button className={`bg-none h-[50px] w-[145px] rounded-[5px] ${!colortoggle ? 'border-[#FFB64B] text-[#FFB64B]' : 'border-[#000000] text-[#000000]'} font-Poppins border-[1px] `}>
                                        Resume
                                    </button>
                                </a>
                                <button className={`h-[50px] w-[auto] rounded-[5px] ${!colortoggle ? 'border-[#FFB64B] text-[#FFB64B]' : 'border-[#000000] text-[#000000]'} border-[1px] `}
                                    onClick={location_github}
                                >
                                    <RiGithubLine className={`${!colortoggle ? 'text-[#FFB64B]' : 'text-black'} text-2xl ml-3 mr-3`} />
                                </button>
                                <button className={`h-[50px] w-[auto] rounded-[5px] ${!colortoggle ? 'border-[#FFB64B] text-[#FFB64B]' : 'border-[#000000] text-[#000000]'} border-[1px] `}
                                    onClick={location_fb}
                                >
                                    <RiFacebookBoxLine className={`${!colortoggle ? 'text-[#FFB64B]' : 'text-black'} text-2xl ml-3 mr-3`} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Projects;