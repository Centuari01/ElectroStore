'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger, Separator, Input } from '@/components/ui/index'


const DivHeader = () => {
  return (
    <div className="flex items-center justify-between p-8 border-solid border-b-2">
      <div className="text-3xl w-1/4">ElectroStore</div>

      <div className="flex items-center justify-end w-3/4">
        <div className="px-8">
          <Input placeholder='Search for Cool Stuff'/>
        </div>

        <Popover className='px-8'>
          <PopoverTrigger>
            <Image src="/Menu.png" width={52} height={52} alt="menu" />
          </PopoverTrigger>
          <PopoverContent>
            <div className="w-full h-full p-2">
              <Link href="/profile">Profile</Link>
            </div>
            <Separator />

            <div className="w-full h-full p-2">
              <Link href="/cart">Cart</Link>
            </div>
            <div className="w-full h-full p-2">
              <Link href="/cart">Logout</Link>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default DivHeader;
