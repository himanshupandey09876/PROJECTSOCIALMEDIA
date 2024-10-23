import { auth } from "@clerk/nextjs/server";
import Post from "./Post"
import prisma from "@/lib/client";


const Feed = async({username}:{username?:string}) => {
  const {userId}=auth();

  let posts:any[]=[];

  if(username){
    posts =await prisma.post.findMany({
      where:{
        user:{
          username:username,
        }
      },
      include:{
        user:true,
        likes:{
          select:{
            userId:true,
          }
        },
        _count:{
          select:{
            comments: true,
          }
        }
      },
      orderBy: {
        created_at: "desc",
      },
    });
  }
  if(!username && userId){
    const following =await prisma.follower.findMany({
      where:{
        followerId: userId,
      },
      select:{
        followingId: true,
      }
    })
    // console.log(following);
    const followingIds= following.map(f=>f.followingId);
    const ids=[userId,...followingIds];
     posts = await prisma.post.findMany({
      where:{
        userId:{
          in: ids,
        },
      },
      include:{
        user:true,
        likes:{
          select:{
            userId:true,
          }
        },
        _count:{
          select:{
            comments: true,
          }
        }
      },
      orderBy: {
        created_at: "desc",
      },
    })
  }
  return (
    <div className='p-4 bg-white shadow-md rounded-lg
    flex flex-col gap-12'>
      {posts.length? (
        posts.map(post =>(
          <Post key={post.id} post={post}/>
        ))):"no posts found"
      }
        {/* <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post> */}
        
    </div>
  )
}

export default Feed