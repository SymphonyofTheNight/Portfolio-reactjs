import React from 'react';
import { RiGithubLine, RiDiscordLine } from 'react-icons/ri';

const LeftNav = () => {
    return (
        <div className='xs:hidden relative lg:grid h-[30vh] w-[5vw] left-[3vw] bottom-0 place-items-center leftnav'>
            <RiGithubLine className='text-white text-2xl absolute top-[0vh]' />
            <RiDiscordLine className='text-white text-2xl absolute top-[5vh]' />
            <div className='bg-white absolute h-[20vh] w-[2px] bottom-0' />
        </div>
    )
}

export default LeftNav;