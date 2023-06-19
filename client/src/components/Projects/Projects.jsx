import React, { useRef, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { RiGithubLine, RiFacebookBoxLine } from 'react-icons/ri';

// resume
import resume from '../../resume/resume.pdf';

const Projects = ({ colortoggle, setHambugertoggle, hamburgertoggle }) => {

    const dom_child = useRef();
    const home = useRef(null);
    const about = useRef(null);
    const project = useRef(null);
    const contact = useRef(null);

    const scrollInto_home = () => {
        home.current.scrollIntoView({ behavior: 'smooth' });
        setHambugertoggle(state => !state);
    }

    const scrollInto_about = () => {
        about.current.scrollIntoView({ behavior: 'auto', block: 'center', inline: 'center' });
    }

    const scrollInto_projects = () => {
        project.current.scrollIntoView({ behavior: 'smooth' });
    }

    const scrollInto_contact = () => {
        contact.current.scrollIntoView({ behavior: 'smooth' });
    }

    const location_github = () => {
        window.open('https://github.com/gamexgaming1997', '_blank');
    }

    const location_fb = () => {
        window.open('https://www.facebook.com/Crissaegrim1997', '_blank');
    }

    useEffect(() => {
        if (!hamburgertoggle) {
            dom_child.current.style.transform = 'TranslateX(100%)';
        } else {
            dom_child.current.style.transform = 'TranslateX(0%)';
        }
    }, [hamburgertoggle])

    return (
        <div className={`${colortoggle ? 'bg-[#ffffff]' : 'bg-[#0A0909]'} h-[260vh] w-[100vw] overflow-hidden`}>

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
                            <button className='h-[7vh] w-full text-left flex items-end justify-bottom' onClick={scrollInto_home}>
                                <span className='text-[#FFB64B] ml-5 font-Poppins text-base'>01 <span className={`${!colortoggle ? 'text-white' : 'text-black'} ml-2 font-Poppins text-3xl`}>HOME</span></span>
                            </button>
                            <button className='h-[7vh] w-full text-left flex items-end justify-bottom' onClick={scrollInto_about} >
                                <span className='text-[#FFB64B] ml-5 font-Poppins text-base'>02 <span className={`${!colortoggle ? 'text-white' : 'text-black'} ml-2 font-Poppins text-3xl`}>PROJECTS</span></span>
                            </button>
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