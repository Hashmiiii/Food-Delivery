"use client"
import React, { useEffect, useState } from 'react'
import { MdDeliveryDining } from 'react-icons/md'
import { CgMenu } from "react-icons/cg";  // ✅ Import hamburger icon
import { Navlinks } from '../../../../constant/constants'
import Link from 'next/link'
import ThemeToggler from '@/components/Helper/ThemeToggler';

type Props={
    openNav:()=>void;
}

const Nav = ({openNav}:Props) => {
    const [navBg, setNaBag]=useState(false);
    useEffect(()=>{
        const handler =()=>{
            if(window.scrollY>=90) setNaBag(true);
            if(window.scrollY<90) setNaBag(false); 

        };

        window.addEventListener("scroll",handler);

        return ()=> window.removeEventListener('scroll',handler);

    },[]);

  return (
    <div className={`transition-all ${navBg? "bg-white dark:bg-gray-900  shadow-md":"fixed"} duration-200 h-[12vh] z-[100] fixed w-full`}>
        <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
            {/* LOGO */}

            <div className='flex items-center space-x-2'>
                <div className='w-10 h-10 bg-blue-950  dark:bg:white  rounded-full flex items-center justify-center flex-col'>
                    <MdDeliveryDining className='w-6 h-6 text-white'/>
                </div>
                <h1 className='text-xl hidden sm:block md:text-2xl text-black dark:text-white font-bold'>
                    Foodie
                </h1>
            </div>

            {/* Navlinks */}

            <div className='hidden lg:flex items-center space-x-10'>
                {Navlinks.map((link)=>{
                    return (
                          <Link
                            key={link.id}
                            href={link.url}
                            className='text-black dark:text-white hover:text-green-700 dark:hover:text-green-400 font-bold transition-all duration-200'
                            >
                                <p>{link.label}</p>
                            </Link>
                    );              
                })}
            </div>
            {/* buttons */}

            <div className='flex items-center space-x-4'>
                <button className='bg-blue-950 px-8 py-2.5 dark:bg-white  dark:text-black text-white dark:hover:bg-gray-200 font-bold  rounded-lg hover:bg-black 
                transition-all duration-300 cursor-pointer '>
                    Join Now
                </button>
            </div>
            <ThemeToggler/>

            {/* ✅ Hamburger menu (only visible on mobile) */}
          <CgMenu
            onClick={openNav}
            className="lg:hidden w-8 h-8 text-black cursor-pointer dark:text-white"
          />

        </div>
    </div>
  )
}

export default Nav