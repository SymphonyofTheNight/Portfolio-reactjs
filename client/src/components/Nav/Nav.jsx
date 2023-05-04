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
        <nav className='nav absolute h-[10vh] w-[100vw] top-0 left-0 z-10 transition-all duration-500 ease-in-out' ref={shownavref}>
            <button className={`xs:ml-[6vw] ${!colortoggle ? 'text-white' : 'text-black'} font-Oswald xl:text-2xl lg:tracking-[2.75px] xs:tracking-[1.75px] lg2:text-1xl lg1:text-[1.3em] lg:text-[1.3em] md:text-[1em] xs:text-base`}>
                GINO D.V
            </button>
            <button className='absolute mr-[8vw] h-full w-[auto] grid items-center justify-center right-0'>
                <div class="space-y-2">
                    <span class="block w-8 h-0.5 bg-white"></span>
                    <span class="block w-5 h-0.5 bg-white"></span>
                </div>
            </button>
        </nav>
    )
}

export default Nav;