import React from 'react';

// developer
import developer from '../../developer/developer';

// techstack 
import techstack from '../../developer/techstack';

// vector
import vector from '../../assets/vector/vector';

const Landingpage = ({ colortoggle, setColortoggle }) => {

    return (
        <div className={`${colortoggle ? 'bg-white' : 'bg-black'} h-[auto] w-[100vw] relative overflow-auto landing`}>

            {/* img */}
            <div className='h-[80vh] w-[100vw] mt-[30vh] grid items-center justify-center img-container'>
                <img src={developer.img} className='h-[70vh] img' alt='img' />
            </div>

            {/* about me */}
            <div className='h-[auto] w-[100vw] mt-[5vh] relative grid items-center justify-center text-left about'>
                <span className={`font-Oxygen font-bold text-[.7em] ${!colortoggle ? 'text-white' : 'text-black'} tracking-[5px] absolute label`}>
                    ABOUT
                </span>
                <div className='text-justify h-[auto] w-[auto] grid items-center'>
                    <span className={`font-Oxygen font-bold text-[2.5em] ${!colortoggle ? 'text-yellow-500' : 'text-yellow-500'} ml-[2vw] mt-[3vh]`}>
                        Hi, I'm Gino
                    </span>
                    <span className={`${!colortoggle ? 'text-white' : 'text-black'} ml-[2vw] font-Oxygen font-bold`}>
                        {developer.fullname}
                    </span>
                    <div className={`w-[auto] ${!colortoggle ? 'text-white' : 'text-black'} font-Oxygen leading-[200%] m-[2vw] text-[1.4em]`}>
                        Full-stack web developer and also an Instructor based in City of Malolos,Bulacan. <br />
                        I'm passionate in creating web applications with the latest technologies available in the market. <br />
                    </div>
                </div>
            </div>

            {/* Services */}
            <div className={`w-[full] h-[90vh] mt-[20vh] relative grid items-center justify-center services`}>
                <span className={`font-Oxygen font-bold text-[.7em] ${!colortoggle ? 'text-white' : 'text-black'} tracking-[5px] absolute label`}>
                    SERVICES
                </span>
                <div className={`h-[90vh] w-[70vw] relative flex flex-wrap flex-row items-center justify-around`}>
                    <span className={`text-[2.5em] font-Oxygen absolute ${!colortoggle ? 'text-white' : 'text-black'} top-0 mt-[2vh]`}>
                        What I <span className={`text-yellow-500`}>offer?</span>
                    </span>
                    {Object.keys(vector).map(state => {
                        return <div key={vector[state].label} className={`h-[38vh] w-[19vw] flex flex-wrap items-top justify-center text`}>
                            <img className='h-[18vh] mt-[5vh]' src={vector[state].svg} alt={vector[state].label} />
                            <h1 className={`font-Oxygen ${!colortoggle ? 'text-yellow-500' : 'text-black'} font-bold text-[1.1em]`}>
                                {vector[state].label}
                            </h1>
                            <span className={`font-Oxygen ${!colortoggle ? 'text-white' : 'text-black'} text-center`}>
                                {vector[state].description}
                            </span>
                        </div>
                    })}
                </div>
            </div>

            {/* Technologies using */}
            <div className='h-[70vh] w-[100vw] mt-[15vh] relative grid items-center justify-center technologies'>
                <span className={`font-Oxygen font-bold text-[.7em] ${!colortoggle ? 'text-white' : 'text-black'} tracking-[5px] absolute label`}>
                    TECHNOLOGIES
                </span>
                <span className={`font-Oxygen font-bold text-[2em] ${!colortoggle ? 'text-white' : 'text-black'} tracking-[5px]`}>
                    My <span className={`text-yellow-500`}>Skills</span>
                </span>
                <div type='input' className='h-[auto] w-[50vw] rounded-[20px] relative flex flex-wrap items-center justify-center'>
                    {Object.keys(techstack).map(tech => {
                        return <img className='h-[9.5vh] m-5 grayscale hover:grayscale-0 trasition duration-[.3s]' src={techstack[tech].svg} alt={techstack[tech].tech} key={techstack[tech].tech} />
                    })}
                </div>
            </div>

            {/* projects */}
            <div className='h-[auto] w-full mt-[30vh] relative grid items-center justify-center projects'>
                <span className={`font-Oxygen font-bold text-[.7em] ${!colortoggle ? 'text-white' : 'text-black'} tracking-[5px] z-10 absolute label`}>
                    PROJECTS
                </span>
                <div className='h-[100vh] w-[100vw] flex flex-wrap flex-col items-center justify-center projects-container'>
                    <div className='bg-blue-500 h-[80vh] w-[100vw] mt-[3vh] relative flex flex-row child-container'>
                        <button className='bg-[#3ce992] h-[80vh] w-[33.3vw] relative grid items-center justify-center overflow-hidden hover:w-[60vw] transition-all duration-[1s] ease-in-out child-container-1'>
                            <div className='h-[auto] w-[auto] grid items-center mt-[3vh] relative main-container'>
                                <div className='bg-nft h-[400px] w-[800px] bg-center bg-cover bg-no-repeat cover-container' />
                                <div className='h-[60px] w-[auto] relative flex items-center logo-container'>
                                    <div className='h-[30px] w-[30px] bg-gray-800 absolute right-0 rounded-[5px] grid place-items-center logo'>
                                        <img src={techstack[2].svg} alt='react' className='h-[17px]' />
                                    </div>
                                    <div className='h-[30px] w-[30px] bg-gray-800 absolute right-10 rounded-[5px] grid place-items-center logo'>
                                        <img src={techstack[4].svg} alt='react' className='h-[20px]' />
                                    </div>
                                </div>
                            </div>
                            <span className='font-Poppins text-[1.5em] absolute bottom-20 ml-[3vw] font-bold'>
                                NFT CARD
                            </span>
                            <span className='font-Oxygen text-[1.1rem] absolute bottom-12 ml-[3vw]'>
                                Front End Development
                            </span>
                        </button>
                        <button className='bg-[#d1b432] h-[80vh] w-[33.3vw] relative grid items-center justify-center overflow-hidden hover:w-[60vw] transition-all duration-[1s] ease-in-out child-container-1'>
                            <div className='h-[auto] w-[auto] grid items-center mt-[3vh] relative main-container'>
                                <div className='bg-portfolio h-[400px] w-[800px] bg-center bg-cover bg-no-repeat cover-container' />
                                <div className='h-[60px] w-[auto] relative flex items-center logo-container'>
                                    <div className='h-[30px] w-[30px] bg-gray-800 absolute right-0 rounded-[5px] grid place-items-center logo'>
                                        <img src={techstack[8].svg} alt='tailwind' className='h-[12px]' />
                                    </div>
                                    <div className='h-[30px] w-[30px] bg-gray-800 absolute right-10 rounded-[5px] grid place-items-center logo'>
                                        <img src={techstack[4].svg} alt='react' className='h-[20px]' />
                                    </div>
                                </div>
                            </div>
                            <span className='font-Poppins text-[1.5em] absolute bottom-20 ml-[3vw]'>
                                MY PORTFOLIO
                            </span>
                            <span className='font-Oxygen text-[1.1rem] absolute bottom-12 ml-[3vw]'>
                                Front End Development
                            </span>
                        </button>
                        <button className='bg-[#dbdfdb] h-[80vh] w-[33.3vw] relative grid items-center justify-center overflow-hidden hover:w-[60vw] transition-all duration-[1s] ease-in-out child-container-1'>
                            <div className='h-[auto] w-[auto] grid items-center mt-[3vh] relative main-container'>
                                <div className='bg-animefreak h-[400px] w-[800px] bg-center bg-cover bg-no-repeat cover-container' />
                                <div className='h-[60px] w-[auto] relative flex items-center logo-container'>
                                    <div className='h-[30px] w-[30px] bg-gray-800 absolute right-0 rounded-[5px] grid place-items-center logo'>
                                        <img src={techstack[2].svg} alt='react' className='h-[17px]' />
                                    </div>
                                    <div className='h-[30px] w-[30px] bg-gray-800 absolute right-10 rounded-[5px] grid place-items-center logo'>
                                        <img src={techstack[4].svg} alt='react' className='h-[20px]' />
                                    </div>
                                </div>
                            </div>
                            <span className='font-Poppins text-[1.5em] absolute bottom-20 ml-[3vw] font-bold'>
                                ANIMEFREAK
                            </span>
                            <span className='font-Oxygen text-[1.1rem] absolute bottom-12 ml-[3vw]'>
                                Front End Development
                            </span>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Landingpage;