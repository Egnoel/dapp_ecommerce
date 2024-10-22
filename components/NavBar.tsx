import Link from 'next/link'
import React from 'react'
import { Input } from "@/components/ui/input"
import { Heart, Search, ShoppingCart } from 'lucide-react'
import { ModeToggle } from './ModeToogle'



const NavBar = () => {
  return (
    <div className='px-20 flex flex-row items-center justify-between w-full py-8'>
        <h1>EXclusive</h1>
        <div className='flex flex-row gap-2 items-center'>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
            <Link href='/sign-up'>Sign Up</Link>
        </div>
        <div className='flex flex-row items-center gap-7'>
            <div className='flex flex-row items-center gap-2'>
                <Input className='rounded-xl  border-black border dark:border-white'/>
                <Search />
            </div>
            <Heart />
            <ShoppingCart />
            <div className='ml-4'>
            <ModeToggle />
            </div>
        </div>
    </div>
  )
}

export default NavBar