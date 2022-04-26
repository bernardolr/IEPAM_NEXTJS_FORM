// Package Imports
import { useState, useEffect } from 'react';
import { Popover } from '@headlessui/react';
import Link from 'next/link';

// Component Imports
import MobileDropDown from './MobileDropDown';

// Component
export default function Navbar() {
  return (
    <div className='fixed z-10 w-full'>
      <Popover className='bg-white'>
        {({ open }) => (
          <>
            <div className='border-b border-gray-300'>
              <div className='mx-auto flex h-16 max-w-7xl justify-between px-2'>
                <div className='flex px-2 lg:px-0'>
                  <div className='flex items-center'>
                    <a href='/'>
                      <span className='sr-only'>Home</span>
                      <img
                        className='h-14 w-auto cursor-pointer md:hidden'
                        src='/images/iepam-logo.svg'
                        alt='Gobierno Nuevo León'
                        width={100}
                        height={100}
                      />
                    </a>
                    <a href='/'>
                      <span className='sr-only'>Home</span>
                      <img
                        className='hidden h-14 w-auto cursor-pointer md:block'
                        src='/images/iepam-logo.svg'
                        alt='Gobierno Nuevo León'
                        width={340}
                        height={100}
                      />
                    </a>
                  </div>
                </div>
                <MobileDropDown open={open} />

                <div className='hidden lg:flex lg:items-center'>
                  <Link
                    href='https://empleadores.iepam.tecdemonterrey.com'
                    passHref
                  >
                    <div className='ml-5 cursor-pointer rounded-md bg-gray-200 px-5 py-2 text-sm font-medium hover:bg-gray-300'>
                      Empleadores
                    </div>
                  </Link>
                  <Link
                    href='https://candidatos.iepam.tecdemonterrey.com'
                    passHref
                  >
                    <div className='ml-5 cursor-pointer rounded-md bg-gray-200 px-5 py-2 text-sm font-medium hover:bg-gray-300'>
                      Candidatos
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </Popover>
    </div>
  );
}