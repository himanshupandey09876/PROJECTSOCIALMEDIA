import Image from "next/image"

const Comments = () => {
  return (
    <div className=''>
        {/* write */}
        <div className="flex items-center gap-4">
            <Image className="w-8 h-8 rounded-full"
            src={"https://images.pexels.com/photos/26793646/pexels-photo-26793646/free-photo-of-a-corgi-sitting-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
            alt="" width={32} height={32}
            ></Image>
            <div className="flex-1 flex items-center justify-between
            bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
                <input className="bg-transparent outline-none flex-1" 
                type="text" placeholder="apne vichaar bole"></input>
                <Image src={"/emoji.png"}
                alt="" width={16} height={16}
                className="cursor-pointer"/>
            </div>
        </div>
        {/* COmments list */}
        <div className="">
            {/* comment */}
            <div className="justify-between flex gap-4 mt-6">
                {/* avatAR */}
                <Image className="w-8 h-8 rounded-full"
                 src={"https://images.pexels.com/photos/26793646/pexels-photo-26793646/free-photo-of-a-corgi-sitting-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
                  alt="" width={40} height={40}
             ></Image>
                {/* description */}
              <div className="flex flex-col gap-2 flex-1">
                    <span className="font-medium">Vishal</span>
                    <p>kuchh toh comment krna hi tha 
                        toh kr diya
                    </p>
                    <div>
                     <div className="flex gap-8 items-center text-xs text-gray-500 mt-2">
                            <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                                <Image src="/like.png" alt=""
                                width={16} height={16 }
                                className="cursor-pointer"/>
                                <span className="text-gray-300">|</span>
                                <span className="text-gray-300">500k+ <span className="hidden md:inline">Likes</span></span>
                            </div> 
                            <div>Reply</div>
                        </div>
                       
                    </div>
                </div>
                
                {/* icon */}
                <Image src={"/more.png"} alt="" width={16} height={16}
                className="cursor-pointer w-4 h-4"></Image>

            </div>
        </div>
    </div>
  )
}

export default Comments