import prisma from "@/lib/client"
import { auth } from "@clerk/nextjs/server"
import Image from "next/image"
import Link from "next/link"
import FriendRequestList from "./FriendRequestList"

const FriendRequests = async() => {


    const {userId}=auth()
    if(!userId) return null;

    const requests=await prisma.followRequest.findMany({
        where:{
            receiverId:userId,
        },
        include:{
            sender:true
        }
    })

    if(requests.length===0) return null;

  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm'>
        {/* top */}
        <div className="flex items-center justify-between font-medium gap-4">
            <span>Friend Requests</span>
            <Link href={"/"}
            className="text-blue-500 text-xs">
            See all</Link>
        </div>
        <FriendRequestList requests={requests}></FriendRequestList>
        {/* User */}
        {/* <div className="flex items-center justify-between">
            <div className="flex  items-center gap- ">
                <Image 
                alt=""
                width={40}
                height={40}
                src={"https://www.cse.iitk.ac.in/users/vishalsavarna/img/wlcm.png"}
                className="w-10 h-10 rounded-full object-cover">
                </Image>
                <span className="font-semibold">Vishal Bhaii</span>
            </div>
            <div className="flex gap-3 justify-end">
                <Image src={"/accept.png"} className="cursor-pointer"
                        alt="" width={20} height={20}/>
                <Image src={"/reject.png"} className="cursor-pointer"
                        alt="" width={20} height={20}/>
            </div>

        </div> */}
        {/* User */}
        {/* <div className="flex items-center justify-between">
            <div className="flex  items-center gap- ">
                <Image 
                alt=""
                width={40}
                height={40}
                src={"https://www.cse.iitk.ac.in/users/vishalsavarna/img/wlcm.png"}
                className="w-10 h-10 rounded-full object-cover">
                </Image>
                <span className="font-semibold">Vishal Bhaii</span>
            </div>
            <div className="flex gap-3 justify-end">
                <Image src={"/accept.png"} className="cursor-pointer"
                        alt="" width={20} height={20}/>
                <Image src={"/reject.png"} className="cursor-pointer"
                        alt="" width={20} height={20}/>
            </div>

        </div> */}
        {/* User */}
        {/* <div className="flex items-center justify-between">
            <div className="flex  items-center gap- ">
                <Image 
                alt=""
                width={40}
                height={40}
                src={"https://www.cse.iitk.ac.in/users/vishalsavarna/img/wlcm.png"}
                className="w-10 h-10 rounded-full object-cover">
                </Image>
                <span className="font-semibold">Vishal Bhaii</span>
            </div>
            <div className="flex gap-3 justify-end">
                <Image src={"/accept.png"} className="cursor-pointer"
                        alt="" width={20} height={20}/>
                <Image src={"/reject.png"} className="cursor-pointer"
                        alt="" width={20} height={20}/>
            </div>

        </div> */}
    </div>
  )
}

export default FriendRequests