import React, { useRef, useState, useEffect } from 'react';

const Nav = ({ colortoggle, setColortoggle }) => {

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
            <button className={`xs:ml-[6vw] lg:ml-[4vw]  ${!colortoggle ? 'text-white' : 'text-black'} font-Poppins font-[700] lg:tracking-[2.75px] xs:tracking-[1.75px] lg:text-[2.3em] md:text-[1em] xs:text-base`}>
                G
            </button>
            <div className='xs:hidden lg:grid absolute xs:mr-[8vw] lg:mr-[9vw] h-full w-[auto] place-items-center right-0'>
                <button className='bg-none h-[50px] w-[145px] rounded-[5px] border-[#FFB64B] border-[1px] text-[#FFB64B]'>
                    Resume
                </button>
            </div>
            <button className='absolute xs:mr-[8vw] lg:mr-[4vw] h-full w-[auto] grid items-center justify-center right-0'>
                <div class="space-y-2">
                    <span class="block w-8 h-0.5 bg-white"></span>
                    <span class="block w-5 h-0.5 bg-white"></span>
                </div>
            </button>
        </div>
    )
}

export default Nav;