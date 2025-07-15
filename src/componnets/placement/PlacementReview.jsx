import React from 'react'
import DoubleSlider from './sliders/DoubleSlider'

const PlacementReview = () => {
  return (
    <section className="bg-gradient-to-r to-black from-[#0b0b3e] box-border  py-5 overflow-x-hidden">
    <div className="px-0 mx-auto">
      <div className="container md:px-5 px-2">
      <h3 className="text-2xl lg:text-5xl text-center md:text-4xl sm:text-3xl  font-bold title-font mb-4 text-gray-50 capitalize">
      Hear straight from our <span className='bg-darkyellow px-2'> students </span>
      </h3>
      </div>
        <DoubleSlider />
    </div>
    </section>
  )
}

export default PlacementReview