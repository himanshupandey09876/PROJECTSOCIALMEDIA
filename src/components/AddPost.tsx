"use client"
import Image from "next/image"
import { auth } from "@clerk/nextjs/server";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";
import AddPostButton from "./AddPostButton";
import { addPost } from "@/lib/action";


const AddPost = () => {
    // const {userId} =auth()
    const {user,isLoaded}=useUser();
    const [desc,setDesc]=useState("");
     const [img,setImg]=useState<any>()
    // console.log(user)
    if(!isLoaded) {
        return "Loading .... ... "
    }

    // const testAction =async function(formData:FormData){
    //     "use server"
    //     if(!userId) return ;
    //     const desc=formData.get("desc") as string;
    //     try {
    //        const res=await prisma.post.create({
    //             data:{
    //                 userId:userId,
    //                 desc:desc,
    //             }
    //         });
            
    //         console.log(res);

    //     } catch (error) {
    //         console.log(error)
    //     }
    // }


  return (
    <div className='p-4 bg-white rounded-lg flex shadow-md
     text-sm gap-4 justify-between'>
        {/* avatar */}
        <Image src={ user?.imageUrl ||'/noAvatar.png' }
        alt="" width={48} height={48}
         className="w-12 h-12 object-cover rounded-lg"></Image>
        {/* post */}
        <div className="flex-1">
            {/* textinput */}
            <form action={(formData)=>addPost(formData,img?.secure_url||"")} className="flex  gap-4 ">
                <textarea
                className="flex-1 bg-slate-100 rounded-lg"
                placeholder="BOldo na ZARA.."
                name="desc"
                onChange={(e)=>setDesc(e.target.value)}>
                 </textarea>
                     <div>
                <Image src='/emoji.png'
                alt="" width={20} height={20}
                className="w-5 h-5 cursor-pointer self-end"></Image>
                {/* <button>
                    Send
                    </button> */}
                <AddPostButton/>
                </div>
            </form>
            {/* postoptions */}
            <div className="flex flex-wrap
                 item-center gap-4 mt-4 text-gray-400">
                    <CldUploadWidget
            uploadPreset="hemanstaCloud"
            onSuccess={(result,{widget})=>{setImg(result.info)
                widget.close();
            }}>
              {({open})=>{
                return(
                    <div className="flex items-center gap-2 cursor-pointer "
                    onClick={()=>open()}>
                    <Image src='/addimage.png'
                    alt="" width={20} height={20}>
                    </Image>
                    PHOTO
                </div>

                )
              }}
            </CldUploadWidget>
                {/* <div className="flex items-center gap-2 cursor-pointer ">
                    <Image src='/addimage.png'
                    alt="" width={20} height={20}>
                    </Image>
                    PHOTO
                </div> */}
                <div className="flex items-center gap-2 cursor-pointer ">
                    <Image src='/addVideo.png'
                    alt="" width={20} height={20}>
                    </Image>
                    VIDEO
                </div>
                <div className="flex items-center gap-2 cursor-pointer ">
                    <Image src='/poll.png'
                    alt="" width={20} height={20}>
                    </Image>
                    POLL
                </div>
                <div className="flex items-center gap-2 cursor-pointer ">
                    <Image src='/addevent.png'
                    alt="" width={20} height={20}>
                    </Image>
                    EVENT
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddPost