import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

const page = () => {
  return (
    <div className='px-20 flex flex-col mt-7 gap-6'>
        <div className='flex flex-row justify-between'>
            <div className='flex flex-row gap-2 text-gray-400'>
                <span>home</span>
                <span>/</span>
                <span className='text-black dark:text-white'>cart</span>
            </div>
            <div className='flex flex-row gap-1'>
                <span>Welcome!</span>
                <span className='text-red-500'>Md Rimel</span>
            </div>
        </div>
        <div className='w-full flex flex-row gap-12 mt-8'>
            <div className='w-[20%] flex flex-col'>
                <div className='flex flex-col gap-4'>
                    <span className='font-bold text-lg'>Manage My Account</span>
                    <span className='text-red-500 ml-3'>My Profile</span>
                    <span className='text-gray-400 ml-3'>Address Book</span>
                    <span className='text-gray-400 ml-3'>My Payment Options</span>
                </div>
                <div className='flex flex-col gap-4'>
                    <span className='font-bold text-lg'>My Orders</span>
                    <span className='text-gray-400 ml-3'>Address Book</span>
                    <span className='text-gray-400 ml-3'>My Payment Options</span>
                </div>
                <span className='font-bold text-lg'>My WishList</span>
            </div>
            <div className='w-[80%] flex flex-col shadow dark:shadow-white px-16 py-11 gap-6'>
                <span className='text-red-500 text-lg'>Edit Your Profile</span>
                <div className='flex flex-col gap-3'>
                    <div className='flex flex-row justify-between'>
                        <div className='flex flex-col'>
                            <Label htmlFor='Firstname'>First Name</Label>
                            <Input type='text' id='Firstname' className='rounded border-gray-300' />
                        </div>
                        <div className='flex flex-col'>
                            <Label htmlFor='Lastname'>Last Name</Label>
                            <Input type='text' id='Lastname' className='rounded border-gray-300' />
                        </div>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <div className='flex flex-col'>
                            <Label htmlFor='email'>Email</Label>
                            <Input type='email' id='email' className='rounded border-gray-300' />
                        </div>
                        <div className='flex flex-col'>
                            <Label htmlFor='address'>Address</Label>
                            <Input type='text' id='address' className='rounded border-gray-300' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <span>Password Changes</span>
                        <Input type='password' placeholder='Current Password' className='rounded border-gray-300' />
                        <Input type='password' placeholder='New Password' className='rounded border-gray-300' />
                        <Input type='password' placeholder='Confirm New Password' className='rounded border-gray-300' />
                    </div>
                </div>
                <div className='flex flex-row items-center justify-end'>
                    <Button>Cancel</Button>
                    <Button className='bg-red-500 flex items-center justify-center p-4 rounded hover:bg-red-400'>Save Changes</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page