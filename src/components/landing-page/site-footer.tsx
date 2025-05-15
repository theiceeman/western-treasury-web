import Image from 'next/image';

export function SiteFooter() {
  return (
    <footer
      id="contact-us"
      className="w-full bg-[#C8CCF7] px-[40px] py-[50px] pb-5 lg:px-[110px] lg:py-[70px]"
    >
      <div className="mx-auto flex max-w-[70rem] flex-col items-start justify-between gap-5 md:flex-row md:gap-0">
        <div className="space-y-3">
          <Image src={'/wt-logo.svg'} alt="logo" width={200} height={86} priority />
          <p>Global exchange platform made easy</p>
        </div>
        <div className=" space-y-4">
          <h4 className="text-[24px]/[43px] font-black">Socials</h4>
          <div className="flex flex-col ">
            <div className="flex flex-row gap-2">
              <Image src={'/social/ig-logo.svg'} alt="logo" width={20} height={15} priority />
              <a
                href="https://www.instagram.com/wtreasuryglobal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="pb-2 pt-2 font-bold">Instagram</p>
              </a>
            </div>
            <div className="flex flex-row gap-2">
              <Image
                src={'/social/twitter-logo.svg'}
                alt="logo"
                width={20}
                height={15}
                priority
              />

              <a
                href="https://x.com/WTreasuryGlobal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="pb-2 pt-2 font-bold">X (Twitter)</p>
              </a>
            </div>
          </div>
        </div>
        <div className=" space-y-4">
          <h4 className="text-[24px]/[43px] font-black">Contact us</h4>
          <div className="flex flex-col">
            <p>hello@westerntreasury.com</p>
            <p>+234 8183175686</p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-7 flex max-w-[70rem] items-center justify-start md:justify-end">
        <p className="text-sm">©{new Date().getFullYear()} Western Treasury.</p>
      </div>
    </footer>
  );
}
