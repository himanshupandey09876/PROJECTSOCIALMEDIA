"use server"

import { auth } from "@clerk/nextjs/server";
import prisma from "./client";
import { z } from "zod";
import { revalidatePath } from "next/cache";
;

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

export const updateProfile = async (
    prevState:{success:boolean, error:boolean},
    payload:{formData:FormData,cover:string})=>{
        const {formData,cover} =payload;
    // const surname = formData.get("surname") as string
    const fields= Object.fromEntries(formData)
    const filteredFields =Object.fromEntries(
        Object.entries(fields).filter(([_,value])=>value !=="")
    )
    console.log(fields);
    const Profile =z.object ({
        cover:z.string().optional(),
        name:z.string().max(60).optional(),
        surname:z.string().max(60).optional(),
        description:z.string().max(255).optional(),
        City:z.string().max(60).optional(),
        school:z.string().max(60).optional(),
        work:z.string().max(60).optional(),
        website:z.string().max(60).optional()    
    })

    const validateFields=Profile.safeParse({cover,...filteredFields});

    if(!validateFields.success){
        // throw new Error(validateFields.error.message)
        console.log(validateFields.error.flatten().fieldErrors)
        // return "error occured not validated"
        return {success:false,error:true};
    }

    const {userId}=auth()
    if(!userId){
        // return "user not found";
        return {success:false,error:true};
    }
    try {
        await prisma.user.update({
            where:{
                id:userId,
            },
            data:validateFields.data,
    });
    return {success:true,error:false};
    } catch (error) {
        console.log("error from updateProfile server action ",error);
        return {success:false,error:true};
    }
}

export const switchLike=async(postId:number)=>{

    const {userId}=auth()
    if(!userId)  throw new Error("user is not authenticated in switchLike");
    try {
        const existingLike=await prisma.like.findFirst({
            where:{
                userId,
                postId,
            }
        })
        if(existingLike){
            await prisma.like.delete({
                where:{
                    id:existingLike.id,
                }
            })
        }else{
            await prisma.like.create({
                data:{
                    userId,
                    postId,
                }
            })
        }
    } catch (error) {
        console.log(error)
        throw new Error("Failed to switch like")
    }
}


export const addComment =async(postId:number ,desc:string)=>{
    const {userId} = auth();

    if(!userId) throw new Error("User is not authenticated in addComment");

    try {
        const createdComment =await prisma.comment.create({
            data:{
                userId,
                postId,
                desc
            },
            include:{
                user:true,
            }
        });
        return createdComment;
    } catch (error) {
        console.log("error inside the addCommentAction ",error);
        throw new Error("Failed to add comment inside the addCommentAction");
    }
}

export const addPost=async(formData:FormData,img:string)=>{
    const desc=formData.get("desc") as string;

    const Desc=z.string().min(1).max(255);
    const validateDesc=Desc.safeParse(desc);

    if(!validateDesc.success){
        // error message
        console.log("description is not validated inside Addpost action")
        return;
    }
    const {userId}=auth();
    if(!userId) throw new Error("user is not authenticated in AddPost")
    try {
        await prisma.post.create({
            data:{
                userId,
                desc:validateDesc.data,
                img,
            },
            include:{
                user:true,
            }
        })
        revalidatePath("/");
    } catch (error) {
        
    }
}

export const addStory=async(img:string)=>{

    const {userId}=auth();
    if(!userId) throw new Error("user is not authenticated in AddPost")
    try {
        const existingStory=await prisma.story.findFirst({
            where:{
                userId,
            },
        })
        if(existingStory) {
            await prisma.story.delete({
                where:{
                    id:existingStory.id,
                }
            })
        }
      const createdStory=  await prisma.story.create({
            data:{
                userId,
                expires_at: new Date(Date.now() +24*60*6*1000),
                img,
            },
            include:{
                user:true,
            }
        })
       return createdStory;
    } catch (error) {
        
    }
}

export const deletePost=async(postId:number)=>{
    const {userId}=auth();
    if(!userId) throw new Error("user is not authenticated in deletePost")
    try {
        await prisma.post.delete({
            where:{
                id:postId,
                userId,
            }
        })
        revalidatePath("/");
    } catch (error) {
        console.log("error occured in deletePost action ",error);
    }
}