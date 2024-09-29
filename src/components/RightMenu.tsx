import Ad from "./Ad"
import Birthday from "./Birthday"
import FriendRequests from "./FriendRequests"

const RightMenu = ({userId}:{userId?:string}) => {
  return (
    <div className='flex flex-col gap-6'>
      <FriendRequests></FriendRequests>
      <Birthday></Birthday>
      <Ad size="md"></Ad>
    </div>
  )
}

export default RightMenu