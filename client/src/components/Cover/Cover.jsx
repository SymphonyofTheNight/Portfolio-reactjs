import React, { useRef } from 'react';
import { useEffect, useState } from 'react';
import { FaFacebook, FaGithub, FaTelegram } from 'react-icons/fa';

const Cover = ({ colortoggle, setColortoggle, title }) => {

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
        <div className={`cover ${!colortoggle ? 'bg-black/[0.9]' : 'bg-white/[0.9]'} overflow-hidden h-[100vh] w-[100vw] absolute top-0 left-0 z-[30] flex flex-col flex-wrap transition duration-[1s] ease-in-out`} ref={mainref}>
            <div className='lg:h-[20vh] xs:h-[10vh] w-[100vw] flex flex-wrap relative transition duration-1000 ease-in-out' ref={topref}>
                <div className='lg:h-[20vh] xs:h-[10vh] lg:w-[20vw] xs:w-[33vw] sm:w-[20vw] absolute left-0 grid align-items-center justify-center'>
                    <span className={`${!colortoggle ? 'text-white' : 'text-black'} font-Oswald xl:text-2xl lg:tracking-[2.75px] xs:tracking-[1.75px] lg2:text-1xl lg1:text-[1.3em] lg:text-[1.3em] md:text-[1em] xs:text-base`}>
                        GINO D.V
                    </span>
                </div>
                <div className='lg:h-[20vh] xs:h-[10vh] lg:w-[20vw] xs:w-[36vw] sss:w-[33vw] sm:w-[21vw] absolute right-0 grid place-items-center'>
                    <button className={`bg-transparent h-[4vh] w-[auto] px-4 ${!colortoggle ? 'text-white' : 'text-black'} font-Oswald lg:tracking-[3px] xs:tracking-[1px] transition duration-[.5s] xl:text-[1.2em] lg2:text-[1.1em] lg1:text-[1em] lg:text-[1em] md:text-[1em] md:mr-2 lg:mr-0`} onClick={() => {
                        setColortoggle(state => !state)
                    }}>
                        {!colortoggle ? 'Light mode' : 'Night mode'}
                    </button>
                </div>
            </div>
            <div className='lg:h-[65vh] xs:h-[80vh] w-[100vw] flex flex-row flex-wrap relative mid-container'>
                <div className='bg-transparent w-[15vw] lg:h-[65vh] xs:h-[80vh] grid place-items-center transition duration-[1s] ease-in-out' ref={leftwingref}>
                    <div className={`lg:h-[50vh] xs:h-[80vh] lg:w-[4px] xs:w-[3px] md:h-[80vh] ${!colortoggle ? 'bg-white' : 'bg-black'}`} />
                </div>
                <div className='lg:h-[65vh] xs:h-[80vh] w-[70vw] flex items-center justify-center xs:text-center center-text-container'>
                    <div className='txt-container'>
                        <span className={`xl:text-[4.5em] flex items-center justify-center w-auto ${!colortoggle ? 'text-white' : 'text-black'} font-Oxygen lg:tracking-[25px] xs:tracking-[10px] font-bold lg2:text-[3.5em] lg1:text-[2.5em] lg:text-[2.2em] md:text-[2.8em] sm:text-[4.5em] xs:text-[2em] text`}>
                            {title} <br />
                        </span>
                    </div>
                </div>
                <div className='bg-transparent w-[15vw] lg:h-[65vh] xs:h-[80vh] grid place-items-center absolute right-[0] transition duration-[1s] ease-in-out' ref={rightwingref}>
                    <div className={`lg:h-[50vh] xs:h-[80vh] lg:w-[4px] xs:w-[3px] md:h-[80vh] ${!colortoggle ? 'bg-white' : 'bg-black'}`} />
                </div>
            </div>
            <div className='h-[15vh] w-[100vw] flex flex-row flex-wrap relative transition duration-[1s] ease-in-out' ref={botref}>
                <div className='lg:w-[40vw] xs:w-[50vw] md:w-[45vw] flex items-center justify-center md:text-justify'>
                    <span className={`xl:text-[1.2em] font-Oswald ${!colortoggle ? 'text-white' : 'text-black'} tracking-[7px] mb-[3vh] xl:ml-[.5vw] lg2:text-base lg2:tracking-[5px] lg1:text-[.9em] lg1:tracking-[4px] lg1:ml-[3vw] lg:text-[.9em] lg:tracking-[3px] md:text-[.9em] md:ml-[2vw] md:tracking-[3px] md:p-[2em] xs:text-[.7em] sm:text-base xs:tracking-[1px] xs:ml-[7vw] sm:ml-[2vw] xs:mb-[5vh]`}>
                        AVAILABLE FOR NEW PROJECTS THIS {months[new Date().getMonth()]}
                    </span>
                </div>
                <div className='w-[40vw] h-[15vh] absolute right-0 flex items-center justify-end'>
                    <div className='xl:mr-[6vw] lg:h-[4vh] lg:w-[auto] lg:mr-[5vw] xs:mr-[8vw] sm:mr-[4vw] md:mr-[5vw] mb-[3vh] xs:mb-[5vh] flex flex-row '>
                        <a href='https://www.facebook.com/Crissaegrim1997' target="_blank" rel="noreferrer">
                            <button className='lg:h-[4vh] lg:w-[auto] xs:w-[11vw] sm:w-[auto] grid place-items-center'>
                                <FaFacebook className={`xl:text-[2em] mr-[20px] ml-[20px] ${!colortoggle ? 'text-white' : 'text-black'} lg2:text-3xl lg1:text-2xl lg:text-2xl md:text-2xl xs:text-2xl`} />
                            </button>
                        </a>
                        <a href='https://github.com/gamexgaming1997' target="_blank" rel="noreferrer">
                            <button className='bg-transparent lg:h-[4vh] lg:w-[auto] xs:w-[11vw] sm:w-[auto] grid place-items-center'>
                                <FaGithub className={`xl:text-[2em] mr-[20px] ml-[20px] ${!colortoggle ? 'text-white' : 'text-black'} lg2:text-3xl lg1:text-2xl lg:text-2xl md:text-2xl xs:text-2xl`} />
                            </button>
                        </a>
                        <a href="mailto:ginodelavega1997@gmail.com" target="_blank" rel="noreferrer">
                            <button className='bg-transparent lg:h-[4vh] lg:w-[auto] xs:w-[11vw] sm:w-[auto] grid place-items-center'>
                                <FaTelegram className={`xl:text-[2em] mr-[20px] ml-[20px] ${!colortoggle ? 'text-white' : 'text-black'} lg2:text-3xl lg1:text-2xl lg:text-2xl md:text-2xl xs:text-2xl`} />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cover;