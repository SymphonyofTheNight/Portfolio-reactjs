import React, { useRef } from 'react';
import { useEffect, useState } from 'react';
import { FaFacebook, FaGithub, FaTelegram } from 'react-icons/fa';
import * as Switch from '@radix-ui/react-switch';

const Cover = () => {

    const months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "October", "NOVEMBER", "DECEMBER"];

    const [scrollcount, setScrollCount] = useState(0);
    const [togglecolor, setToggleColor] = useState(false);

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
        <div className='Cover col-lg-12 m-0 p-0' ref={mainref}>
            <div className='top' ref={topref}>
                <div className='name-container'>
                    <span className='text-label'>
                        GINO D.V
                    </span>
                </div>
                <div className='toggle-container'>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Switch.Root className="SwitchRoot" id="airplane-mode">
                            <Switch.Thumb onClick={() => {
                                setToggleColor(state => !state)
                            }} className="SwitchThumb" />
                        </Switch.Root>
                    </div>
                </div>
            </div>
            <div className='middle'>
                <div className='left-container' ref={leftwingref}>
                    <div className='line' />
                </div>
                <div className='mid-container'>
                    <span className='text-label'>
                        FRONT END DEVELOPER <br />
                    </span>
                </div>
                <div className='right-container' ref={rightwingref}>
                    <div className='line' />
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