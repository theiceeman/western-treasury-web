import Image from 'next/image';

export function SiteFooter() {
  return (
    <footer className="w-full bg-secondary px-[88px] pb-5 pt-[65px]">
      <div className="flex items-start justify-between">
        <div className="space-y-3">
          <Image src={'/offramp-logo.svg'} alt="logo" width={200} height={86} priority />
          <p>Global exchange platform made easy</p>
        </div>
        <div className=" space-y-4">
          <h4 className="text-[24px]/[43px] font-bold">Socials</h4>
        </div>
        <div className=" space-y-4">
          <h4 className="text-[24px]/[43px] font-bold">Contact us</h4>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <p>Offramp2024 . All rights reserved.</p>
      </div>
    </footer>
  );
}
