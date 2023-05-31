import React, { useRef, useState, useEffect } from 'react';
// resume
import resume from '../../resume/resume.pdf';

const Nav = ({ colortoggle, setColortoggle, setHambugertoggle }) => {

    const [scrollcount, setScrollCount] = useState(0);
    const shownavref = useRef(null);

    let shownav = 600;

    React.useEffect(() => {
        const offset = () => setScrollCount(window.pageYOffset);
        window.addEventListener('scroll', offset);
    }, [])

    useEffect(() => {
        if (scrollcount <= shownav) {
            shownavref.current.style.transform = 'translateY(-100px)';
        } else {
            shownavref.current.style.transform = 'translateY(0px)';
        }
    }, [scrollcount]);

    return (
        <div className='nav absolute xs:h-[10vh] lg:h-[14vh] w-[100vw] top-0 left-0 z-10 transition-all duration-500 ease-in-out' ref={shownavref}>
            <button className={`xs:ml-[6vw] lg:ml-[4vw] ${!colortoggle ? 'text-white' : 'text-black'} font-Poppins font-[700] lg:tracking-[2.75px] xs:tracking-[1.75px] lg:text-[2.3em] md:text-[1em] xs:text-2xl`}>
                G
            </button>
            <div className='xs:hidden lg:grid absolute xs:mr-[8vw] lg:mr-[9vw] h-full w-[auto] place-items-center right-0'>
                <a href={resume} download="resume">
                    <button className={`bg-none h-[50px] w-[145px] rounded-[5px] ${!colortoggle ? 'border-[#FFB64B] text-[#FFB64B]' : 'border-[#000000] text-[#000000]'} border-[1px] `}>
                        Resume
                    </button>
                </a>
            </div>
            <button className='absolute xs:mr-[6.5vw] lg:mr-[4vw] h-full w-[auto] grid items-center justify-center right-0'
                onClick={() => {
                    setHambugertoggle(state => !state)
                }}
            >
                <div class="space-y-2">
                    <span class={`block w-8 h-0.5 ${!colortoggle ? 'bg-white' : 'bg-black'}`}></span>
                    <span class={`block w-5 h-0.5 ${!colortoggle ? 'bg-white' : 'bg-black'}`}></span>
                </div>
            </button>
        </div>
    )
}

export default Nav;