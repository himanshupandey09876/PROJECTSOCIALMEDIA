"use server"

import { auth } from "@clerk/nextjs/server";
import prisma from "./client";

export const switchFollow = async(userId:string) => {
    const {userId:currentUserId}=auth();
    if(!currentUserId) throw new Error("User is not authenticated")

    try {
        const existingFollow =await prisma.follower.findFirst({
            where:{
                followerId:currentUserId,
                followingId:userId,
            }
        })
        if(existingFollow) {
            await prisma.follower.delete({
                where:{
                    id:existingFollow.id
                }
            })
        }
        else {
            const existingFollowRequest =await prisma.followRequest.
            findFirst({
                where:{
                    senderId:currentUserId,
                    receiverId:userId,
                }
            })
            if(existingFollowRequest) {
                await prisma.followRequest.delete({
                    where:{
                        id:existingFollowRequest.id
                    }
                })
            }else{
                await prisma.followRequest.create({
                    data:{
                        senderId:currentUserId,
                        receiverId:userId,
                    }
                })
            }
        }
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch from follower")
    }

}

export const switchBlock=async (userId:string)=>{
    const {userId:currentUserId} = await auth();

    if(!currentUserId) {
        throw new Error("User is not authenticated");
    }

    try {
        const existingBlock = await prisma.block.findFirst({
            where:{
                blockerId: currentUserId,
                blockedId: userId,
            }
        })
        if(existingBlock) {
            await prisma.block.delete({
                where:{
                    id: existingBlock.id
                }
            })
        }
        else {
            await prisma.block.create({
                data:{
                    blockerId: currentUserId,
                    blockedId: userId,
                }
            })
        }
    }
    catch (error) {
        console.log(error);
        throw new Error("Failed to fetch from block");
    }
}

export const acceptFollowRequest = async (userId:string)=>{

    const {userId:currentUserId}=auth();

    if(!currentUserId) {
        throw new Error("User is not authenticated")
    }

    try{
        const existingFollowRequest = await prisma.followRequest.findFirst({
            where:{
                receiverId: currentUserId,
                senderId: userId,
            }
        })
        if(existingFollowRequest) {
            await prisma.followRequest.delete({
                where:{
                    id: existingFollowRequest.id
                }
            })
            await prisma.follower.create({
                data:{
                    followerId: existingFollowRequest.senderId,
                    followingId: existingFollowRequest.receiverId,
                }
            })
        }
    }
    catch(error){
        console.log(error);
        throw new Error("Failed to accept follow request")
    }
}

export const declineFollowRequest = async (userId:string)=>{
    const {userId:currentUserId}=auth();

    if(!currentUserId) {
        throw new Error("User is not authenticated")
    }

    try{
        const existingFollowRequest = await prisma.followRequest.findFirst({
            where:{
                receiverId: currentUserId,
                senderId: userId,
            }
        })
        if(existingFollowRequest) {
            await prisma.followRequest.delete({
                where:{
                    id: existingFollowRequest.id
                }
            })
        }
    }
    catch(error){
        console.log(error);
        throw new Error("Failed to decline follow request")
    }
}