import React from 'react';

// api
import { TransportMSG } from '../../api/api.js';

const EmailModal = ({ toggleModal, setToggleModal }) => {

    const [email, setEmail] = React.useState({ Email: '', Message: '' });

    const HandleSubmit = (e) => {
        e.preventDefault();

        if (email.Email && email.Message === '') return alert('Cannot send with empty email and message');

        TransportMSG(email.Email, email.Message)

        setEmail({ ...email, Email: '', Message: '' })

        setToggleModal(state => !state)
    }

    return (
        <div className={`absolute bottom-0 left-0 h-[auto] w-[100vw] grid place-items-center z-20 p-3
        ${toggleModal ? 'opacity-1' : 'opacity-0'}
        ${toggleModal ? 'translate-y-[0px]' : 'translate-y-[100px]'}
        transition duration-[.2s] ease-in-out Modal`}>

            {/* form */}
            <form onSubmit={HandleSubmit}>
                <div className='bg-[#101010] relative h-auto w-[90vw] lg:w-[60vw] grid rounded-[5px]'>

                    {/* <button type='button'
                        className='grid place-items-center absolute top-3 right-[2vw] transition duration-500 ease-in-out'
                        onClick={() => setToggleModal(state => !state)}>
                        <FaTimes className='text-xl text-white' />
                    </button> */}

                    <div className='xs:h-[3.5vh] md:h-[40px] lg:h-[30px] xs:w-[90vw] lg:w-[60vw] flex items-center lg:items-end justify-start'>
                        <span className='font-Oxygen text-[.9em] text-white ml-[2vw]'>
                            Email:
                        </span>
                        <input value={email.Email} onChange={(e) => setEmail({ ...email, Email: e.target.value })} className='text-[.9em] ml-[2vw] ss:ml-[.5vw] bg-transparent text-white font-Oxygen outline-none p-1 xs:h-[2.5vh] md:h-[23px] xs:w-[80vw] lg:w-[56vw]' placeholder={email.Email} />
                    </div>

                    <div className='xs:h-[14vh] md:h-[160px] lg:h-[120px] lg1:h-auto xs:w-[90vw] lg:w-[60vw] flex flex-wrap flex-col justify-center gap-2'>
                        <span className='font-Oxygen text-[.9em] text-white ml-[2vw] w-auto'>
                            Message:
                        </span>
                        <textarea value={email.Message} onChange={(e) => setEmail({ ...email, Message: e.target.value })} className='text-[.9em] ml-[2vw] bg-[#212121] text-white font-Oxygen outline-none p-1 xs:h-[9vh] lg1:h-[10vh] xs:w-[86vw] lg:w-[56vw]' placeholder={email.Message} />
                    </div>

                    <div className='xs:h-[5vh] md:h-[50px] lg:h-[50px] xs:w-[90vw] lg:w-[60vw] flex items-center justify-start'>
                        <button type='submit' className='bg-[#212121] font-Oxygen text-[.9em] text-white ml-[2vw] mb-[.5em] lg1:mb-[0em] w-auto h-[4vh] md:h-[40px] lg:h-[35px] pl-2 pr-2'>
                            Send!
                        </button>
                        <button type='button' onClick={() => setToggleModal(state => !state)} className='bg-[#212121] marker:font-Oxygen text-[.9em] text-white ml-[1vw] ss:ml-[.5vw] lg:ml-[.2vw] mb-[.5em] lg1:mb-[0em] h-[4vh] md:h-[40px] lg:h-[35px] pl-2 pr-2'>
                            Close.
                        </button>
                    </div>

                </div>
            </form>

        </div>
    )
}

export default EmailModal;