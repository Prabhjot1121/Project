import React from 'react'
import Image from 'next/image'
const Skills = () => {
    return (
        <div id='skills' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full '>
                <p className='px-4 text-2xl text-[#5651e5] tracking-widest uppercase'>
                    Skills
                </p>
                <h2 className='px-4 py-4'>
                    What Can I Do
                </h2>
                <div className=' grid md:grid-cols-2 lg:grid-cols-4 gap-8 '>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className="m-auto">
                                <Image src="/skills/html.png" width={64} height={64} />
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className="m-auto">
                                <Image src="/skills/css.png" width={64} height={64} />
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <h3>CSS</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className="m-auto">
                                <Image src="/skills/javascript.png" width={64} height={64} />
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <h3>JAVASCRIPT</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className="m-auto">
                                <Image src="/skills/tailwind.png" width={64} height={64} />
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <h3>TAILWIND</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className="m-auto">
                                <Image src="/skills/nextjs.png" width={64} height={64} />
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <h3>NEXT.JS</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className="m-auto">
                                <Image src="/skills/node.png" width={64} height={64} />
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <h3>NODE .js</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className="m-auto">
                                <Image src="/skills/mongo.png" width={64} height={64} />
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <h3>MONGO DB</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className="m-auto">
                                <Image src="/skills/github1.png" width={64} height={64} />
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <h3>GITHUB</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Skills
