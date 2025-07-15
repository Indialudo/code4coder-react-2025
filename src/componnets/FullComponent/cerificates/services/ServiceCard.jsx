
const ServiceCard = ({text, desc, icon:Icon}) => {
  return (
    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
    <div className="flex h-full shadow-lg rounded-lg p-8 flex-col">
      <div className="flex mb-3 flex-col gap-3">
        <div className="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
          <Icon size={30} />
        </div>
        <h2 className="text-gray-900 text-lg title-font font-medium">
        {text}
        </h2>
      </div>
      <div className="flex-grow">
        <p className="leading-relaxed text-base">
         {desc}
        </p>
       
      </div>
    </div>
  </div>
  )
}

export default ServiceCard