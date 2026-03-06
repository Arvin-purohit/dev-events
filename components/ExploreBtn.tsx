'use client'
import Image from 'next/image'
import React from 'react'

const ExploreBtn = () => {
  return (
    <div>
     <button type='button' id='explore-btn' className='mt -7 mx-auto' onClick={() => console.log('clicked button')}>
      <a href="#events">
        Explore Events 
        <Image src="icons/arrow-down.svg" alt="arrow-down" width={20} height={20} className='inline ml-2' />
      </a>
     </button>
    </div>
  )
}

export default ExploreBtn
