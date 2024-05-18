'use client';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button';
import MenuBar from '../MenuBar';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-[20] flex w-full bg-background backdrop-blur supports-[backdrop-filter]:bg-background/60 justify-center">
      <div className="container flex h-14 w-full flex-row  items-center justify-between md:mx-36  max-w-[70rem] mx-auto">
        <Link href="">
          <Image src={'/wt-logo.svg'} alt="logo" width={130} height={60} priority />
        </Link>

        <div className="hidden w-full  lg:flex">
          <div className="flex w-full items-center justify-center gap-11 text-sm">
            <Link
              href={'#'}
              className=" font-medium text-foreground underline-offset-4 hover:underline"
            >
              Features
            </Link>
            <Link
              href={'#'}
              className=" font-medium text-foreground underline-offset-4 hover:underline"
            >
              Rates
            </Link>
            <Link
              href={'#'}
              className=" font-medium text-foreground underline-offset-4 hover:underline"
            >
              Contact
            </Link>
          </div>
          <div className="flex justify-start">
            <Link href="/auth/register"><Button variant='primary'>get started</Button></Link>
          </div>
        </div>

        <MenuBar />
      </div>
    </header>
  );
}
