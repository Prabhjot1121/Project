import React from 'react'

const Services = () => {
    return (
        <div id='services' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-4 py-16'>
                <p className='px-4 text-2xl text-[#5651e5] tracking-widest uppercase'>Services</p>
                <h2 className='px-4 py-4'>
                    Services I Can Provide
                </h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] hover:scale-110">
                        <div className='text-center'>
                            <h2>Web Development</h2>
                            <p>
                                responsive web development services using the MERN stack, covering both the frontend (Next.js) and backend (Node.js, Express.js) development
                            </p>
                        </div>
                    </div>

                    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] hover:scale-110">
                        <div className='text-center'>
                            <h2>API Development</h2>
                            <p>
                                Developing RESTful APIs to connect frontend and backend components, ensuring smooth communication and data flow

                            </p>
                        </div>
                    </div>

                    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] hover:scale-110">
                        <div className='text-center'>
                            <h2>Database Design & Integration</h2>
                            <p>
                                Database design and integration, especially using MongoDB, to efficiently store and retrieve data for web applications
                            </p>
                        </div>
                    </div>

                    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] hover:scale-110">
                        <div className='text-center'>
                            <h2>Deployment & Hosting</h2>
                            <p>
                                Deploying web applications to various hosting environments, including cloud platforms like Heroku or Vercel
                            </p>
                        </div>
                    </div>

                    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] hover:scale-110">
                        <div className='text-center'>
                            <h2>Web3.0</h2>
                            <p>
                                Proficient in blockchain and decentralized technologies, I specialize in creating Web3.0 solutions. My expertise includes DApp development, smart contract programming, and blockchain-based applications
                            </p>
                        </div>
                    </div>
                    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] hover:scale-110">
                        <div className='text-center'>
                            <h2>Smart Contract Development</h2>
                            <p>
                                Developing smart contracts using languages like Solidity (for Ethereum) or other blockchain platforms like Binance Smart Chain
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Services
