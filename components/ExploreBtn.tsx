'use client'
import Image from 'next/image'
import React from 'react'
import posthog from 'posthog-js'

const ExploreBtn = () => {
  const handleClick = () => {
    console.log('clicked button')
    posthog.capture('explore_events_clicked')
  }

  return (
    <div>
     <button type='button' id='explore-btn' className='mt -7 mx-auto' onClick={handleClick}>
      <a href="#events">
        Explore Events 
        <Image src="icons/arrow-down.svg" alt="arrow-down" width={20} height={20} className='inline ml-2' />
      </a>
     </button>
    </div>
  )
}

export default ExploreBtn
