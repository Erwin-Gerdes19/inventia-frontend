import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, BellIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { useLocation } from 'wouter';

// Definir el tipo para los elementos de navegación
interface NavigationItem {
  name: string;
  href: string
}

const navigation: NavigationItem[] = [
  { name: 'Home', href: '/home'},
  { name: 'Dashboard', href: '#'},
  { name: 'Reportes', href: '#'},
  { name: 'Escaneo', href: '#'},
  { name: 'Listado de Productos', href: '/listado-productos'},
  { name: 'Vencimiento cercanos', href: '#'},
  { name: 'Imagen del Producto', href: '/imagen-producto'}
];

// Función para combinar clases condicionales
function classNames(...classes: (string | boolean)[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function Sidebar(): JSX.Element {
    const [location] = useLocation(); // Obtener la ubicación actual


  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Disclosure as="nav" className="bg-gray-800 w-64 flex-shrink-0">
        <div className="flex flex-col h-full">
          {/* Logo y botón de menú móvil */}
          <div className="flex items-center justify-between h-16 px-4 bg-gray-900">
            <div className="flex items-center">
              <img
                alt="Your Company"
                src="../../public/logo-inventario.png"
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
                  location ===item.href ? 'bg-gray-300 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                )}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </Disclosure>
    </div>
  );
}