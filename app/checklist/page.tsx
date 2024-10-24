import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import Image from 'next/image';
import React from 'react'

const page = () => {
    const products =[
        {
            id: 1,
            name: "Monitor",
            image: "/monitor.png",
            price: 650,
        },
        {
            id: 2,
            name: "Gamepad",
            image: "/gamepad.png",
            price: 550,
        }
    ];
  return (
    <div className='px-20 flex flex-col mt-7 gap-6'>
        <div className='flex flex-row gap-2 text-gray-400'>
            <span>Account</span>
            <span>/</span>
            <span>My Account</span>
            <span>/</span>
            <span>Product</span>
            <span>/</span>
            <span>View Cart</span>
            <span>/</span>
            <span className='text-black dark:text-white'>CheckOut</span>
        </div>
        <div className='flex flex-col gap-3 mt-8'>
            <h1 className='font-bold text-2xl'>Billing Address</h1>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col'>
                        <label htmlFor="">First Name <span className='text-red-500'>*</span></label>
                        <Input type='text' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="">Company Name</label>
                        <Input type='text' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="">Street Address <span className='text-red-500'>*</span></label>
                        <Input type='text' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="">Apartment, Floor, etc (Optional)</label>
                        <Input type='text' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="">Town/City <span className='text-red-500'>*</span></label>
                        <Input type='text' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="">Phone Number <span className='text-red-500'>*</span></label>
                        <Input type='text' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="">Email <span className='text-red-500'>*</span></label>
                        <Input type='email' />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Save this information for faster check-out next time
                        </label>
                    </div>
                </div>
                <div className='flex flex-col gap-3 w-[300px]'>
                        {products.map(product => (
                            <div key={product.id} className='flex flex-row justify-between'>
                                <div className='flex flex-row gap-2 items-center'>
                                    <Image src={product.image} alt={product.name} width={50} height={50} className='object-cover' />
                                    <span>{product.name}</span>
                                </div>
                                <div className=''>
                                    <span>${product.price.toFixed(2)}</span>
                                </div>
                            </div>
                         ))}
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-row justify-between border-b border-gray-200'>
                            <span>Subtotal:</span>
                            <span>
                                {products.reduce((acc, curr) => acc + (curr.price * ( 1)), 0).toFixed(2)}
                            </span>
                        </div>
                        <div className='flex flex-row justify-between border-b border-gray-200'>
                            <span>Shipping:</span>
                            <span>
                                Free
                            </span>
                        </div>
                        <div className='flex flex-row justify-between'>
                            <span>Total:</span>
                            <span>
                                {products.reduce((acc, curr) => acc + (curr.price * ( 1)), 0).toFixed(2)}
                            </span>
                        </div>
                    </div>
                    <RadioGroup defaultValue="option-two">
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-row items-center space-x-2">
                                <RadioGroupItem value="option-one" id="option-one" />
                                <Label htmlFor="option-one">Bank</Label>
                            </div>
                            <div className='flex flex-row items-center gap-2'>
                                <Image src="/mastercard.png" alt="Mastercard" width={15} height={15} />
                                <Image src="/visa.png" alt="Visa" width={15} height={15} />
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-two" id="option-two" />
                            <Label htmlFor="option-two">Cash And Delivery</Label>
                        </div>
                    </RadioGroup>
                    <div className='flex flex-row gap-2'>
                        <Input type='text' className='rounded' />
                        <Button className='px-4 py-2 rounded bg-red-500 hover:bg-red-400'>Apply Coupon</Button>
                    </div>
                    <Button className='bg-red-500 flex items-center justify-center p-4 rounded hover:bg-red-400'>Place Order</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page