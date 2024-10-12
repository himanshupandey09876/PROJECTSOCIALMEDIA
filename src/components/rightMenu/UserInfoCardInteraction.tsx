"use client"

import { switchBlock, switchFollow } from "@/lib/action"
import { useOptimistic, useState } from "react"

const UserInfoCardInteraction = (
    {
        
        userId,
        isUserBlocked,
        isFollowing,
        isFollowingSent
    }:{
       
        userId:string,
        isUserBlocked:boolean,
        isFollowing:boolean,
        isFollowingSent:boolean
    }
) => {
    const [userState,setUserState]=useState({
        blocked: isUserBlocked,
        following: isFollowing,
        followingSent: isFollowingSent
    })
    const follow=async ()=> {
        switchOptimisticState("follow");
        try {
            await switchFollow(userId);
        setUserState((prevState)=>({...prevState, 
            following:prevState.following && false,
             followingSent: !prevState.following && !prevState.followingSent ?true :false}))
            }
            catch(error) {
            console.error(error);
        }
    }
   const block=async ()=>{
    switchOptimisticState("block");
        try {
            await switchBlock(userId);
            setUserState((prevState)=>({...prevState, blocked:!prevState.blocked}))
            }
            catch(error) {
            console.error(error);
        }
 
   }
    const [optimisticState,switchOptimisticState]=useOptimistic(
        userState,
        (state,value :"follow" |"block")=>value=="follow" ?{
            ...state,
            following:state.following && false,
            followingSent: !state.following && !state.followingSent ? true :false,
        }:
        {
            ...state,
            blocked:!state.blocked
        }
    )
    
  return (
    <>
        <form action={follow}>
            <button className="w-full bg-blue-500 text-white text-sm rounded-md p-2">
                    {optimisticState.following ? 'Following':optimisticState.followingSent ?
                    "follow Request": "follow"}
            </button>
        </form>
        <form action={block} className="self-end">
            <button>
        <span className="text-red-400 self-end text-xs cursor-pointer">
            {optimisticState.blocked? "Unblock User" :"Block User"}
        </span>
        </button>
        </form>
    </>
  )
}

export default UserInfoCardInteraction