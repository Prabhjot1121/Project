import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <div id='about' className='w-full md:h-screen flex  item-center py-16 '>
      <div className=' max-w[1240px] m-auto md:grid grid-cols-3 gap-3 '>
        <div className='col-span-2'>
          <p className='px-4 text-2xl text-[#5651e5] tracking-widest'>
            ABOUT
          </p>
          <h2 className='px-4 py-4'>
            Who I Am
          </h2>
          <p className='px-4 py-2 text-gray-600'>
            I am a passionate Full Stack MERN (MongoDB, Express.js, React.js, Node.js) developer with a deep-rooted love for crafting digital experiences.
            With a strong foundation in both frontend and backend technologies, I specialize in creating scalable and responsive web applications that merge functionality with aesthetics. My expertise extends to database design, API development, user authentication, and seamless user experiences
          </p>
          <p className='px-4 py-2 text-gray-600'>
            Beyond coding, I am an advocate for clean and maintainable code, continuous improvement, and open communication. I believe in the power of technology to transform businesses and lives, and I am excited to contribute to the digital evolution through my work.
          </p>
          <p className='px-4 py-2 text-gray-600'>
            Lets connect and explore how we can embark on exciting web development projects together. Feel free to reach out via the contact information provided on this portfolio. Together, we can bring your visions to life in the digital world.
          </p>
        </div>
        <div className=' w-full h-auto m-auto shadow-xl rounded-xl shadow-gray-400 flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 '>
          <Image className='rounded-xl' src="/about.jpg" width={250} height={300} alt='about image' />
        </div>
      </div>
    </div>
  )
}

export default About
