"use client"

import Link from "next/link";
import { useState } from "react";

const  MobileMenu =()=>{
    const [open,setIsOpen]=useState(false)
    return (
        <div className="md:hidden">
            <div className="flex flex-col gap-[4.5] 
            cursor-pointer"
            onClick={function(){
                setIsOpen((prev)=>!prev);
            }}>
                <div 
                className={`w-6 h-1 bg-blue-500 rounded-sm 
                ${open ? "rotate-45":"" 
                } origin-left ease-in-out duration-500`}></div>
                <div 
                className={`w-6 h-1 bg-blue-500 rounded-sm 
                ${open ? "opacity-0":"" 
                } ease-in-out duration-500`}></div>
                <div 
                className={`w-6 h-1 bg-blue-500 rounded-sm 
                ${open ? "-rotate-45":"" 
                } origin-left ease-in-out duration-500`}></div>
            </div>
            { open &&(
                <div className="
                absolute left-0 top-24 w-full h-[calc(100vh)-96]
                bg-white flex flex-col items-center justify-center gap-8
                font-medium text-xl z-10">
                    <Link href="/">Home</Link>
                    <Link href="/">Friends</Link>
                    <Link href="/">Groups</Link>
                    <Link href="/">Stories</Link>
                    <Link href="/">Login</Link>


                </div>
            )}
        </div>
    )
}

export default MobileMenu;