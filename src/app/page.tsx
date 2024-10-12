import AddPost from "@/components/AddPost"
import Feed from "@/components/feed/Feed"

import LeftMenu from "@/components/leftMenu/LeftMenu"
import RightMenu from "@/components/rightMenu/RightMenu"
import Stories from "@/components/Stories"

const Homepage = () => {
  return (
    <div className='flex gap-6 p-6'>
      {/* left */}
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="home"></LeftMenu>
      </div>

      {/* center */}
      <div className="w-full lg:w-[70%] xl:[w-50%]">
        <div className="flex flex-col gap-6">
          <Stories></Stories>
          <AddPost></AddPost>
          <Feed></Feed>
        </div>
      </div>

      {/* right */}
      <div className="hidden lg:block w-[30%]">
        <RightMenu></RightMenu>
      </div>


    </div>
  )
}

export default Homepage