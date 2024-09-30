import Ad from "./Ad"
import Birthday from "./Birthday"
import FriendRequests from "./FriendRequests"
import UserInfoCard from "./UserInfoCard"
import UserMediaCard from "./UserMediaCard"

const RightMenu = ({userId}:{userId?:string}) => {
  return (
    <div className='flex flex-col gap-6'>
      {userId ?(
        <>
        <UserInfoCard userId={userId}></UserInfoCard>
        <UserMediaCard userId={userId}></UserMediaCard>
      </>):null} 
      <FriendRequests></FriendRequests>
      <Birthday></Birthday>
      <Ad size="md"></Ad>
    </div>
  )
}

export default RightMenu