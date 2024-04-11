import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button';

export function SiteHeader() {
  return (
    <header className="sticky top-0 flex w-full bg-background backdrop-blur supports-[backdrop-filter]:bg-background/60 z-[20]">
      <div className="container w-full flex flex-row h-14 max-w-screen-2xl  items-center justify-between mx-36">
        <Link href="">
          <Image src={'/offramp-logo.svg'} alt="logo" width={151} height={42} priority />
        </Link>

        <div className="flex w-full">
          <div className="flex items-center gap-11 w-full justify-center text-sm">
            <Link
              href={'#'}
              className=" font-medium text-foreground underline-offset-4 hover:underline"
            >
              Blog
            </Link>
            <Link
              href={'#'}
              className=" font-medium text-foreground underline-offset-4 hover:underline"
            >
              Company
            </Link>
            <Link
              href={'#'}
              className=" font-medium text-foreground underline-offset-4 hover:underline"
            >
              Features
            </Link>
          </div>
        <div className="flex justify-start">
          <Button>get started</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
