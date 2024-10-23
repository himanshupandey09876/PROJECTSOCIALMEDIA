import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image"
import StoryList from "./StoryList";

const Stories = async() => {
  const{userId:currentUserId}=auth();
  if(!currentUserId) return null;
  const stories=await prisma.story.findMany({
    where:{
      expires_at:{gt: new Date()},
      OR:[ {
            user:{
              followers:{
                some:{
                  followerId:currentUserId,
                }
              }
            }
          },{
            userId:currentUserId,
          }
    ]
    },
    include: {
      user:true,
    }
  })

  return (
    <div className='p-4 bg-white rounded-lg shadow-md 
    overflow-scroll text-xs scrollbar-hide'>
        <div className="flex gap-8 w-max">

        <StoryList stories={stories} userId={currentUserId}/>


            {/* story */}
            {/* <div className="flex flex-col items-center 
             gap-2 cursor-pointer">
            <Image src={"https://www.cse.iitk.ac.in/users/vishalsavarna/img/wlcm.png"} 
            alt=""
            width={80} height={80}
            className="w-20 h-20 rounded-full ring-2"></Image>
            <span className="font-medium">Vishal</span>
            </div> */}
            {/* story */}
            {/* <div className="flex flex-col items-center 
             gap-2 cursor-pointer">
            <Image src={"https://www.cse.iitk.ac.in/users/vishalsavarna/img/wlcm.png"} 
            alt=""
            width={80} height={80}
            className="w-20 h-20 rounded-full ring-2"></Image>
            <span className="font-medium">Vishal</span>
            </div>story */}
            {/* <div className="flex flex-col items-center 
             gap-2 cursor-pointer">
            <Image src={"https://www.cse.iitk.ac.in/users/vishalsavarna/img/wlcm.png"} 
            alt=""
            width={80} height={80}
            className="w-20 h-20 rounded-full ring-2"></Image>
            <span className="font-medium">Vishal</span>
            </div>story */}
            {/* <div className="flex flex-col items-center 
             gap-2 cursor-pointer">
            <Image src={"https://www.cse.iitk.ac.in/users/vishalsavarna/img/wlcm.png"} 
            alt=""
            width={80} height={80}
            className="w-20 h-20 rounded-full ring-2"></Image>
            <span className="font-medium">Vishal</span>
            </div>story */}
            {/* <div className="flex flex-col items-center 
             gap-2 cursor-pointer">
            <Image src={"https://www.cse.iitk.ac.in/users/vishalsavarna/img/wlcm.png"} 
            alt=""
            width={80} height={80}
            className="w-20 h-20 rounded-full ring-2"></Image>
            <span className="font-medium">Vishal</span>
            </div>story */}
            {/* <div className="flex flex-col items-center 
             gap-2 cursor-pointer">
            <Image src={"https://www.cse.iitk.ac.in/users/vishalsavarna/img/wlcm.png"} 
            alt=""
            width={80} height={80}
            className="w-20 h-20 rounded-full ring-2"></Image>
            <span className="font-medium">Vishal</span>
            </div> */}
            {/* story */}
            {/* <div className="flex flex-col items-center 
             gap-2 cursor-pointer">
            <Image src={"https://www.cse.iitk.ac.in/users/vishalsavarna/img/wlcm.png"} 
            alt=""
            width={80} height={80}
            className="w-20 h-20 rounded-full ring-2"></Image>
            <span className="font-medium">Vishal</span>
            </div> */}
            {/* story */}
            {/* <div className="flex flex-col items-center 
             gap-2 cursor-pointer">
            <Image src={"https://www.cse.iitk.ac.in/users/vishalsavarna/img/wlcm.png"} 
            alt=""
            width={80} height={80}
            className="w-20 h-20 rounded-full ring-2"></Image>
            <span className="font-medium">Vishal</span>
            </div> */}
            {/* story */}
            {/* <div className="flex flex-col items-center 
             gap-2 cursor-pointer">
            <Image src={"https://www.cse.iitk.ac.in/users/vishalsavarna/img/wlcm.png"} 
            alt=""
            width={80} height={80}
            className="w-20 h-20 rounded-full ring-2"></Image>
            <span className="font-medium">Vishal</span>
            </div> */}
            {/* story */}
            {/* <div className="flex flex-col items-center 
             gap-2 cursor-pointer">
            <Image src={"https://www.cse.iitk.ac.in/users/vishalsavarna/img/wlcm.png"} 
            alt=""
            width={80} height={80}
            className="w-20 h-20 rounded-full ring-2"></Image>
            <span className="font-medium">Vishal</span>
            </div> */}
            {/* story */}
            {/* <div className="flex flex-col items-center 
             gap-2 cursor-pointer">
            <Image src={"https://www.cse.iitk.ac.in/users/vishalsavarna/img/wlcm.png"} 
            alt=""
            width={80} height={80}
            className="w-20 h-20 rounded-full ring-2"></Image>
            <span className="font-medium">Vishal</span>
            </div> */}
            {/* story */}
            {/* <div className="flex flex-col items-center 
             gap-2 cursor-pointer"> */}
            {/* <Image src={"https://www.cse.iitk.ac.in/users/vishalsavarna/img/wlcm.png"} 
            alt=""
            width={80} height={80}
            className="w-20 h-20 rounded-full ring-2"></Image>
            <span className="font-medium">Vishal</span>
            </div> */}
            {/* story */}
            {/* <div className="flex flex-col items-center 
             gap-2 cursor-pointer">
            <Image src={"https://www.cse.iitk.ac.in/users/vishalsavarna/img/wlcm.png"} 
            alt=""
            width={80} height={80}
            className="w-20 h-20 rounded-full ring-2"></Image>
            <span className="font-medium">Vishal</span>
            </div> */}


        </div>
    </div>
  )
}

export default Stories