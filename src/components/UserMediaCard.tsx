import Image from "next/image"
import Link from "next/link"

const UserMediaCard = ({userId}:{userId:string}) => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
        {/* top */}
        <div className="flex items-center justify-between font-medium gap-4">
            <span>User Media</span>
            <Link href={"/"}
            className="text-blue-500 text-xs">
            See all</Link>
        </div>
        {/* bottom */}
        <div className="flex gap-2 justify-between flex-wrap">
            <div className="relative w-1/5 h-24 ">
                <Image src={"https://images.pexels.com/photos/19880213/pexels-photo-19880213/free-photo-of-sea-and-mountain-view-in-kotor-bay-in-montenegro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
                alt="" fill 
                className="object-cover rounded-md">

                </Image>
            </div>
            <div className="relative w-1/5 h-24 ">
                <Image src={"https://images.pexels.com/photos/19880213/pexels-photo-19880213/free-photo-of-sea-and-mountain-view-in-kotor-bay-in-montenegro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
                alt="" fill 
                className="object-cover rounded-md">

                </Image>
            </div>
            <div className="relative w-1/5 h-24 ">
                <Image src={"https://images.pexels.com/photos/19880213/pexels-photo-19880213/free-photo-of-sea-and-mountain-view-in-kotor-bay-in-montenegro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
                alt="" fill 
                className="object-cover rounded-md">

                </Image>
            </div>
            <div className="relative w-1/5 h-24 ">
                <Image src={"https://images.pexels.com/photos/19880213/pexels-photo-19880213/free-photo-of-sea-and-mountain-view-in-kotor-bay-in-montenegro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
                alt="" fill 
                className="object-cover rounded-md">

                </Image>
            </div>
            <div className="relative w-1/5 h-24 ">
                <Image src={"https://images.pexels.com/photos/19880213/pexels-photo-19880213/free-photo-of-sea-and-mountain-view-in-kotor-bay-in-montenegro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
                alt="" fill 
                className="object-cover rounded-md">

                </Image>
            </div>
            <div className="relative w-1/5 h-24 ">
                <Image src={"https://images.pexels.com/photos/19880213/pexels-photo-19880213/free-photo-of-sea-and-mountain-view-in-kotor-bay-in-montenegro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
                alt="" fill 
                className="object-cover rounded-md">

                </Image>
            </div>
            <div className="relative w-1/5 h-24 ">
                <Image src={"https://images.pexels.com/photos/19880213/pexels-photo-19880213/free-photo-of-sea-and-mountain-view-in-kotor-bay-in-montenegro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
                alt="" fill 
                className="object-cover rounded-md">

                </Image>
            </div>
            <div className="relative w-1/5 h-24 ">
                <Image src={"https://images.pexels.com/photos/19880213/pexels-photo-19880213/free-photo-of-sea-and-mountain-view-in-kotor-bay-in-montenegro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
                alt="" fill 
                className="object-cover rounded-md">

                </Image>
            </div>

        </div>

    </div>
  )
}

export default UserMediaCard