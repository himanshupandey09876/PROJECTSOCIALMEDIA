"use client"

import { addStory } from "@/lib/action";
import { useUser } from "@clerk/nextjs";
import { Story, User } from "@prisma/client"
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useOptimistic, useState } from "react";

type StoryWithUser = Story & {
    user:User
};
const StoryList = (
{    stories,userId
  }:{
        stories:StoryWithUser[],userId:string
        
    }
) => {
    const [storyList,setStoryList] =useState(stories);
    const [img , setImg] = useState<any>()
    const{user,isLoaded}=useUser()


    const add=async () => {
        if(!img?.secure_url) return ;

        addOptimisticStories({
            id:Math.random(),
            img:img.secure_url,
            created_at:new Date(Date.now()),
            userId:userId,
            expires_at:new Date(Date.now()+24*60*60*1000),
            user:{
                id:userId,
                username:"Sending ...",
                avatar: user?.imageUrl ||"/noAvatar.png",
                name:"",
                cover:"",
                description:"",
                surname:"",
                city:"",
                work:"",
                school:"",
                website:"",
                created_at:new Date(Date.now()),
            }
        });

        try {
            const createdStory=await addStory(img.secure_url);
            setStoryList((prev)=>[createdStory!,...prev]);
            setImg(null);

        } catch (error) {
            
        }

    }
    const [optimisticStories,addOptimisticStories]=useOptimistic(storyList,
        (state,value:StoryWithUser)=>{
            return [value,...state] 
        }
    )
    
  return (
    <>   <CldUploadWidget
    uploadPreset="hemanstaCloud"
    onSuccess={(result,{widget})=>{setImg(result.info)
        widget.close();
    }}>
      {({open})=>{
        return(
            <div  
            className="flex flex-col items-center 
            gap-2 cursor-pointer relative" >
           <Image src={img?.secure_url||"/noAvatar.png"} 
           alt=""
           width={80} height={80}
           className="w-20 h-20 rounded-full ring-2 object-cover"
           onClick={()=>open()}></Image>
           {img ?(
            <form action={add}>
                <button className="text-xs bg-blue-500 p-1 rounded-md text-white">
                    Send
                </button>
            </form>
           ) :(<span className="font-medium">
            Add a Story
            </span>)}
           <div className="absolute text-6xl text-gray-200 top-1 ">
            +
           </div>
           </div>

        )
      }}
    </CldUploadWidget>
         {/* story */}
         {optimisticStories.map(story=>(
         <div className="flex flex-col items-center 
             gap-2 cursor-pointer" key={story.id}>
            <Image src={story.user.avatar||"/noAvatar.png"} 
            alt=""
            width={80} height={80}
            className="w-20 h-20 rounded-full ring-2"></Image>
            <span className="font-medium">{story.user.name ||story.user.username}</span>
            </div>
        ))}
    </>
  )
}

export default StoryList