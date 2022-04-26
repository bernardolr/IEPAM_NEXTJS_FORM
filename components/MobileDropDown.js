// Package Imports
import { useState, useEffect } from 'react';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';

// Component Imports
import UserDropDownMobile from './UserDropDownMobile';

// Icon Imports
import { iconMenu, iconClose } from '../icons';

const icons = {
  menu: iconMenu,
  close: iconClose,
};

// Component
export default function MobileDropDown({ open }) {
  const [user, setuser] = useState(false);
  useEffect(() => {
    setuser(JSON.parse(localStorage.getItem('user')));
  }, []);

  return (
    <>
      {/* Mobile Topbar */}
      <div className='flex items-center lg:hidden'>
        <Popover.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-gray-500 focus:outline-none '>
          <span className='sr-only'>Open main menu</span>
          <icons.menu className='block h-5 w-5 stroke-2' aria-hidden='true' />
        </Popover.Button>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <div className='lg:hidden'>
          <Transition.Child
            as={Fragment}
            enter='duration-150 ease-out'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='duration-150 ease-in'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Popover.Overlay
              static
              className='fixed inset-0 z-20 bg-black bg-opacity-25'
              aria-hidden='true'
            />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter='duration-150 ease-out'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='duration-150 ease-in'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <Popover.Panel
              focus
              static
              className='absolute top-0 right-0 z-30 w-full max-w-none origin-top transform p-1 transition'
            >
              <div className='divide-y divide-gray-200 rounded-md bg-white ring-1 ring-black ring-opacity-5'>
                <div className='pt-2'>
                  <div className='flex items-center justify-between px-2'>
                    <div className='flex items-center'>
                      <a href='/'>
                        <span className='sr-only'>Home</span>
                        <img
                          className='h-12 w-auto md:ml-2 md:mt-1 md:h-14'
                          src='/images/iepam-logo.svg'
                          alt='Gobierno Nuevo León'
                        />
                      </a>
                    </div>
                    <div className='-mr-0.5'>
                      <Popover.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none'>
                        <span className='sr-only'>Close menu</span>
                        <icons.close className='h-5 w-5' aria-hidden='true' />
                      </Popover.Button>
                    </div>
                  </div>

                  <div className='py-4 px-3'>
                    <div className='px-2'>
                      <a
                        href='https://candidatos.iepam.tecdemonterrey.com'
                        className='flex w-full cursor-pointer items-center justify-center rounded-md bg-gray-200 py-2 font-medium text-gray-900 hover:bg-gray-300'
                      >
                        Candidatos
                      </a>
                      <a
                        href='https://empleadores.iepam.tecdemonterrey.com'
                        className='mt-3 flex w-full items-center justify-center rounded-md bg-gray-600 px-4 py-2 text-base font-medium text-white hover:bg-gray-700'
                      >
                        Empleadores
                      </a>
                    </div>
                  </div>
                </div>
                {user && <UserDropDownMobile />}
              </div>
            </Popover.Panel>
          </Transition.Child>
        </div>
      </Transition.Root>
    </>
  );
}