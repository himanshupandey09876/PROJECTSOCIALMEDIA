import Image from "next/image"
import Link from "next/link"

const UserInfoCard = ({userId}:{userId:string}) => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
        {/* top */}
        <div className="flex items-center justify-between font-medium gap-4">
            <span>User Information</span>
            <Link href={"/"}
            className="text-blue-500 text-xs">
            See all</Link>
        </div>
        {/* botoom */}
        <div className="flex flex-col gap-4 text-gray-500">
            <div className="flex items-center gap-2">
                <span className="text-xl text-black">
                    VISHAL 
                </span>
                <span className="text-sm">
                    @vishal
                </span>
            </div>
            <p>
                Vishal is a cool dude 69 .will 
                you be my v_______ne 
            </p>
            <div className="flex items-center gap-2">
                <Image
                src={"/map.png"}
                alt="" width={16} height={16}/>
                <span>AT  IIT KANPUR</span>
            </div>
            <div className="flex items-center gap-2">
                <Image
                src={"/work.png"}
                alt="" width={16} height={16}/>
                <span>Works at  <b>Microsoft</b></span>
            </div>
            <div className="flex items-center justify-between gap-4">
                <div className="flex gap-1 item-center">
                    <Image 
                    src={"/link.png"} alt=""
                    width={16} height={16}/>
                    <Link href={'hemanshupandey.netlify.app'}
                    className="text-blue-500 font-medium">
                        hemanshupandey
                    </Link>
                </div>
                <div className="flex gap-1 item-center">
                    <Image 
                    src={"/date.png"} alt=""
                    width={16} height={16}/>
                    <span>
                        Joined in Upcoming days
                    </span>
                </div>
            </div>
            <button className="bg-blue-500 text-white text-sm rounded-md p-2">
                Follow
            </button>
            <span className="text-red-400 self-end text-xs cursor-pointer">
                Block User
            </span>

        </div>
    </div>
  )
}

export default UserInfoCard