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
                <Image src={'/ad.png'} alt="" width={320} height={200}/>
            </div>

        </div>
    </div>
  )
}

export default Ad