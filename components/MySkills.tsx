import { backEnd, frontEnd, othersTech } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorders'

const MySkills = () => {
  return (
    <div className='py-20' id='skills'>
        <h1 className='heading'>
            My
            <span className='text-purple'> Skills</span>
        </h1>
        <div className='w-full mt-12 flex flex-col justify-center items-center'>
            <div className='flex md:flex-row flex-col md:justify-center md:items-center w-full mb-6 gap-6'>
                <Button                     
                    duration={Math.floor(Math.random()*10000)+10000}
                    borderRadius='1.75rem'
                    className='flex-1 text-white border-neutral-200 dark:border-slate-800'
                >
                    <div className='flex flex-col lg:items-center p-3 py-6 md:p-5  gap-2 w-[31rem] lg:h-[18rem] h-[22rem]'>
                        <h2 className='text-3xl text-purple '>FrontEnd</h2>
                            <div className="w-[100%]  flex justify-center flex-wrap gap-2 px-4 py-2 lg:mt-3 border-gray-500  text-gray-300">                            
                                {frontEnd.map(({ name, logo }) => (
                                    <div key={name} className="flex items-center gap-2 px-4 py-2 border rounded-xl border-gray-500  text-gray-300">
                                        <img src={logo} alt={name} className="w-6 h-6" />
                                        <span className="text-lg font-medium">{name}</span>
                                    </div>
                                ))}
                            </div>
                    </div>
                </Button>
                <Button                     
                    duration={Math.floor(Math.random()*10000)+10000}
                    borderRadius='1.75rem'
                    className='flex-1 text-white border-neutral-200 dark:border-slate-800'
                >
                    <div className='flex flex-col lg:items-center p-3 py-6 md:p-5  gap-2 w-[31rem] lg:h-[18rem] h-[22rem]'>
                        <h2 className='text-3xl text-purple mb-5'>Backend</h2>
                            <div className="w-[100%] flex justify-center flex-wrap gap-2 px-4 py-2 lg:mt-3 border-gray-500  text-gray-300">                            
                                {backEnd.map(({ name, logo }) => (
                                    <div key={name} className="flex items-center gap-2 px-4 py-2 border rounded-xl border-gray-500  text-gray-300">
                                        <img src={logo} alt={name} className="w-6 h-6" />
                                        <span className="text-lg font-medium">{name}</span>
                                    </div>
                                ))}
                            </div>
                    </div>
                </Button>
            </div>
            <div className='flex justify-center w-full'>
                <Button                     
                    duration={Math.floor(Math.random()*10000)+10000}
                    borderRadius='1.75rem'
                    className='flex-1 text-white border-neutral-200 dark:border-slate-800 '
                >
                    <div className='flex flex-col lg:items-center p-3 py-6 md:p-5 gap-2 w-[31rem]  lg:h-[18rem] h-[22rem]'>
                        <h2 className='text-3xl text-purple mb-5'>Others</h2>
                            <div className="w-[100%] flex justify-center flex-wrap gap-2 px-4 py-2 lg:mt-3 border-gray-500  text-gray-300">                            
                                {othersTech.map(({ name, logo }) => (
                                    <div key={name} className="flex items-center gap-2 px-4 py-2 border rounded-xl border-gray-500  text-gray-300">
                                        <img src={logo} alt={name} className="w-6 h-6" />
                                        <span className="text-lg font-medium">{name}</span>
                                    </div>
                                ))}
                            </div>

                    </div>
                </Button>
            </div>
        </div>
    </div>
  )
}

export default MySkills