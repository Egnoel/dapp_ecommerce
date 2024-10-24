"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import React, { useState } from 'react'

const page = () => {
    const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

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

    // Função para atualizar a quantidade de um produto específico
    const handleQuantityChange = (id:number, value:number) => {
        setQuantities(prev => ({
            ...prev,
            [id]: value > 0 ? value : 1 // Garante que o valor seja no mínimo 1
        }));
    };

    return (
    <div className='px-20 flex flex-col mt-20 gap-6'>
        <div className='flex flex-row gap-2 text-gray-400'>
            <span>home</span>
            <span>/</span>
            <span className='text-black dark:text-white'>cart</span>
        </div>
        <div className='flex flex-col gap-3'>
            <div className='flex flex-row items-center justify-between border rounded border-gray-300 px-3 py-2 shadow-md'>
                <div className='flex-1'>
                    <span>Product</span>
                </div>
                <div className='flex-1 flex text-center items-center justify-center'>
                    <span>Price</span>
                </div>
                <div className='flex-1 flex items-center justify-center'>
                    <span>Quantity</span>
                </div>
               <div className='flex-1 flex justify-end'>
                   <span>SubTotal</span>
               </div>
            </div>

            {products.map(product => (
                <div key={product.id} className='flex flex-row gap-3 items-center border-b border-gray-200 px-3 py-2'>
                    <div className='flex-1 flex flex-row gap-2 items-center'>
                        <Image src={product.image} alt={product.name} width={50} height={50} className='object-cover' />
                        <span>{product.name}</span>
                    </div>
                    <div className='flex-1 flex items-center justify-center'>
                        <span>${product.price.toFixed(2)}</span>
                    </div>
                    <div className='flex-1 flex items-center justify-center'>
                        <Input
                            type='number'
                            value={quantities[product.id] || 1} // Quantidade específica para cada produto
                            onChange={(e) => handleQuantityChange(product.id, Number(e.target.value))}
                        />
                    </div>
                    <div className='flex-1 flex justify-end'>
                        <span>${(product.price * (quantities[product.id] || 1)).toFixed(2)}</span>
                    </div>
                </div>
            ))}
            <div className='flex flex-row justify-between mt-2'>
                <Button className='border px-4 py-2 rounded'>Return to shop</Button>
                <Button className='border px-4 py-2 rounded'>Update Cart</Button>
            </div>
        </div>
        <div className='flex flex-row justify-between'>
            <div className='flex flex-row gap-2'>
                <Input type='text' />
                <Button className='px-4 py-2 rounded bg-red-500 hover:bg-red-400'>Apply Coupon</Button>
            </div>
            <div className='flex flex-col border border-black dark:border-white px-4 py-4 w-[256px] gap-5'>
                <span>Cart Total</span>
                <div className='flex flex-col gap-2'>
                <div className='flex flex-row justify-between'>
                    <span>Subtotal:</span>
                    <span>
                        {products.reduce((acc, curr) => acc + (curr.price * (quantities[curr.id] || 1)), 0).toFixed(2)}
                    </span>
                </div>
                <Separator className=' bg-black text-sm dark:bg-gray-600' />
                <div className='flex flex-row justify-between'>
                    <span>Shipping:</span>
                    <span>
                        Free
                    </span>
                </div>
                <Separator className=' bg-black text-sm dark:bg-gray-600' />
                <div className='flex flex-row justify-between'>
                    <span>Total:</span>
                    <span>
                        {products.reduce((acc, curr) => acc + (curr.price * (quantities[curr.id] || 1)), 0).toFixed(2)}
                    </span>
                </div>
                </div>
                <Button className='bg-red-500 flex items-center justify-center p-4 rounded hover:bg-red-400'>Proceed to Checkout</Button>
            </div>
        </div>
    </div>
  );
};

export default page;
