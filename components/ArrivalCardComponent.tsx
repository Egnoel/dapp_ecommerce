import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { Separator } from "@/components/ui/separator"

interface ArrivalProps{
    image: string,
    title: string,
    description: string,
}

const ArrivalCardComponent = ({image, title, description}:ArrivalProps) => {
  return (
    <div className='bg-black dark:bg-slate-200 relative flex items-center justify-center  w-full h-full'>
        <Image src={image} alt='image' width={128} height={128} className='object-cover w-full h-full' />
        <div className='absolute flex flex-col bottom-2 left-2 gap-2 text-white w-[256px]'>
            <h1 className='font-semibold text-lg text-wrap'>
                {title}
            </h1>
            <p>
                {description}
            </p>
            <div>
            <Button className=''>Shop Now</Button>
            <Separator />
            </div>
        </div>
    </div>
  )
}

export default ArrivalCardComponent