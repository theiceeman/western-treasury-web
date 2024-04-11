import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-[20] flex w-full bg-background backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-36 flex h-14 w-full max-w-screen-2xl  flex-row items-center justify-between">
        <Link href="">
          <Image src={'/offramp-logo.svg'} alt="logo" width={151} height={42} priority />
        </Link>

        <div className="hidden w-full  lg:flex">
          <div className="flex w-full items-center justify-center gap-11 text-sm">
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
