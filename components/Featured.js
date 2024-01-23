import React from 'react'
import Image from 'next/image'
import { SwipeCarousel } from './Swiper'
export default function Featured() {
  return (
    <div className="w-full h-[80vh] background  flex flex-row flex-grid-2 bg-gray-200 bg-opacity-90">
        <SwipeCarousel/>
       
   </div>
  )
}
