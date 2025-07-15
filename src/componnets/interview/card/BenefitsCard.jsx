import React from 'react'

const BenefitsCard = ({title, desc}) => {
  return (
    <div className="md:w-1/2 p-4 lg:h-48 md:h-60 h-auto">
    <div className="border border-gray-200 h-full p-6 rounded-lg">
      
      <h2 className="text-xl text-gray-900 font-bold title-font mb-2">
        {title}
      </h2>
      <p className="leading-relaxed text-base">
        {desc}
      </p>
    </div>
  </div>
  )
}

export default BenefitsCard