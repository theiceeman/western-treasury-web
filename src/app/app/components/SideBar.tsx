'use client';
import Link from 'next/link';
import { HomeIcon } from './icons/HomeIcon';
import Image from 'next/image';
import Button from '@/src/components/Button';
import { SettingsIcon } from './icons/SettingsIcon';
import { LucideCurrency, LucideDollarSign, UserIcon } from 'lucide-react';
// import { SettingsIcon } from 'lucide-react';

const SideBar = () => {
  const handleMouseEnter = (event: any) => {
    const hoveredDiv = event.currentTarget;
    hoveredDiv.classList.add('sidebar-active');
  };
  const handleMouseLeave = (event: any) => {
    const hoveredDiv = event.currentTarget;
    hoveredDiv.classList.remove('sidebar-active');
  };
  return (
    <>
      <div className="hidden h-screen w-1/5 flex-col gap-10 bg-[#F1F2FD] py-2 pl-3 lg:flex max-w-[230px]">
        <div className="flex pl-5">
          <Link href="/app/overview">
            <Image src={'/wt-logo-2.png'} alt="logo" width={120} height={42} priority />
          </Link>
        </div>
        <div className="sidebar flex w-full flex-col gap-2">
          <Link href="/app/overview">
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className=" flex cursor-pointer  flex-row justify-between pl-1"
            >
              <div className="sidebar-active-bg flex h-full w-3/4 flex-row gap-2 rounded-md  px-3 py-3 text-[#8C8C8C]">
                <HomeIcon />
                <div className="text-base font-black">Home</div>
              </div>
              <div className="sidebar-active-flag hidden  h-full w-1 rounded-sm bg-primary"></div>
            </div>
          </Link>
          <Link href="/app/transactions">
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className=" flex cursor-pointer flex-row  justify-between pl-1"
            >
              <div className="sidebar-active-bg flex h-full w-3/4 flex-row gap-2 rounded-md  px-3 py-3 text-[#8C8C8C]">
                <LucideDollarSign />
                <div className="text-base font-black">Transactions</div>
              </div>
              <div className="sidebar-active-flag hidden  h-full w-1 rounded-sm bg-primary"></div>
            </div>
          </Link>
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className=" flex cursor-pointer flex-row  justify-between pl-1"
          >
            <div className="sidebar-active-bg flex h-full w-3/4 flex-row gap-2 rounded-md  px-3 py-3 text-[#8C8C8C]">
              <UserIcon />
              <div className="text-base font-black">Account</div>
            </div>
            <div className="sidebar-active-flag hidden  h-full w-1 rounded-sm bg-primary"></div>
          </div>
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className=" flex cursor-pointer flex-row  justify-between pl-1"
          >
            <div className="sidebar-active-bg flex h-full w-3/4 flex-row gap-2 rounded-md  px-3 py-3 text-[#8C8C8C]">
              <SettingsIcon />
              <div className="text-base font-black">Settings</div>
            </div>
            <div className="sidebar-active-flag hidden  h-full w-1 rounded-sm bg-primary"></div>
          </div>
        </div>
        <div className="flex w-full justify-start">
          <div className="ml-2 mr-7 flex flex-col justify-center gap-4 rounded-md bg-[#5860A4] px-3 py-3 text-center text-white">
            <div className="flex w-full justify-end">
              <Image
                src={'/icons/close-icon.svg'}
                alt="logo"
                width={10}
                height={10}
                priority
              />
            </div>
            <p className="text-lg font-bold">Having troubles?</p>
            <p className="text-sm">
              We're always here to <br /> help you.
            </p>
            <div className="mb-8 flex justify-center">
              <Button variant="secondary" className="bg-slate-200 text-[#5860A4]">
                contact us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
