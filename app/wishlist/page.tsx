import ForYouComponent from '@/components/ForYouComponent'
import WishComponent from '@/components/WishComponent'
import React from 'react'

const page = () => {
  return (
    <div className='px-20 flex flex-col  mt-28'>
        <WishComponent />
        <ForYouComponent />
    </div>
  )
}

export default page