'use client';

import { useState } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

// Interface corrigida para receber o produto completo como prop
interface ProductCardProps {
  product: {
    id: number;
    name: string;
    image: string;
    price: number;
    discount?: number;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Card className="w-64 overflow-hidden group h-72">
      <CardContent className="p-0 relative h-[65%] w-full bg-slate-300 flex items-center justify-center">
        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={256}
          className="object-cover h-full"
        />
        <span className="absolute top-3 left-2 bg-red-500 text-sm w-11 text-center rounded">
          {product.discount ? `-${product.discount}%` : ''}
        </span>
        <div className="absolute bottom-0 left-[25%] bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <Button
            variant="secondary"
            className="mr-2 bg-white text-black hover:bg-gray-200"
          >
            <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
          </Button>
        </div>
        <div className="absolute top-3 right-2 bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:text-red-500 transition-colors duration-300"
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart
              className={`h-6 w-6 ${
                isLiked ? 'fill-red-500 text-red-500' : 'fill-none'
              }`}
            />
          </Button>
        </div>
      </CardContent>
      <CardContent className="px-4 py-2">
        <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
        <div className="flex flex-row items-center">
          {product.discount ? (
            <>
              <span className="text-lg font-bold text-red-500 mr-2">
                ${product.price - (product.price * product.discount) / 100}
              </span>
              <span className="text-gray-500 text-sm line-through">
                ${product.price.toFixed(2)}
              </span>
            </>
          ) : (
            <p className="text-red-500">${product.price.toFixed(2)}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
