'use client';

import { ButtonIcon } from '@/components/ui/button-icon';

import { NavigationMenuDemo } from '@/components/NavigationMenu';

import { Bell, ShoppingCart, Menu, Search } from 'lucide-react';
import Image from 'next/image';
import { useViewportSize } from '@mantine/hooks';

function Navbar() {
  const { height, width } = useViewportSize();
  return (
    <div className="flex max-h-16 w-full items-center p-4">
      <div className="basis-1/2 justify-start">
        {width > 768 ? (
          <Image alt="logo" width="113" height="90" src="/img/logo.png" />
        ) : (
          <ButtonIcon>
            <Menu />
          </ButtonIcon>
        )}
      </div>
      <div className="flex-shrink-0">
        {width > 768 ? (
          <NavigationMenuDemo />
        ) : (
          <Image alt="logo" width="85" height="82" src="/img/logo.png" />
        )}
      </div>
      <div className="flex basis-1/2 justify-end space-x-1">
        <ButtonIcon>
          <Search className="h-4 w-4" />
        </ButtonIcon>
        <ButtonIcon>
          <Bell className="h-4 w-4" />
        </ButtonIcon>
        <ButtonIcon>
          <ShoppingCart className="h-4 w-4" />
        </ButtonIcon>
      </div>
    </div>
  );
}

export default Navbar;
