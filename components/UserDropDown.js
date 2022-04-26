// Package Imports
import { Fragment } from 'react';
import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';

// Helper Function Imports
import { classNames } from '../../helpers/classNames';

// Icon Imports
import { iconGear, iconLayout, iconUser, iconCheckCircled } from '../icons';

// Component
export default function UserDropDown() {
  const user = {
    firstName: 'Carlos',
    lastName: 'Alvarez',
    email: 'carlos.alvarez@autorep22.com',
  };

  return (
    <Menu as='div' className='relative z-30 ml-4 flex-shrink-0'>
      {({ open }) => (
        <>
          <div>
            <Menu.Button className='focus:outline-none flex items-center rounded-md bg-white text-sm'>
              <span className='sr-only'>User Initials</span>
              <div className='flex h-8 w-8 items-stretch justify-center rounded-full bg-gray-600'>
                <p className='self-center font-medium text-white'>
                  {user.firstName[0] + user.lastName[0]}
                </p>
              </div>
            </Menu.Button>
          </div>
          <Transition
            show={open}
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Menu.Items
              static
              className='absolute right-0 mt-2 w-48 origin-top-right overflow-hidden rounded-md border bg-white'
            >
              {menuItems.map((item) => (
                <Menu.Item key={item.name}>
                  {({ active }) => (
                    <Link key={item.name} href={item.href} passHref>
                      <div
                        className={classNames(
                          active ? 'bg-gray-100' : '',
                          'flex cursor-pointer items-center px-4 py-2 text-sm text-gray-700'
                        )}
                      >
                        <item.icon
                          className='mr-3 h-5 w-5 text-gray-600'
                          aria-hidden='true'
                        />
                        {item.name}
                      </div>
                    </Link>
                  )}
                </Menu.Item>
              ))}
              <Menu.Item>
                {({ active }) => (
                  <Link href={'/autenticacion/cerrar-sesion'} passHref>
                    <div
                      className={
                        'flex cursor-pointer items-center bg-red-50 px-4 py-2 text-sm text-red-700 hover:bg-red-100'
                      }
                    >
                      Cerrar Sesión
                    </div>
                  </Link>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}

const menuItems = [
  { name: 'Tablero', href: '/tablero', icon: iconLayout },
  { name: 'Suscripción', href: '/cuenta/suscripcion', icon: iconCheckCircled },
  { name: 'Preferencias', href: '/cuenta/preferencias', icon: iconUser },
  {
    name: 'Configuración',
    href: '/configuracion/datos-personales',
    icon: iconGear,
  },
];