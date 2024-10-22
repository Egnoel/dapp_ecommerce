import React from 'react'
import { Separator } from "@/components/ui/separator"
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'


const HeaderBanner = () => {
    const categories =[
        {
            id: 1,
            name: "Woman's fashin",
            subCategories: [
                {
                    id: 1,
                    name: "Dresses"
                },
                {
                    id: 2,
                    name: "Tops"
                },
                {
                    id: 3,
                    name: "Pants"
                },
                {
                    id: 4,
                    name: "Jeans"
                },
                {
                    id: 5,
                    name: "Skirts"
                }
            ]
        },
        {
            id: 2,
            name:"Men's fashion",
            subCategories: [
                {
                    id: 1,
                    name: "Shirts"
                },
                {
                    id: 2,
                    name: "Tops"
                },
                {
                    id: 3,
                    name: "Pants"
                },
                {
                    id: 4,
                    name: "Jeans"
                },
                {
                    id: 5,
                    name: "Skirts"
                }
            ]
        },
        {
            id:3,
            name: "Electronics",
        },
        {
            id:4,
            name: "Home & Lifestyle",
        },
        {
            id:5,
            name: "Medicine",
        },
        {
            id:6,
            name: "Sports & Outdoors",
        },
        {
            id:7,
            name: "Books & Stationery",
        }
    ]
  return (
    <div className='w-full'>
        <Separator className=' bg-black text-sm dark:bg-gray-600' />
        <div className='flex flex-row px-20'>
        <div className='mt-5 flex flex-col gap-4'>
        {
            categories.map((category) => (
                <div key={category.id} className='flex flex-row items-center gap-4 hover:text-lg hover:cursor-pointer transition ease-out'>
                    <p>{category.name}</p>
                    {
                        category.subCategories && <ArrowRight className='w-4 h-4' />
                    }
                </div>
            ))
        }
        </div>
        <Separator orientation="vertical" className='bg-black dark:bg-gray-600 h-72 ml-5 mr-10' />
        <div className='mt-5'>
            <Image src={"/Frame560.png"} width={650} height={550} className='bg-cover  h-full' alt='bannerHeader' />
        </div>
        </div>
    </div>
  )
}

export default HeaderBanner