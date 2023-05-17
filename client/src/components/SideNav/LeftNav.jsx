import React from 'react';
import { RiGithubLine, RiFacebookBoxLine } from 'react-icons/ri';


const location_github = () => {
    window.open('https://github.com/gamexgaming1997', '_blank');
}

const location_fb = () => {
    window.open('https://www.facebook.com/Crissaegrim1997', '_blank');
}

const LeftNav = ({ colortoggle }) => {
    return (
        <div className='xs:hidden relative lg:grid h-[30vh] w-[5vw] left-[3vw] bottom-0 place-items-center leftnav'>

            <button className='bg-blue-700 relative h-auto w-[5vw] flex items-center justify-center firstbtn' onClick={location_github}>
                <RiGithubLine className={`${!colortoggle ? 'text-white' : 'text-black'} text-2xl absolute top-[0vh]`} />
            </button>

            <button className='bg-blue-700 relative h-auto w-[5vw] flex items-center justify-center secondbtn' onClick={location_fb}>
                <RiFacebookBoxLine className={`${!colortoggle ? 'text-white' : 'text-black'} text-2xl absolute top-[0vh]`} />
            </button>

            <div className={`${!colortoggle ? 'bg-white' : 'bg-black'} absolute h-[20vh] w-[2px] bottom-0`} />

        </div>
    )
}

export default LeftNav;