import Image from "next/image"
import Comments from "./Comments"

const Post = () => {
  return (
    <div className='flex flex-col gap-4'>
        {/* user */}
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Image className="w-10 h-10 rounded-full"
                alt=""
                width={40} height={40}
                src={"https://www.cse.iitk.ac.in/users/vishalsavarna/img/wlcm.png"}>
                </Image>
                <span className="font-medium">VishalBHaii</span>
            </div>
            <Image src="/more.png" alt="" width={16} height={16}></Image>
        </div>
        {/* description */}
        <div className="flex flex-col gap-4">
            <div className="w-full min-h-96 relative ">
                <Image 
                // src={""}
                src={"https://images.pexels.com/photos/13791395/pexels-photo-13791395.jpeg?auto=compress&cs=tinysrgb&w=300"}
                alt=""
                fill
                className="object-cover rounded-md"></Image>
            </div>
            <p>vishal bhai congrats for your new
                ipad party kab de rhe ho
            </p>
        </div>
        {/* interaction */}
        <div className="flex items-center justify-between text-sm
        my-4">
            <div className="flex gap-8">
               <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                    <Image src="/like.png" alt=""
                    width={16} height={16}
                    className="cursor-pointer"/>
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-300">500k+ <span className="hidden md:inline">Likes</span></span>
                </div> 
                <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                    <Image src="/comment.png" alt=""
                    width={16} height={16}
                    className="cursor-pointer"/>
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-300">512 <span className="hidden md:inline">Comments</span></span>
                </div> 
            </div>
            <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                    <Image src="/share.png" alt=""
                    width={16} height={16}
                    className="cursor-pointer"/>
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-300">200 <span className="hidden md:inline">Shares</span></span>
            </div> 
        </div>
        <Comments/>
    </div>
  )
}

export default Post