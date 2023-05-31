import React, { useRef, useEffect } from 'react';
import { RiGithubLine, RiFacebookBoxLine } from 'react-icons/ri';
import { FaTimes } from 'react-icons/fa';

const HamburgerNav = ({ colortoggle, hamburgertoggle, setHambugertoggle }) => {

    const dom_child = useRef();

    useEffect(() => {
        if (!hamburgertoggle) {
            dom_child.current.style.transform = 'TranslateX(100%)';
        } else {
            dom_child.current.style.transform = 'TranslateX(0%)';
        }
    }, [hamburgertoggle])

    return (
        <div className={`h-full w-full ${!colortoggle ? 'bg-black' : 'bg-white'} absolute top-0 left-0 z-20 transition-all duration-500 ease-in-out HamburgerNav`} ref={dom_child}>
            <button className='h-[5vh] w-[12vw] absolute top-5 right-3 grid place-items-center'
                onClick={() => {
                    setHambugertoggle(state => !state)
                }}
            >
                <FaTimes className={`${!colortoggle ? 'text-[#FFB64B]' : 'text-black'} text-1xl`} />
            </button>
            <div className='bg-white/[0.063] xs:h-[100vh] xs:w-full grid'>
                <div className='h-[41vh] w-[100vw] mt-[25vh]'>
                    <button className='h-[7vh] w-full text-left flex items-end justify-bottom'>
                        <span className='text-[#FFB64B] ml-5 font-Poppins text-base'>01 <span className={`${!colortoggle ? 'text-white' : 'text-black'} ml-2 font-Poppins text-3xl`}>HOME</span></span>
                    </button>
                    <button className='h-[7vh] w-full text-left flex items-end justify-bottom'>
                        <span className='text-[#FFB64B] ml-5 font-Poppins text-base'>02 <span className={`${!colortoggle ? 'text-white' : 'text-black'} ml-2 font-Poppins text-3xl`}>ABOUT</span></span>
                    </button>
                    <button className='h-[7vh] w-full text-left flex items-end justify-bottom'>
                        <span className='text-[#FFB64B] ml-5 font-Poppins text-base'>03 <span className={`${!colortoggle ? 'text-white' : 'text-black'} ml-2 font-Poppins text-3xl`}>PROJECTS</span></span>
                    </button>
                    <button className='h-[7vh] w-full text-left flex items-end justify-bottom'>
                        <span className='text-[#FFB64B] ml-5 font-Poppins text-base'>04 <span className={`${!colortoggle ? 'text-white' : 'text-black'} ml-2 font-Poppins text-3xl`}>CONTACT</span></span>
                    </button>
                    <div className='mt-[6vh] h-[7vh] w-[75vw] ml-5 text-left flex items-center justify-between'>
                        <button className={`bg-none h-[50px] w-[145px] rounded-[5px] ${!colortoggle ? 'border-[#FFB64B] text-[#FFB64B]' : 'border-[#000000] text-[#000000]'} font-Poppins border-[1px] `}>
                            Resume
                        </button>
                        <button className={`h-[50px] w-[auto] rounded-[5px] ${!colortoggle ? 'border-[#FFB64B] text-[#FFB64B]' : 'border-[#000000] text-[#000000]'} border-[1px] `}>
                            <RiGithubLine className={`${!colortoggle ? 'text-[#FFB64B]' : 'text-black'} text-2xl ml-3 mr-3`} />
                        </button>
                        <button className={`h-[50px] w-[auto] rounded-[5px] ${!colortoggle ? 'border-[#FFB64B] text-[#FFB64B]' : 'border-[#000000] text-[#000000]'} border-[1px] `}>
                            <RiFacebookBoxLine className={`${!colortoggle ? 'text-[#FFB64B]' : 'text-black'} text-2xl ml-3 mr-3`} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HamburgerNav;