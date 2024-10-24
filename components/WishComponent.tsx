import React from 'react'
import { Button } from './ui/button'
import ProductCard from './ProductCard'

const WishComponent = () => {
    const products=[
        {
            id: 1,
            name: "Gucci duffle bag",
            image: "/bagg.png",
            price: 1160,
            discount:35
        },
        {
            id: 2,
            name: "RGB liquid CPU Cooler",
            image: "/cooler.png",
            price: 170,
        },
        {
            id: 3,
            name: "GP11 Shooter USB Gamepad",
            image: "/gamepad.png",
            price: 660,
        },
        {
            id: 4,
            name: "Quilted Satin Jacket",
            image: "/jacket.png",
            price: 660,
        },
    ]
  return (
    <div className='flex flex-col'>
        <div className='flex flex-row justify-between'>
            <div className='flex flex-row gap-16 items-center pt-4'>
                <p className='text-xl '>WishList (4)</p>
            </div>
            <Button className='border text-black dark:text-white text-center p-4 rounded'>Move All To Bag</Button>
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

export default WishComponent