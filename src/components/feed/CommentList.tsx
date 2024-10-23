"use client"

import { addComment } from "@/lib/action";
import { useUser } from "@clerk/nextjs";
import {  Comment, User } from "@prisma/client"
import Image from "next/image"
import { useOptimistic, useState } from "react";

type CommentWithUser= Comment & {user:User};

const CommentList = ({comments,postId}:{comments:CommentWithUser[],postId:number}) => {
    const {user}=useUser();

    const [commentState,setCommentState] =useState(comments);
    const[desc,setDesc]=useState("");

    const add =async()=>{
        if(!user || !desc) return;

        addOptimisticComment({
            id:Math.random(),
            desc,
            created_at:new Date(Date.now()),
            userId:user.id,
            postId,
            user:{
                id:user.id,
                username:"Sending Please wait...",
                avatar: user.imageUrl ||"/noAvatar.png",
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
            const createdComment=await addComment(postId,desc);
            setCommentState((prev)=>[createdComment,...prev]);
        } catch (error) {
            
        }
    }

    const[optimisticComments,addOptimisticComment]=useOptimistic(
        commentState,
        (state,value:CommentWithUser)=>{
            return [value,...state]
        }
    )
  return (
    <>
    {user &&(<div className="flex items-center gap-4">
            <Image className="w-8 h-8 rounded-full"
            src={user.imageUrl||"/noAvatar.png"} 
            alt="" width={32} height={32}
            ></Image>
            <form action={add} className="flex-1 flex items-center justify-between
            bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
                <input className="bg-transparent outline-none flex-1" 
                type="text" placeholder="apne vichaar bole"
                onChange={e=>setDesc(e.target.value)}></input>
                <Image src={"/emoji.png"}
                alt="" width={16} height={16}
                className="cursor-pointer"/>
            </form>
        </div>)}
        {/* COmments list */}
        <div className="">
            {/* comment */}
            {optimisticComments.map(comment=>
            <div className="justify-between flex gap-4 mt-6"
            key={comment.id}>
                {/* avatAR */}
                <Image className="w-8 h-8 rounded-full"
                src={comment.user.avatar ||"noAvatar.png"} 
                alt="" width={40} height={40}
            ></Image>
                {/* description */}
            <div className="flex flex-col gap-2 flex-1">
                    <span className="font-medium">
                        {comment.user.name && comment.user.surname
                        ?comment.user.name + " " + comment.user.surname
                    : comment.user.username}
                    </span>
                    <p>
                        {comment.desc}
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

            </div>)}
        </div>
    </>
  )
}

export default CommentList  