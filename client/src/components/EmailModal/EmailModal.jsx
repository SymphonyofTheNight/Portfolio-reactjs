import React from 'react';

// api
import { TransportMSG } from '../../api/api.js';

const EmailModal = ({ toggleModal, setToggleModal }) => {

    const [email, setEmail] = React.useState({ Email: 'none', Message: 'none' });

    const HandleSubmit = (e) => {
        e.preventDefault();

        if (email.Email && email.Message === '') return alert('Cannot send with empty email and message');

        TransportMSG(email.Email, email.Message)

        setToggleModal(state => !state)
    }

    return (
        <div className={`absolute bottom-0 left-0 h-[auto] w-[100vw] grid place-items-center z-20 p-3
        ${toggleModal ? 'opacity-1' : 'opacity-0'}
        ${toggleModal ? 'translate-y-[0px]' : 'translate-y-[100px]'}
        transition duration-[.2s] ease-in-out Modal`}>

            {/* form */}
            <form onSubmit={HandleSubmit}>
                <div className='bg-[#111111] relative h-auto w-[90vw] grid'>

                    {/* <button type='button'
                        className='grid place-items-center absolute top-3 right-[2vw] transition duration-500 ease-in-out'
                        onClick={() => setToggleModal(state => !state)}>
                        <FaTimes className='text-xl text-white' />
                    </button> */}

                    <div className='xs:h-[3.5vh] xs:w-[90vw] flex items-end justify-start'>
                        <span className='font-Oxygen text-[.9em] text-white ml-[2vw]'>
                            Email:
                        </span>
                        <input onChange={(e) => setEmail({ ...email, Email: e.target.value })} className='ml-[2vw] bg-transparent text-white font-Oxygen outline-none p-1 xs:h-[2.5vh] xs:w-[80vw]' />
                    </div>

                    <div className='xs:h-[14vh] xs:w-[90vw] flex flex-wrap flex-col justify-center gap-2'>
                        <span className='font-Oxygen text-[.9em] text-white ml-[2vw] w-auto'>
                            Message:
                        </span>
                        <textarea onChange={(e) => setEmail({ ...email, Message: e.target.value })} className='ml-[2vw] bg-[#212121] text-white font-Oxygen outline-none p-1 xs:h-[9vh] xs:w-[86vw]' />
                    </div>

                    <div className='xs:h-[5vh] xs:w-[90vw] flex items-center justify-start'>
                        <button type='submit' className='bg-[#212121] p-2 font-Oxygen text-[.9em] text-white ml-[2vw] mb-[.5em]'>
                            Send!
                        </button>
                        <button type='button' onClick={() => setToggleModal(state => !state)} className='bg-[#212121] p-2 font-Oxygen text-[.9em] text-white ml-[2vw] mb-[.5em]'>
                            Close.
                        </button>
                    </div>

                </div>
            </form>

        </div>
    )
}

export default EmailModal;