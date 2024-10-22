import React from 'react'
import { Button } from './ui/button'
import ProductCard from './ProductCard'

const BestSellingComponent = () => {
    const products=[
        {
            id: 1,
            name: "The north coat",
            image: "/hood.png",
            price: 360,
            discount:40
        },
        {
            id: 2,
            name: "Gucci duffle bag",
            image: "/bagg.png",
            price: 1160,
            discount:35
        },
        {
            id: 3,
            name: "RGB liquid CPU Cooler",
            image: "/cooler.png",
            price: 170,
            discount:30
        },
        {
            id: 4,
            name: "Small BookSelf",
            image: "/bookself.png",
            price: 3600,
        },
    ]
  return (
    <div className='px-20 flex flex-col  mt-28'>
        <div className='flex flex-row items-center gap-3 text-red-500'>
            <p className='h-6 w-3 bg-red-500'></p>
            <p>This Month</p>
        </div>
        <div className='flex flex-row justify-between'>
            <div className='flex flex-row gap-16 items-center pt-4'>
                <p className='text-xl font-bold'>Best Selling Products</p>
            </div>
            <Button className='text-black dark:text-white bg-red-500 hover:bg-red-300 rounded-[4px] h-9 w-24 flex items-center justify-center'>
                View All
            </Button>
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

export default BestSellingComponent