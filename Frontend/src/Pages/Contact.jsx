import React from 'react'
import contactImg from "../../assets/images/contact.png"
function Contact() {
    return (
        <>
            <div className=' h-screen p-8 bg-white'>
                <div className='pl-30'>
                    <div className='text-3xl font-semibold'>Contact XpertSwap</div>
                        <div className='text-[#3A3A3A] text-[20px]'>Have questions or facing issues? Let us know. We're here to help!</div>
                        </div>
                <div className="w-full  flex mb-1 justify-center gap-20 items-center">
                    {/* img */}
                    <div>
                    
                        <img className='' src={contactImg} alt="" />
                    </div>
                    {/*content*/}
                    <div>
                        <form className='w-[500px] shadow-xl/30 px-15 py-8 space-y-4 shadow-lg ' action="">

                            <div className='text-2xl font-semibold text-center'>Send us a Message</div>
                            <p className='text-center text-[#6E6E6E]'>We'll get back to you within 24 hours</p>
                            <div>
                                <label className="block mb-1" htmlFor="">Name</label>
                                <input className='w-full rounded-lg bg-gray-100 p-2' type="text" placeholder='Enter your name' />
                            </div>
                            <div>
                                <label className="block mb-1" htmlFor="">Email</label>
                                <input className='w-full rounded-lg bg-gray-100 p-2' type="email" placeholder='Brief description of your Inquiry' />
                            </div>
                            <div>
                                <label className="block mb-1" htmlFor="">Subject</label>
                                <input className='w-full rounded-lg bg-gray-100 p-2' type="text" placeholder='Enter your name' />
                            </div>
                            <div>
                                <label className="block mb-1" htmlFor="">Message</label>
                                <textarea className='bg-gray-100  w-full resize-none ' rows="5"name="" id="">

                                </textarea>
                            </div>
                            <div className='text-center'>
                                <button className='bg-[#1D4ED8] px-8 rounded-4xl font-semibold text-white p-2'>Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact