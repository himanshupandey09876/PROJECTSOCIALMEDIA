"use client"
import Link from "next/link"
import MobileMenu from "./Mobilemenu"
import Image from "next/image"
import { ClerkLoaded, ClerkLoading ,UserButton} from "@clerk/nextjs"
import LoadingComponent from "./LoadingSpinner"
import { SignedIn, SignedOut } from "@clerk/clerk-react"
export const Navbar= function(){
    return (
        <div className="h-24 flex 
             items-center justify-between">
           {/* left */}
           <div className=" md:hidden lg:block w-[20%]">
                    <Link className="font-bold text-xl
                text-blue-600"
                    href="/">HemaNsTA</Link>
           </div>

           {/* center */}
            <div className="hidden md:flex w-[50%] text-sm items-center
            justify-between ">
                {/* Links */}
                <div className="flex gap-6 text-gray-600">
                    <Link className="flex gap-2 item-center"
                    href={"/"}>
                    <Image src={"/home.png"} alt="Homepage"
                    width={16} height={16}
                    className="w-4 h-4"></Image>
                    <span>Homepage</span>
                    </Link>
                    <Link className="flex gap-2 item-center"
                    href={"/"}>
                    <Image src={"/friends.png"} alt="Friends"
                    width={16} height={16}
                    className="w-4 h-4"></Image>
                    <span>Friends</span>
                    </Link>
                    <Link className="flex gap-2 item-center"
                    href={"/"}>
                    <Image src={"/stories.png"} alt="Stories"
                    width={16} height={16}
                    className="w-4 h-4"></Image>
                    <span>Stories</span>
                    </Link>
                </div>
                <div className="hiddent xl:flex p-2 bg-slate-100 items-center rounded-xl">
                    <input type="text" placeholder="search"
                    className=" bg-transparent  outline-none"/>
                    <Image src={"/search.png"} alt="" width={14} height={14} />
                </div>

           </div>

           {/* right */}
           <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
            <ClerkLoading>
                <LoadingComponent></LoadingComponent>
            </ClerkLoading>
            <ClerkLoaded>
                <SignedIn>
                    <div className="cursor-pointer">
                        <Image src={"/people.png"} alt="Profile"
                         width={20} height={20}
                         className="w-6 h-6 rounded-full"></Image>
                    </div>
                    <div className="cursor-pointer">
                        <Image src={"/messages.png"} alt="Profile"
                         width={20} height={20}
                         className="w-6 h-6 rounded-full"></Image>
                    </div>
                    <div className="cursor-pointer">
                        <Image src={"/notifications.png"} alt="Profile"
                         width={20} height={20}
                         className="w-6 h-6 rounded-full"></Image>
                    </div>
                    <UserButton></UserButton>
                </SignedIn>
                <SignedOut>
                    <div className="flex item-center gap-2 text-sm">
                        <Image src={"/login.png"} alt="" width={20} height={20}/>
                        <Link className="text-black"
                        href="/sign-in" >LOgin/Register</Link>
                    </div>
                </SignedOut>
            </ClerkLoaded>
            <MobileMenu></MobileMenu>
           </div>
        </div>
    )
}