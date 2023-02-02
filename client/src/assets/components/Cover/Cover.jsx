import React, { useRef } from 'react';
import { useEffect, useState } from 'react';
import { FaFacebook, FaGithub, FaTelegram } from 'react-icons/fa';
import * as Switch from '@radix-ui/react-switch';

const Cover = () => {

    const months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "October", "NOVEMBER", "DECEMBER"];

    const [scrollcount, setScrollCount] = useState(0);
    const [togglecolor, setToggleColor] = useState(false);

    const thumb_1 = 5;
    const thumb_2 = 25;
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
    const thumbswitchref = useRef(null);

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
        <div className='Cover col-lg-12 m-0 p-0' ref={mainref}>
            <div className='bg-red-700 h-[20vh] w-[100vw] flex flex-wrap relative transition duration-1000 ease-in-out' ref={topref}>
                <div className='bg-red-500 h-[20vh] w-[20vw] absolute left-0 grid align-items-center justify-center'>
                    <span className='text-white font-Oswald text-2xl tracking-[2.75px]'>
                        GINO D.V
                    </span>
                </div>
                <div className='bg-green-500 h-[20vh] w-[20vw] absolute right-0 grid place-items-center'>
                    <button className={`bg-transparent h-[4vh] w-[auto] px-4 ${!togglecolor ? 'text-white' : 'text-black'} font-Oswald tracking-[3px] transition duration-[.5s] `} onClick={() => {
                        setToggleColor(state => !state)
                    }}>
                        {!togglecolor ? 'Light mode' : 'Night mode'}
                    </button>
                    {/* <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Switch.Root className={`w-[52px] h-[25px] ${togglecolor ? 'bg-black' : 'bg-white'} rounded-[9999px] relative' id="airplane-mode`}>
                            <Switch.Thumb onClick={() => {
                                setToggleColor(state => !state)
                            }} className={`block w-[21px] h-[19px] ${!togglecolor ? 'bg-black' : 'bg-white'} rounded-[9999px] translate-x-[${!togglecolor ? '5' : '25'}px]`} ref={thumbswitchref} />
                        </Switch.Root>
                    </div> */}
                </div>
            </div>
            <div className='bg-transparent h-[65vh] w-[100vw] flex flex-row flex-wrap relative'>
                <div className='bg-transparent w-[15vw] h-[65vh] grid place-items-center transition duration-[1s] ease-in-out' ref={leftwingref}>
                    <div className='h-[50vh] w-[4px] bg-white' />
                </div>
                <div className='bg-transparent h-[65vh] w-[70vw] flex items-center justify-center'>
                    <span className='text-[4.5em] text-white font-Oxygen tracking-[25px] font-bold'>
                        FRONT END DEVELOPER <br />
                    </span>
                </div>
                <div className='bg-transparent w-[15vw] h-[65vh] grid place-items-center absolute right-[0] transition duration-[1s] ease-in-out' ref={rightwingref}>
                    <div className='h-[50vh] w-[4px] bg-white' />
                </div>
            </div>
            <div className='bottom' ref={botref}>
                <div className='left-container'>
                    <span className='text-label'>
                        AVAILABLE FOR NEW PROJECTS THIS {months[11]}
                    </span>
                </div>
                <div className='right-container'>
                    <div className='logo-container'>
                        <button className='btn-container'>
                            <FaFacebook className='icons' />
                        </button>
                        <button className='btn-container'>
                            <FaGithub className='icons' />
                        </button>
                        <button className='btn-container'>
                            <FaTelegram className='icons' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cover;