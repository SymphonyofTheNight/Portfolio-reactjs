import React from 'react';
import { useState, useEffect } from 'react';

// img
import profile from '../../img/profile.jpg';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Landingpage = ({ ID }) => {

    return (
        <div className={ID}>
            <div className='imgContainer'>
                <img src={profile} className='img' alt='img' />
            </div>
        </div>
    )
}

export default Landingpage;