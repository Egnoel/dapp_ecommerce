import React from 'react'
import { Button } from './ui/button'
import ProductCard from './ProductCard'

const ForYouComponent = () => {
    const products=[
        {
            id: 1,
            name: "ASUS FHD Gaming Laptop",
            image: "/asus.png",
            price: 1160,
            discount:35
        },
        {
            id: 2,
            name: "IPS LCD Gaming Monitor",
            image: "/monitor.png",
            price: 1160,
        },
        {
            id: 3,
            name: "HAVIT HV-G92 Gamepad",
            image: "/Frame611.png",
            price: 560,
        },
        {
            id: 4,
            name: "AK-900 Wired Keyboard",
            image: "/keyboard.png",
            price: 200,
        },
    ]
  return (
        <div className='flex flex-col  mt-16'>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-row items-center gap-3 text-black dark:text-white'>
                    <p className='h-6 w-3 bg-red-500'></p>
                    <p>For You</p>
                </div>
                <Button className='border text-black dark:text-white text-center p-4 rounded'>See All</Button>
            </div>
            <div className='flex flex-row items-center justify-between mt-9'>
                {
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
  )
}

export default ForYouComponent