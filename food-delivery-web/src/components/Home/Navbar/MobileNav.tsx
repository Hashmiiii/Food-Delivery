import React from 'react'
import { Navlinks } from '../../../../constant/constants'
import Link from 'next/link'
import { CgClose } from 'react-icons/cg'


type Props={
    showNav:boolean;
    closeNav:()=>void;
}

const MobileNav = ({showNav,closeNav}:Props) => {

    const navOpen=showNav?'translate-x-0':'translate-x-[-100%]';

  return (
    <div>
        <div className={`fixed inset-0 transform ${navOpen} transition-all  duration-500 z-[1002] bg-black opacity-70 w-full h-screen`}>
        </div>
        <div className={`text-white fixed ${navOpen} justify-center flex flex-col h-full transform transition-all duration-500 delay-300 
        w-[80%] sm:w-[60%] bg-blue-950 space-y-6 z-[1050]`}>
            
            {Navlinks.map((link)=>{
                return <Link
                key={link.id}
                href={link.url}>
                    <p>{link.label}</p>
                </Link>
            })}
            {/* Closeicon */}
            <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6' />
        </div>
    </div>
  )
}

export default MobileNav