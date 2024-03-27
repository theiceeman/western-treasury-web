import Image from 'next/image';
import Link from 'next/link';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl  items-center justify-between px-[88px]">
        <Link href="">
          <Image src={'/offramp-logo.svg'} alt="logo" width={151} height={42} priority />
        </Link>

        <div className="flex gap-[300px]">
          <div className="flex items-center gap-6">
            <Link
              href={'#'}
              className="text-[18px]/[24px] font-medium text-foreground underline-offset-4 hover:underline"
            >
              Blog
            </Link>
            <Link
              href={'#'}
              className="text-[18px]/[24px] font-medium text-foreground underline-offset-4 hover:underline"
            >
              Company
            </Link>
            <Link
              href={'#'}
              className="text-[18px]/[24px] font-medium text-foreground underline-offset-4 hover:underline"
            >
              Features
            </Link>
          </div>
          <button className="flex gap-1 rounded-[20px] bg-primary px-6 py-2 text-[18px]/[24px] text-white">
            Get started
          </button>
        </div>
      </div>
    </header>
  );
}
