import Image from 'next/image';

export function SiteFooter() {
  return (
    <footer className="w-full bg-[#C8CCF7] px-[170px] py-[88px] pb-5 pt-[65px]">
      <div className="flex items-start justify-between">
        <div className="space-y-3">
          <Image src={'/offramp-logo.svg'} alt="logo" width={200} height={86} priority />
          <p>Global exchange platform made easy</p>
        </div>
        <div className=" space-y-4">
          <h4 className="text-[24px]/[43px] font-black">Socials</h4>
          <div className="flex gap-4">
            <div className="flex flex-row gap-2">
              <Image src={'/social/linkedin-logo.svg'} alt="logo" width={20} height={15} priority />
              <p className="font-bold pt-3 pb-2">LinkedIn</p>
            </div>
            <div className="flex flex-row gap-2">
              <Image src={'/social/ig-logo.svg'} alt="logo" width={20} height={15} priority />
              <p className="font-bold pt-3 pb-3">Instagram</p>
            </div>
            <div className="flex flex-row gap-2">
              <Image src={'/social/twitter-logo.svg'} alt="logo" width={20} height={15} priority />
              <p className="font-bold pt-3 pb-3">Twitter</p>
            </div>
          </div>
        </div>
        <div className=" space-y-4">
          <h4 className="text-[24px]/[43px] font-black">Contact us</h4>
          <div className="flex flex-col">
            <p>hello@offramp.com</p>
            <p>+234 8183175686</p>
          </div>
        </div>
      </div>
      <div className="mt-5 flex items-center justify-end">
        <p>©2024 OffRamp.</p>
      </div>
    </footer>
  );
}
