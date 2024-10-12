import { User } from "@prisma/client"
import Ad from "../Ad"
import Birthday from "./Birthday"
import FriendRequests from "./FriendRequests"
import UserInfoCard from "./UserInfoCard"
import UserMediaCard from "./UserMediaCard"
import { Suspense } from "react"


const RightMenu = ({user}:{user?: User}) => {
  return (
    <div className='flex flex-col gap-6'>
      {user ?(
        <>
        <Suspense fallback="ZARA THAHRO... | LOADING...">
        <UserInfoCard user={user}></UserInfoCard>
        </Suspense>
        <Suspense fallback="ZARA THAHRO... | LOADING...">
        <UserMediaCard user={user}></UserMediaCard>   
        </Suspense>
      </>): null } 
      <FriendRequests></FriendRequests>
      <Birthday></Birthday>
      <Ad size="md"></Ad>
    </div>
  )
}

export default RightMenu