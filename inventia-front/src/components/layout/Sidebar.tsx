import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, BellIcon } from '@heroicons/react/24/outline';
import React from 'react';

// Definir el tipo para los elementos de navegación
interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
];

// Función para combinar clases condicionales
function classNames(...classes: (string | boolean)[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function Sidebar(): JSX.Element {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Disclosure as="nav" className="bg-gray-600 w-64 flex-shrink-0">
        <div className="flex flex-col h-full">
          {/* Logo y botón de menú móvil */}
          <div className="flex items-center justify-between h-16 px-4 bg-gray-900">
            <div className="flex items-center">
              <img
                alt="Your Company"
                src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </div>
            <div className="sm:hidden">
              <DisclosureButton className="p-2 text-gray-400 hover:text-white focus:outline-none">
                <span className="sr-only">Open sidebar</span>
                <Bars3Icon className="size-6" aria-hidden="true" />
              </DisclosureButton>
            </div>
          </div>

          {/* Menú de navegación */}
          <div className="flex-1 px-2 py-4 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                )}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Perfil y notificaciones */}
          <div className="px-4 py-4 border-t border-gray-700">
            <div className="flex items-center">
              <button
                type="button"
                className="p-1 text-gray-400 hover:text-white focus:outline-none"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon className="size-6" aria-hidden="true" />
              </button>

              {/* Menú de perfil */}
              <Menu as="div" className="ml-3 relative">
                <div>
                  <MenuButton className="flex text-sm rounded-full focus:outline-none">
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="size-8 rounded-full"
                    />
                  </MenuButton>
                </div>
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
                        Your Profile
                      </a>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }: { active: boolean }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100' : '',
                          'block px-4 py-2 text-sm text-gray-700'
                        )}
                      >
                        Settings
                      </a>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }: { active: boolean }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-200' : '',
                          'block px-4 py-2 text-sm text-gray-700'
                        )}
                      >
                        Sign out
                      </a>
                    )}
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>
      </Disclosure>

      {/* Contenido principal */}
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold text-gray-900">Welcome to your dashboard!</h1>
        <p className="mt-2 text-gray-600">This is the main content area.</p>
      </div>
    </div>
  );
}