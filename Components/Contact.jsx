import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'

const Contact = () => {
    return (
        <div id='contact' className='w-full lg:h-screen'>
            <div className='relative max-w-[1240px] m-auto px-2 py-16 w-full '>
                <p className='px-4 text-2xl text-[#5651e5] tracking-widest uppercase' >Contact</p>
                <h2 className='px-4 py-4'>Get In Touch</h2>
                <div className='col-12'>
                    {/* left */}
                    <div className='lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                        <div className='lg:p-4 h-full'>
                            <div>
                                <Image
                                    className='rounded-xl hover:scale-105 ease-in duration-300'
                                    src="/contact.jpg"
                                    alt='/'
                                    width={250}
                                    height={300}
                                />
                                <div>
                                    <h2 className='py-2'>Prabhjot Singh</h2>
                                    <p>Full Stack Developer</p>
                                    <p className='py-4'>
                                        I am available for freelance or full-time positions. Contact
                                        me and let&apos;s talk.
                                    </p>
                                </div>
                                <div>
                                    <p className='uppercase pt-8'>Connect With Me</p>
                                    <div className='flex items-center justify-center gap-8 py-4'>
                                        <Link
                                            href='https://www.linkedin.com/in/prabhjot-singh-252b77261/'
                                            target='_blank'
                                            rel='noreferrer'
                                        >
                                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                                <FaLinkedinIn />
                                            </div>
                                        </Link>
                                        <Link
                                            href='https://github.com/Prabhjot1121'
                                            target='_blank'
                                            rel='noreferrer'
                                        >
                                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                                <FaGithub />
                                            </div>
                                        </Link>
                                        <Link
                                            href='https://www.instagram.com/prabh._ramgarhia_/'
                                            target='_blank'
                                            rel='noreferrer'
                                        >
                                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                                <FaInstagram />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* right */}
                    <div className='absolute bottom-0 right-0 h-16 w-16 '>
                        <div className='flex justify-center py-12 '>
                            <Link href='/'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <HiOutlineChevronDoubleUp
                                        className='text-[#5651e5]'
                                        size={30}
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Contact
