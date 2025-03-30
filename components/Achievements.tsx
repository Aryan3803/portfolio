import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { achievements } from '@/data'

const Achievements = () => {
  return (
    <div className='py-20' id='achievements'>
        <h1 className='heading'>
            Personal 
            <span className='text-purple'> Achievements</span>
        </h1>
        <div className='flex flex-col items-center mt-10'>
            <InfiniteMovingCards
                    items={achievements}
                    direction='right'
                    speed='slow'
                />
        </div>
        
    </div>
  )
}

export default Achievements