import Feed from "@/components/Feed";
import LeftMenu from "@/components/LeftMenu";
import RightMenu from "@/components/RightMenu";
import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { notFound } from "next/navigation";

 const ProfilePage = async function({params}:{params:{username:string}}){
  const username = params.username;

    const user = await prisma.user.findFirst({
      where: {
        username: username,
      },
      include:{
        _count:{
          select:{
            followers: true,
            following: true,
            posts: true,
          }
        }
      }
    });
    if(!user) return notFound();

    const {userId:currentUserId} = auth();
    // taking userId from auth and assigning it to currentUserId

    let isBlocked;
    
    if(currentUserId ){
      const res= await prisma.block.findFirst({
        where:{
          blockerId: user.id,
          blockedId: currentUserId,
        }
      })
      if(res) isBlocked = true;
    } else{
      isBlocked = false;
    }


    return (
        <div className='flex gap-6 p-6'>
        {/* left */}
        <div className="hidden xl:block w-[20%]">
          <LeftMenu type="profile"></LeftMenu>
        </div>
  
        {/* center */}
        <div className="w-full lg:w-[70%] xl:[w-50%]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center justify-center">
                <div className="w-full h-64 relative ">
                    <Image src={"https://images.pexels.com/photos/7216335/pexels-photo-7216335.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"}
                    alt="" fill  
                    className="rounded-md object-cover"/>
                    <Image src={"https://www.cse.iitk.ac.in/users/vishalsavarna/img/wlcm.png"}
                    alt="" 
                    width={128}  height={128}
                    className="w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white object-cover"/>
                </div>
                <h1 className="mt-20 mb-4 text-2xl font-medium">
                    VISHAL KUMAR
                </h1>
                <div className="flex items-center justify-center gap-12 mb-4">
                        <div className="flex flex-col items-center">
                        <span className="font-medium">25 </span>
                        <span className="text-sm">Posts</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="font-medium">200k</span>
                        <span className="text-sm">Followers</span>
                  </div>
                        <div className="flex flex-col items-center">
                        <span className="font-medium">200</span>
                        <span className="text-sm">Following</span>
                    </div>
                </div>
            </div>
            <Feed></Feed>
          </div>
        </div>
  
        {/* right */}
        <div className="hidden lg:block w-[30%]">
          <RightMenu userId="userId234"></RightMenu>
        </div>
  
  
      </div>
    )
} 
export default ProfilePage;