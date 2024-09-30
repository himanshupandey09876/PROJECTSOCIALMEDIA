import Image from "next/image"

const Ad = ({size}:{size:"sm"|"md" |"lg"}) => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm'>
        {/* top */}
        <div className="flex items-center justify-between text-gray-500 font-medium">
            <span >
                Sponsored Ads
            </span>
            <Image src={'/more.png'} alt="" width={16} height={16}/>

        </div>
        {/* bottom */}
        <div className={`flex flex-col mt-4 ${size==="sm" ?"gap-2" :"gap-4"}`}>
            <div className={`relative w-full ${size==="sm"? "h-24" : size==="md"? "h-36" :"h-48" }`}>
                <Image src={'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg'} 
                alt=""  fill className="object-cover"/>
            </div>
            <div>
                <Image 
                src={"https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg"}
                alt="" width={24} height={24} 
                className="rounded-full w-6 f-6 object-cover"/>
                <span className="text-blue-500 font-medium">Pandey Residencial Apartments</span>
            </div>
            <p className={size==="sm" ? "text-xs" :"text-sm"}>
                {size==="sm"?"Welcome to Pandey Apartments .A high quality living.":
                size==="md"?"Welcome to Pandey Apartments. A high-quality living, spacious, and elegant apartment.":"" }
            </p>
            <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">
                Learn More 
            </button> 

        </div>
    </div>
  )
}

export default Ad