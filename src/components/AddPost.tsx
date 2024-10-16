import Image from "next/image"
import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";


const AddPost = () => {
    const {userId} =auth()
    console.log(userId)

    const testAction =async function(formData:FormData){
        "use server"
        if(!userId) return ;
        const desc=formData.get("desc") as string;
        try {
           const res=await prisma.post.create({
                data:{
                    userId:userId,
                    desc:desc,
                }
            });
            
            console.log(res);

        } catch (error) {
            console.log(error)
        }
    }


  return (
    <div className='p-4 bg-white rounded-lg flex shadow-md
     text-sm gap-4 justify-between'>
        {/* avatar */}
        <Image src='https://www.cse.iitk.ac.in/users/vishalsavarna/img/wlcm.png' 
        alt="" width={48} height={48}
         className="w-12 h-12 object-cover rounded-lg"></Image>
        {/* post */}
        <div className="flex-1">
            {/* textinput */}
            <form action={testAction} className="flex  gap-4 ">
                <textarea className="flex-1 bg-slate-100 rounded-lg"
                 placeholder="BOldo na ZARA.."
                 name="desc"></textarea>
                <Image src='/emoji.png'
                alt="" width={20} height={20}
                className="w-5 h-5 cursor-pointer self-end"></Image>
                <button>
                    Send
                </button>
            </form>
            {/* postoptions */}
            <div className="flex flex-wrap
                 item-center gap-4 mt-4 text-gray-400">
                <div className="flex items-center gap-2 cursor-pointer ">
                    <Image src='/addimage.png'
                    alt="" width={20} height={20}>
                    </Image>
                    PHOTO
                </div>
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