import Image from "next/image"
import Link from "next/link"

const Birthday = () => {
  return (
    <div className='p-4 bg-white rounded-lg 
    shadow-md text-sm flex flex-col gap-4'>
        {/* top */}
        <div className="flex items-center justify-between">
            <span className="text-gray-500">Birthdays</span>
            <Link href={"/"}
            className="text-blue-500 text-xs">
            See all</Link>
        </div>
        {/* User */}
        <div className="flex items-center justify-between">
            <div className="flex  items-center gap-4 ">
                <Image 
                alt=""
                width={40}
                height={40}
                src={"https://www.cse.iitk.ac.in/users/vishalsavarna/img/wlcm.png"}
                className="w-10 h-10 rounded-full object-cover">
                </Image>
                <span className="font-semibold">Vishal Bhaii</span>
            </div>
            <div className="flex gap-3 justify-end">
                <button className="bg-blue-500 text-white text-xs px-2 rounded-ml">
                    Celebrate 
                </button>
            </div>

        </div>

        {/* upcoming */}
        <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
            <Image src="/gift.png" alt="" width={24} height={24}/>
            <Link href="/" className="flex flex-col gap-1 text-xs">
                 <span className="text-gray-500 font-semibold ">
                    Upcoming Birthdays
                </span>
                <span className="text-gray-500 ">
                    See other 12 have upcoming birthdays
                </span>
            </Link>
        </div>
    </div>
  )
}

export default Birthday