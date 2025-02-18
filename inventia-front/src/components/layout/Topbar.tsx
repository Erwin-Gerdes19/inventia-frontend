// src/components/layout/Topbar.tsx
import React from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

export default function Topbar(): JSX.Element {
  return (
    <div className="bg-gray-800 p-4 flex justify-end items-center">
      <Menu as="div" className="relative">
        <MenuButton className="flex items-center text-sm text-white focus:outline-none">
          <span className="sr-only">Open user menu</span>
          <img
            alt="User"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            className="size-8 rounded-full"
          />
          <span className="ml-2">Usuario</span>
        </MenuButton>
        <MenuItems className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <MenuItem>
            {({ active }: { active: boolean }) => (
              <a
                href="#"
                className={classNames(
                  active ? 'bg-gray-100' : '',
                  'block px-4 py-2 text-sm text-gray-700'
                )}
              >
                Cerrar sesión
              </a>
            )}
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
}

// Función para combinar clases
function classNames(...classes: (string | boolean)[]): string {
  return classes.filter(Boolean).join(' ');
}