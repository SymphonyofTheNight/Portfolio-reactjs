import { useEffect, useState } from "react";
import React from 'react';

const RightNav = ({ colortoggle }) => {

    const [scrollcount, setScrollCount] = useState(0);
    const get_perpage_offset = document.body.scrollHeight / 4;

    useEffect(() => {
        const offset = () => setScrollCount(window.pageYOffset);
        window.addEventListener('scroll', offset);
    }, [])

    return (
        <div className={`xs:hidden relative lg:grid h-[35vh] w-[5vw] right-[3.5vw] bottom-0 place-items-center ${!colortoggle ? 'rightnav' : 'rightnav-v2'}`}>
            <div className={`bg-none absolute ${!colortoggle ? 'border-white' : 'border-black'} rounded
             ${scrollcount >= 0 && scrollcount <= get_perpage_offset * 1 ? 'border-r-[2px]' : 'border-r-[1px]'} 
             ${scrollcount >= 0 && scrollcount <= get_perpage_offset * 1 ? 'border-solid' : 'border-dotted'} 
             h-[auto] w-[2px] mb-[3px] bottom-[24vh] hrline-4`} />
            <div className={`bg-none absolute ${!colortoggle ? 'border-white' : 'border-black'} rounded 
             ${scrollcount >= get_perpage_offset * 1 && scrollcount <= get_perpage_offset * 2 ? 'border-r-[2px]' : 'border-r-[1px]'} 
             ${scrollcount >= get_perpage_offset * 1 && scrollcount <= get_perpage_offset * 2 ? 'border-solid' : 'border-dotted'} 
             h-[auto] w-[2px] mb-[2px] bottom-[16vh] hrline-3`} />
            <div className={`bg-none absolute ${!colortoggle ? 'border-white' : 'border-black'} rounded 
             ${scrollcount >= get_perpage_offset * 2 && scrollcount <= get_perpage_offset * 3 ? 'border-r-[2px]' : 'border-r-[1px]'} 
             ${scrollcount >= get_perpage_offset * 2 && scrollcount <= get_perpage_offset * 3 ? 'border-solid' : 'border-dotted'} 
             h-[auto] w-[2px] mb-[1px] bottom-[8vh] hrline-2`} />
            <div className={`bg-none absolute ${!colortoggle ? 'border-white' : 'border-black'} rounded 
             ${scrollcount >= get_perpage_offset * 3 && scrollcount <= get_perpage_offset * 4 ? 'border-r-[2px]' : 'border-r-[1px]'} 
             ${scrollcount >= get_perpage_offset * 3 && scrollcount <= get_perpage_offset * 4 ? 'border-solid' : 'border-dotted'} 
             h-[auto] w-[2px] bottom-[0vh] hrline-1`} />
        </div>
    )
}

export default RightNav;