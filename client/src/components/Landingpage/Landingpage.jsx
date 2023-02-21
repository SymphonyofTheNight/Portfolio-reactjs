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
            <div className='h-[70vh] w-[100vw] mt-[30vh] grid items-center justify-center img-container'>
                <img src={developer.img} className='h-[70vh] md:h-[60vh] img' alt='img' />
            </div>

            {/* about me */}
            <div className='h-[auto] w-[100vw] mt-[5vh] relative grid items-center justify-center text-left about'>
                <span className={`
                font-Oxygen 
                font-bold 
                xl:text-[.7em]
                lg1:text-[.6em]
                lg:text-[.6em]
                ${!colortoggle ? 'text-white' : 'text-black'} 
                tracking-[5px] 
                absolute
                label
                `}>
                    ABOUT
                </span>
                <div className='text-justify h-[auto] w-[auto] grid items-center'>
                    <span className={`
                    font-Oxygen 
                    font-bold 
                    xl:text-[2.5em] 
                    ${!colortoggle ? 'text-yellow-500' : 'text-yellow-500'} 
                    ml-[2vw] 
                    mt-[3vh] 
                    lg2:text-[2.2em]
                    lg1:text-3xl
                    lg:text-3xl
                    md:text-4xl
                    `}>
                        Hi, I'm Gino
                    </span>
                    <span className={`
                    ${!colortoggle ? 'text-white' : 'text-black'} 
                    ml-[2vw] 
                    font-Oxygen 
                    font-bold
                    md:text-[1.1em]
                    `}>
                        {developer.fullname}
                    </span>
                    <div className={`w-[auto] ${!colortoggle ? 'text-white' : 'text-black'} font-Oxygen leading-[200%] m-[2vw] xl:text-[1.4em] lg2:text-[1.3em] md:text-[1.1em] md:text-justify`}>
                        Full-stack web developer and also an Instructor based in City of Malolos,Bulacan. <br />
                        I'm passionate in creating web applications with the latest technologies available in the market. <br />
                    </div>
                </div>
            </div>

            {/* Services */}
            <div className={`w-[full] h-[90vh] md:h-[auto] mt-[20vh] relative grid items-center justify-center services`}>
                <span className={`
                font-Oxygen
                font-bold 
                xl:text-[.7em] 
                lg1:text-[.6em]
                lg:text-[.6em]
                ${!colortoggle ? 'text-white' : 'text-black'} 
                tracking-[5px] 
                absolute 
                label
                `}>
                    SERVICES
                </span>
                <div className={`xl:h-[90vh] lg2:h-[70vh] lg1:h-[70vh] lg:h-[60vh] md:h-[45vh] w-[70vw] md:w-[80vw] relative flex flex-wrap flex-row items-center justify-around`}>
                    <span className={`
                    xl:text-[2.5em] 
                    font-Oxygen 
                    absolute 
                    ${!colortoggle ? 'text-white' : 'text-black'} 
                    top-0 
                    mt-[2vh] 
                    lg2:text-[2.2em]
                    lg1:text-3xl
                    lg:text-3xl
                    md:text-4xl
                    `}>
                        What I <span className={`text-yellow-500`}>offer?</span>
                    </span>
                    {Object.keys(vector).map(state => {
                        return <div key={vector[state].label} className={`xl:h-[38vh] xl:w-[19vw] md:h-[28vh] md:w-[20vw] flex flex-wrap items-top justify-center text`}>
                            <img className='h-[18vh] xl:mt-[5vh] md:mt-[0vh]' src={vector[state].svg} alt={vector[state].label} />
                            <h1 className={`
                            font-Oxygen 
                            ${!colortoggle ? 'text-yellow-500' : 'text-black'} 
                            font-bold 
                            xl:text-[1.1em] 
                            lg2:text-base
                            lg1:text-sm
                            lg:text-[.7em]
                            md:text-[1.3em]
                            text-center
                            `}>
                                {vector[state].label}
                            </h1>
                            <span className={`
                            font-Oxygen 
                            ${!colortoggle ? 'text-white' : 'text-black'} 
                            text-center
                            lg1:text-[.9em]
                            lg:text-sm
                            md:text-[.9em]
                            `}>
                                {vector[state].description}
                            </span>
                        </div>
                    })}
                </div>
            </div>

            {/* Technologies using */}
            <div className='h-[70vh] md:h-[auto] w-[100vw] mt-[15vh] md:mt-[7vh] relative grid items-center justify-center technologies'>
                <span className={`
                  font-Oxygen
                  font-bold 
                  xl:text-[.7em] 
                  lg1:text-[.6em]
                  lg:text-[.6em]
                  ${!colortoggle ? 'text-white' : 'text-black'} 
                  tracking-[5px] 
                  absolute 
                  label
                `}>
                    TECHNOLOGIES
                </span>
                <span className={`
                font-Oxygen 
                font-bold 
                xl:text-[2em] 
                ${!colortoggle ? 'text-white' : 'text-black'} 
                tracking-[5px] 
                lg2:text-[1.8em]
                lg1:text-2xl
                lg:text-2xl
                md:text-4xl
                `}>
                    My <span className={`text-yellow-500`}>Skills</span>
                </span>
                <div type='input' className='
                h-[auto] 
                xl:w-[50vw] 
                lg2:w-[60vw] 
                lg1:w-[60vw] 
                lg:w-[60vw] 
                md:w-[80vw] 
                rounded-[20px] 
                relative 
                flex 
                flex-wrap 
                items-center 
                justify-center
                '>
                    {Object.keys(techstack).map(tech => {
                        return <img className='
                        xl:h-[9.5vh] 
                        lg2:h-[8.5vh] 
                        lg1:h-[8.5vh] 
                        lg:h-[6.5vh] 
                        md:h-[5vh] 
                        m-5 grayscale 
                        hover:grayscale-0 
                        trasition 
                        duration-[.3s]
                        ' src={techstack[tech].svg} alt={techstack[tech].tech} key={techstack[tech].tech} />
                    })}
                </div>
            </div>

            {/* unfinished reso md:1024 projects */}

            {/* projects */}
            <div className='h-[auto] w-full mt-[30vh] md:mt-[10vh] relative grid items-center justify-center projects'>
                <span className={`
                font-Oxygen 
                font-bold 
                xl:text-[.7em] 
                lg1:text-[.6em] 
                lg:text-[.6em] 
                ${!colortoggle ? 'text-white' : 'text-black'} 
                tracking-[5px] 
                z-10 
                absolute 
                label
                `}>
                    PROJECTS
                </span>
                <div className='xl:h-[100vh] md:h-[auto] w-[100vw] flex flex-wrap flex-col items-center justify-center projects-container'>
                    <div className='xl:h-[80vh] lg:h-[90vh] xl:w-[100vw] md:w-[100vw] mt-[3vh] relative flex lg:flex-row xs:flex-col child-container '>
                        <button className='bg-[#3ce992] 
                        xl:h-[80vh] 
                        xl:w-[33.3vw] 
                        lg2:w-[33.3vw] 
                        lg:h-[80vh]
                        lg:w-[33.3vw] 
                        md:w-[100vw] 
                        md:h-[50vh] 
                        relative 
                        grid 
                        items-center 
                        justify-center 
                        overflow-hidden 
                        lg:hover:w-[60vw] 
                        md:hover:w-[100vw]
                        transition-all 
                        duration-[1.5s] 
                        ease-in-out 
                        child-container-1
                        '>
                            <div className='h-[auto] w-[auto] grid items-center mt-[5vh] md:mt-[0vh] relative main-container'>
                                <div className='
                                bg-nft 
                                xl:h-[400px] 
                                xl:w-[800px] 
                                lg2:h-[340px] 
                                lg2:w-[690px] 
                                lg1:h-[270px] 
                                lg1:w-[565px] 
                                lg:h-[270px] 
                                lg:w-[535px]
                                md:h-[470px] 
                                md:w-[900px]
                                bg-center 
                                bg-cover 
                                bg-no-repeat 
                                cover-container
                                '/>
                                <div className='h-[60px] w-[auto] relative flex items-center logo-container'>
                                    <div className='
                                    xl:h-[30px]
                                    xl:w-[30px]
                                    lg1:h-[25px]
                                    lg1:w-[25px]
                                    lg:h-[25px]
                                    lg:w-[25px]
                                    md:h-[37px]
                                    md:w-[37px]
                                    bg-gray-800 
                                    absolute 
                                    right-0 
                                    rounded-[5px] 
                                    grid 
                                    place-items-center 
                                    logo
                                    '>
                                        <img src={techstack[2].svg} alt='sass' className='xl:h-[17px] lg1:h-[14px] lg:h-[14px] md:h-[19px]' />
                                    </div>
                                    <div className='
                                    xl:h-[30px] 
                                    xl:w-[30px] 
                                    lg1:h-[25px] 
                                    lg1:w-[25px]  
                                    lg:h-[25px] 
                                    lg:w-[25px]
                                    md:h-[37px]
                                    md:w-[37px]
                                    bg-gray-800 
                                    absolute 
                                    xl:right-10
                                    lg1:right-8
                                    lg:right-8
                                    md:right-12
                                    rounded-[5px] 
                                    grid 
                                    place-items-center 
                                    logo
                                    '>
                                        <img src={techstack[4].svg} alt='react' className='xl:h-[20px] lg1:h-[17px] lg:h-[17px] md:h-[25px]' />
                                    </div>
                                </div>
                            </div>
                            <a className='font-Poppins xl:text-[1.5em] lg2:text-1xl md:text-1xl absolute bottom-20 ml-[3vw] font-bold hover:text-black' href='https://ginodelavega.netlify.app/' target="_blank" rel="noreferrer">
                                NFT CARD
                            </a>
                            <span className='font-Oxygen xl:text-[1.1rem] lg2:text-base lg:text-[.9em] md:text-[1.1em] absolute bottom-12 ml-[3vw]'>
                                Front End Development
                            </span>
                        </button>
                        <button className='
                        bg-[#d1b432] 
                        xl:h-[80vh] 
                        xl:w-[33.3vw] 
                        md:w-[100vw] 
                        lg2:w-[33.3vw]
                        lg:h-[80vh]
                        lg1:w-[33.3vw] 
                        lg:w-[33.3vw] 
                        md:h-[50vh] 
                        relative 
                        grid 
                        items-center 
                        justify-center 
                        overflow-hidden 
                        lg:hover:w-[60vw] 
                        md:hover:w-[100vw] 
                        transition-all 
                        duration-[1.5s] 
                        ease-in-out 
                        child-container-1'>
                            <div className='h-[auto] w-[auto] grid items-center mt-[3vh] md:mt-[0vh] relative main-container'>
                                <div className='
                                bg-portfolio 
                                xl:h-[400px] 
                                xl:w-[800px] 
                                lg2:h-[340px] 
                                lg2:w-[690px] 
                                lg1:h-[270px] 
                                lg1:w-[565px]
                                lg:h-[270px] 
                                lg:w-[535px]
                                md:h-[470px] 
                                md:w-[900px]
                                bg-center 
                                bg-cover 
                                bg-no-repeat 
                                cover-container
                                '/>
                                <div className='h-[60px] w-[auto] relative flex items-center logo-container'>
                                    <div className='
                                    xl:h-[30px] 
                                    xl:w-[30px] 
                                    lg1:h-[25px] 
                                    lg1:w-[25px]
                                    lg:h-[25px]
                                    lg:w-[25px]
                                    md:h-[37px]
                                    md:w-[37px]
                                    bg-gray-800 
                                    absolute 
                                    right-0 
                                    rounded-[5px] 
                                    grid 
                                    place-items-center 
                                    logo
                                    '>
                                        <img src={techstack[8].svg} alt='tailwind' className='xl:h-[12px] lg1:h-[11px] lg:h-[11px] md:h-[17px]' />
                                    </div>
                                    <div className='
                                    xl:h-[30px] 
                                    xl:w-[30px] 
                                    lg1:h-[25px] 
                                    lg1:w-[25px]
                                    lg:h-[25px]
                                    lg:w-[25px]
                                    md:h-[37px]
                                    md:w-[37px]
                                    bg-gray-800 
                                    absolute 
                                    xl:right-10 
                                    lg1:right-8
                                    lg:right-8
                                    md:right-12
                                    rounded-[5px] 
                                    grid 
                                    place-items-center 
                                    logo
                                    '>
                                        <img src={techstack[4].svg} alt='react' className='xl:h-[20px] lg1:h-[17px] lg:h-[17px] md:h-[25px]' />
                                    </div>
                                </div>
                            </div>
                            <a className='font-Poppins xl:text-[1.5em] lg2:text-1xl md:text-1xl absolute bottom-20 ml-[3vw] hover:text-black' href='https://ginodelavega.netlify.app/' target="_blank" rel="noreferrer">
                                MY PORTFOLIO
                            </a>
                            <span className='font-Oxygen xl:text-[1.1rem] lg2:text-base lg:text-[.9em] md:text-[1.1em] absolute bottom-12 ml-[3vw]'>
                                Front End Development
                            </span>
                        </button>
                        <button className='
                        bg-[#dbdfdb] 
                        xl:h-[80vh] 
                        xl:w-[33.3vw] 
                        md:w-[100vw] 
                        lg2:w-[33.3vw]
                        lg:h-[80vh] 
                        lg1:w-[33.3vw] 
                        lg:w-[33.3vw] 
                        md:h-[50vh] 
                        relative 
                        grid 
                        items-center 
                        justify-center 
                        overflow-hidden 
                        lg:hover:w-[60vw] 
                        md:hover:w-[100vw] 
                        transition-all 
                        duration-[1.5s] 
                        ease-in-out 
                        child-container-1
                        '>
                            <div className='h-[auto] w-[auto] grid items-center mt-[3vh] md:mt-[0vh] relative main-container'>
                                <div className='
                                bg-animefreak 
                                xl:h-[400px] 
                                xl:w-[800px] 
                                lg2:h-[340px] 
                                lg2:w-[690px] 
                                lg1:h-[270px] 
                                lg1:w-[565px]
                                lg:h-[270px] 
                                lg:w-[535px]
                                md:h-[470px] 
                                md:w-[900px]
                                bg-center 
                                bg-cover 
                                bg-no-repeat 
                                cover-container
                                '/>
                                <div className='h-[60px] w-[auto] relative flex items-center logo-container'>
                                    <div className='
                                    xl:h-[30px] 
                                    xl:w-[30px] 
                                    lg1:h-[25px] 
                                    lg1:w-[25px]
                                    lg:h-[25px]
                                    lg:w-[25px]
                                    md:h-[37px]
                                    md:w-[37px]
                                    bg-gray-800 
                                    absolute 
                                    right-0 
                                    rounded-[5px] 
                                    grid 
                                    place-items-center 
                                    logo
                                    '>
                                        <img src={techstack[2].svg} alt='sass' className='xl:h-[17px] lg1:h-[14px] lg:h-[14px] md:h-[19px]' />
                                    </div>
                                    <div className='
                                    xl:h-[30px] 
                                    xl:w-[30px] 
                                    lg1:h-[25px] 
                                    lg1:w-[25px]
                                    lg:h-[25px]
                                    lg:w-[25px]
                                    md:h-[37px]
                                    md:w-[37px]  
                                    bg-gray-800 
                                    absolute 
                                    xl:right-10 
                                    lg1:right-8
                                    lg:right-8
                                    md:right-12
                                    rounded-[5px] 
                                    grid 
                                    place-items-center 
                                    logo'>
                                        <img src={techstack[4].svg} alt='react' className='xl:h-[20px] lg1:h-[17px] lg:h-[17px] md:h-[25px]' />
                                    </div>
                                </div>
                            </div>
                            <a className='font-Poppins xl:text-[1.5em] lg2:text-1xl md:text-1xl absolute bottom-20 ml-[3vw] font-bold hover:text-black' href='https://ginodelavega.netlify.app/' target="_blank" rel="noreferrer">
                                ANIMEFREAK
                            </a>
                            <span className='font-Oxygen xl:text-[1.1rem] lg2:text-base lg:text-[.9em] md:text-[1.1em] absolute bottom-12 ml-[3vw]'>
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