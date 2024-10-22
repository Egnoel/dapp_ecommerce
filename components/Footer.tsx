import React from 'react'
import { Separator } from "@/components/ui/separator"
import { Input } from './ui/input'
import { Github, Globe, SendHorizontal } from 'lucide-react'

const Footer = () => {
  return (
    <div className='flex flex-col w-full items-center bg-black dark:bg-slate-950 px-20 mt-28'>
        <div className='flex flex-row py-12 text-white  justify-between w-full'>
            <div className='flex flex-col gap-2 '>
                <span className='font-bold text-lg'>Exclusive</span>
                <span className='font-semibold'>Subscribe</span>
                <span className='text-sm'>Get 10% off your first subscription</span>
                <div className='flex flex-row border border-slate-100 rounded h-9 items-center px-2'>
                    <Input type='email' placeholder='Enter your email' className='border-none' />
                    <SendHorizontal />
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <span className='font-bold text-lg'>Account</span>
                <span>My Account</span>
                <span>Login/Register</span>
                <span>Cart</span>
                <span>Wishlist</span>
                <span>Shop</span>
            </div>
            <div className='flex flex-col gap-2'>
                <span className='font-bold text-lg'>Quick Links</span>
                <span>Privacy Policy</span>
                <span>Terms of Use</span>
                <span>FAQ</span>
                <span>Contact</span>
            </div>
            <div className='flex flex-col gap-2 '>
                <span className='font-bold text-lg'>Socials</span>
                <div className='flex flex-row items-center gap-2'>
                    <span className=''>
                        <Github />
                    </span>
                    <span>
                        <Globe />
                    </span>
                </div>
            </div>
        </div>
        <Separator className='bg-slate-700' />
        <div className='flex items-center justify-center text-gray-500 py-2'>
            <span>All rigths reserved</span>
        </div>
    </div>
  )
}

export default Footer