import React from 'react'
import { Button } from './ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import ProductCard from './ProductCard'

const OurProductsComponent = () => {
    const products=[
        {
            id: 1,
            name: "Breed Dry Dog Food",
            image: "/dog.png",
            price: 100,
        },
        {
            id: 2,
            name: "CANON EOS DSLR Camera",
            image: "/canon.png",
            price: 360,
        },
        {
            id: 3,
            name: "ASUS FHD Gaming Laptop",
            image: "/asus.png",
            price: 700,
        },
        {
            id: 4,
            name: "Curology Product Set",
            image: "/curology.png",
            price: 500,
        },
        {
            id: 5,
            name: "Kids Electric Car",
            image: "/car.png",
            price: 960,
        },
        {
            id: 6,
            name: "Jr. Zoom Soccer Cleats",
            image: "/soccer.png",
            price: 1160,
        },
        {
            id: 7,
            name: "GP11 Shooter USB Gamepad",
            image: "/gamepad.png",
            price: 660,
        },
        {
            id: 8,
            name: "Quilted Satin Jacket",
            image: "/jacket.png",
            price: 660,
        },
    ]
  return (
    <div className='px-20 flex flex-col  mt-28'>
         <div className='flex flex-row items-center gap-3 text-red-500'>
            <p className='h-6 w-3 bg-red-600'></p>
            <p>Categories</p>
        </div>
        <div className='flex flex-row justify-between'>
            <div className='flex flex-row gap-16 items-center pt-4'>
                <p className='text-xl font-bold'>Browse by Categories</p>
            </div>
            <div className='flex flex-row gap-4 items-center'>
                <span className='w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center'>
                    <ArrowLeft />
                </span>
                <span className='w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center'>
                    <ArrowRight />
                </span>
            </div>
        </div>
        <div className='flex flex-row items-center justify-between mt-9 flex-wrap gap-4'>
        {
            products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))
        }
        </div>
        <div className='w-full flex items-center justify-center mt-9'>
            <span className='text-black dark:text-white bg-red-500 rounded-[4px] h-9 w-36 flex items-center justify-center'>
                View All Products
            </span>
        </div>
    </div>
  )
}

export default OurProductsComponent