import Image from "next/image"
import Comments from "./Comments"
import {  Post as PostType, User } from "@prisma/client";
import PostInteraction from "./PostInteraction";
import { Suspense } from "react";
import PostInfo from "./PostInfo";
import { auth } from "@clerk/nextjs/server";

type FeedPostType = PostType & {user:User} &{likes:[{userId:string}]} & {
  _count :{comments:number}
}

const Post = ({post}:{post:FeedPostType}) => {
    const {userId} = auth();
  return (
    <div className='flex flex-col gap-4'>
        {/* user */}
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Image className="w-10 h-10 rounded-full"
                alt=""
                width={40} height={40}
                src={post.user.avatar ||"/noAvatar.png"}>
                </Image>
                <span className="font-medium">
                    {post.user.name && post.user.surname 
                    ? post.user.name + " " + post.user.surname
                : post.user.username}
                </span>
            </div>
            {/* <Image src="/more.png" alt="" width={16} height={16}></Image> */}
            {userId===post.user.id && <PostInfo postId={post.id}/>}
        </div>
        {/* description */}
        <div className="flex flex-col gap-4">
            {post.img && <div className="w-full min-h-96 relative ">
                <Image 
                // src={""}
                src={post.img}
                alt=""
                fill
                className="object-cover rounded-md"></Image>
            </div>}
            <p>
                {post.desc}
            </p>
        </div>
        {/* interaction */}
        {/* <div className="flex items-center justify-between text-sm
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
                    <span className="text-gray-300">  <span className="hidden md:inline">Shares</span></span>
            </div> 
        </div> */}
        <Suspense fallback="Loading...">
        <PostInteraction postId={post.id} likes={post.likes.map((like)=>like.userId)}
            commentNumber={post._count.comments}/>
        </Suspense>
        <Suspense fallback="Loading...">
        <Comments postId={post.id}/>
        </Suspense>
    </div>
  )
}

export default Post