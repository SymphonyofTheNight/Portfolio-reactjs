import React, { useRef } from 'react';
import { useEffect, useState } from 'react';
import { FaFacebook, FaGithub, FaTelegram } from 'react-icons/fa';

const Cover = ({ colortoggle, setColortoggle }) => {

    const months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "October", "NOVEMBER", "DECEMBER"];

    const [scrollcount, setScrollCount] = useState(0);

    const wingTrigger = 150;
    const topbotTrigger = 350;
    const fadediv = 400;
    const displaynon = 600;

    // reference
    const leftwingref = useRef(null);
    const rightwingref = useRef(null);
    const topref = useRef(null);
    const botref = useRef(null);
    const mainref = useRef(null);

    useEffect(() => {
        const offset = () => setScrollCount(window.pageYOffset);
        window.addEventListener('scroll', offset);
    }, [])

    useEffect(() => {
        if (scrollcount <= wingTrigger) {
            leftwingref.current.style.transform = 'translateX(0px)';
            leftwingref.current.style.opacity = '1';
            rightwingref.current.style.transform = 'translateX(0px)';
            rightwingref.current.style.opacity = '1';
        } else {
            leftwingref.current.style.opacity = '0';
            leftwingref.current.style.transform = 'translateX(-100px)';
            rightwingref.current.style.opacity = '0';
            rightwingref.current.style.transform = 'translateX(100px)';
        }
        if (scrollcount <= topbotTrigger) {
            topref.current.style.transform = 'translateY(0px)';
            topref.current.style.opacity = '1';
            botref.current.style.transform = 'translateY(0px)';
            botref.current.style.opacity = '1';
        } else {
            topref.current.style.transform = 'translateY(-100px)';
            topref.current.style.opacity = '0';
            botref.current.style.transform = 'translateY(100px)';
            botref.current.style.opacity = '0';
        }
        if (scrollcount <= fadediv) {
            mainref.current.style.opacity = '0.9';
        } else {
            mainref.current.style.opacity = '0';
        }
        if (scrollcount <= displaynon) {
            mainref.current.style.display = 'block';
        } else {
            mainref.current.style.display = 'none';
        }
    }, [scrollcount])

    return (
        <div className={`cover ${!colortoggle ? 'bg-black/[0.9]' : 'bg-white/[0.9]'} h-[100vh] w-[100vw] absolute top-0 left-0 z-10 flex flex-col flex-wrap transition duration-[1s] ease-in-out`} ref={mainref}>
            <div className='bg-transparent h-[20vh] w-[100vw] flex flex-wrap relative transition duration-1000 ease-in-out' ref={topref}>
                <div className='bg-transparent h-[20vh] w-[20vw] absolute left-0 grid align-items-center justify-center'>
                    <span className={`${!colortoggle ? 'text-white' : 'text-black'} font-Oswald text-2xl tracking-[2.75px]`}>
                        GINO D.V
                    </span>
                </div>
                <div className='bg-transparent h-[20vh] w-[20vw] absolute right-0 grid place-items-center'>
                    <button className={`bg-transparent h-[4vh] w-[auto] px-4 ${!colortoggle ? 'text-white' : 'text-black'} font-Oswald tracking-[3px] transition duration-[.5s] text-[1.2em]`} onClick={() => {
                        setColortoggle(state => !state)
                    }}>
                        {!colortoggle ? 'Light mode' : 'Night mode'}
                    </button>
                </div>
            </div>
            <div className='bg-transparent h-[65vh] w-[100vw] flex flex-row flex-wrap relative'>
                <div className='bg-transparent w-[15vw] h-[65vh] grid place-items-center transition duration-[1s] ease-in-out' ref={leftwingref}>
                    <div className={`h-[50vh] w-[4px] ${!colortoggle ? 'bg-white' : 'bg-black'}`} />
                </div>
                <div className='bg-transparent h-[65vh] w-[70vw] flex items-center justify-center'>
                    <span className={`text-[4.5em] ${!colortoggle ? 'text-white' : 'text-black'} font-Oxygen tracking-[25px] font-bold`}>
                        FRONT END DEVELOPER <br />
                    </span>
                </div>
                <div className='bg-transparent w-[15vw] h-[65vh] grid place-items-center absolute right-[0] transition duration-[1s] ease-in-out' ref={rightwingref}>
                    <div className={`h-[50vh] w-[4px] ${!colortoggle ? 'bg-white' : 'bg-black'}`} />
                </div>
            </div>
            <div className='bg-transparent h-[15vh] w-[100vw] flex flex-row flex-wrap relative transition duration-[1s] ease-in-out' ref={botref}>
                <div className='bg-transparent w-[40vw] h-[15vh] flex items-center justify-center'>
                    <span className={`text-[1.1em] font-Oswald ${!colortoggle ? 'text-white' : 'text-black'} tracking-[7px] mb-[3vh]`}>
                        AVAILABLE FOR NEW PROJECTS THIS {months[new Date().getMonth()]}
                    </span>
                </div>
                <div className='bg-transparent w-[40vw] h-[15vh] absolute right-0 flex items-center justify-end'>
                    <div className='bg-transparent h-[4vh] w-[auto] mr-[5vw] mb-[3vh] flex flex-row'>
                        <button className='bg-transparent h-[4vh] w-[auto] grid place-items-center'>
                            <FaFacebook className={`text-[2em] mr-[20px] ml-[20px] ${!colortoggle ? 'text-white' : 'text-black'}`} />
                        </button>
                        <button className='bg-transparent h-[4vh] w-[auto] grid place-items-center'>
                            <FaGithub className={`text-[2em] mr-[20px] ml-[20px] ${!colortoggle ? 'text-white' : 'text-black'}`} />
                        </button>
                        <button className='bg-transparent h-[4vh] w-[auto] grid place-items-center'>
                            <FaTelegram className={`text-[2em] mr-[20px] ml-[20px] ${!colortoggle ? 'text-white' : 'text-black'}`} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cover;