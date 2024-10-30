// app/auth/layout.tsx
import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import authImage from '@/public/conta.png';

export const metadata: Metadata = {
  title: 'Auth - Create Next App',
  description: 'Authentication pages',
};

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex px-20 mt-12 ">
      {/* Lado esquerdo com a imagem */}
      <div className="w-1/2  flex ">
        <Image src={authImage} alt="Auth Image" className="w-full h-auto" />
      </div>
      {/* Lado direito com o conteúdo da rota (login ou register) */}
      <div className="w-1/2 flex justify-center items-center  pl-8">
        <div className="max-w-md w-full">{children}</div>
      </div>
    </div>
  );
}
