import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center py-[100px]'>
      <div className='max-w-[1240px] w-full h-screen mx-auto p-2 flex justify-center' >
        <div>
          <p className=' uppercase text-sm text-gray-600 tracking-widest '>LET'S BUILT SOMETHING TOGETHER</p>
          <h1 className=' py-4 text-gray-700 '>
            HEY I'm <span className=' text-[#5651e5] '>PRABHJOT</span>
          </h1>
          <h1 className=' py-2 text-gray-700 '>
            A Full Stack Developer
          </h1>
          <p className=' py-4 text-gray-600 max-w-[70%] m-auto'>
            I'm, a passionate and dedicated Full Stack Developer with expertise in the MERN stack. With a strong foundation in web development, I specialize in creating robust and dynamic web applications that provide seamless user experiences.My expertise lies in the MERN stack, which stands for MongoDB, Express.js, Next.js, and Node.js. These technologies enable me to build scalable and responsive applications from the ground up
          </p>
          <div className='flex items-center justify-center gap-4 max-w[330px] m-auto py-4'>
            <Link
              href='https://www.linkedin.com/in/prabhjot-singh-252b77261/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                <FaLinkedin />
              </div>
            </Link>
            <Link
              href='https://github.com/Prabhjot1121'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                <FaGithub />
              </div>
            </Link >
            <Link
              href='https://www.instagram.com/prabh._ramgarhia_/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                <FaInstagram />
              </div>
            </Link>
            <Link
              href='https://www.instagram.com/prabh._ramgarhia_/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                <FaFacebook />
              </div>
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Main
