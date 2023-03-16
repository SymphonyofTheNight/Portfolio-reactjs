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
            shownavref.current.style.transform = 'translateY(100px)';
        } else {
            shownavref.current.style.transform = 'translateY(0px)';
        }
    }, [scrollcount]);

    return (
        <nav className='flex items-center justify-end h-[6vh] w-[100vw] absolute bottom-0 left-0 z-10 transition-all duration-500 ease-in-out nav' ref={shownavref}>
            <button className={`bg-[#1a1a1a] h-[4vh] w-auto p-2 rounded-[5px] xs:mr-[2vw] lg:mr-[1vw] font-Oxygen text-sm text-white`}
                onClick={() => setColortoggle(state => !state)}
            >
                {!colortoggle ? 'Light mode' : 'Night mode'}
            </button>
        </nav>
    )
}

export default Nav;