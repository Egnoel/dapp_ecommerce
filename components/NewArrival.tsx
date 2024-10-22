import React from 'react'
import ArrivalCardComponent from './ArrivalCardComponent'

const NewArrival = () => {
  return (
    <div className='px-20 flex flex-col  mt-28'>
        <div className='flex flex-row items-center gap-3 text-red-500'>
            <p className='h-6 w-3 bg-red-500'></p>
            <p>Featured</p>
        </div>
        <div className='flex flex-row justify-between'>
            <div className='flex flex-row gap-16 items-center pt-4'>
                <p className='text-xl font-bold'>New Arrival</p>
            </div>
        </div>
        <div className="flex flex-row gap-4">
                <div className='flex-1'>
                <ArrivalCardComponent image='/ps5.png' description='Black and White version of the PS5 coming out on sale.' title='PlayStation 5' />
                </div>
            <div className="flex flex-col gap-4 flex-1">
                <div className='flex-1'>
                <ArrivalCardComponent image='/woman.png' description='Featured woman collections that give you another vibe.' title="Women’s Collections" />
                </div>
                <div className="flex flex-row gap-4 flex-1">
                <ArrivalCardComponent image='/speakers.png' description='Amazon wireless speakers' title='Speakers' />
                <ArrivalCardComponent image='/perfume.png' description='GUCCI INTENSE OUD EDP' title='Perfume' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewArrival