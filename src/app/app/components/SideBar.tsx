'use client';
import Link from 'next/link';
import { HomeIcon } from './icons/HomeIcon';
import Image from 'next/image';
import Button from '@/src/components/Button';
import { SettingsIcon } from './icons/SettingsIcon';
import { LucideDollarSign, LucideLogOut, UserIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { logout } from '@/src/utils/auth-tokens';

const SideBar = () => {
  const pathname = usePathname();

  const handleMouseEnter = (event: any) => {
    const hoveredDiv = event.currentTarget;
    hoveredDiv.classList.add('sidebar-active');
  };
  const handleMouseLeave = (event: any) => {
    const hoveredDiv = event.currentTarget;

    if (hoveredDiv.getAttribute('href') !== pathname) {
      hoveredDiv.classList.remove('sidebar-active');
    }
  };
  return (
    <>
      <div className="hidden h-screen w-1/5 max-w-[230px] flex-col gap-10 border-r border-white bg-[#F1F2FD] py-2 pl-3 lg:flex">
        <div className="flex border-b border-white pl-5">
          <Link href="/app/overview">
            <Image src={'/wt-logo.svg'} alt="logo" width={120} height={42} priority />
          </Link>
        </div>
        <div className="sidebar flex w-full flex-col gap-2">
          <Link
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`${pathname === '/app/overview' ? 'sidebar-active' : ''} flex cursor-pointer  flex-row justify-between pl-1`}
            href="/app/overview"
          >
            <div className="sidebar-active-bg flex h-full w-3/4 flex-row gap-2 rounded-md  px-3 py-3 text-[#8C8C8C]">
              <HomeIcon />
              <div className="text-base font-black">Home</div>
            </div>
            <div className="sidebar-active-flag hidden  h-full w-1 rounded-sm bg-primary"></div>
          </Link>
          <Link
            href="/app/transactions"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`${pathname === '/app/transactions' ? 'sidebar-active' : ''} flex cursor-pointer  flex-row justify-between pl-1`}
          >
            <div className="sidebar-active-bg flex h-full w-3/4 flex-row gap-2 rounded-md  px-3 py-3 text-[#8C8C8C]">
              <LucideDollarSign />
              <div className="text-base font-black">Transactions</div>
            </div>
            <div className="sidebar-active-flag hidden  h-full w-1 rounded-sm bg-primary"></div>
          </Link>
          <Link
            href="/app/settings/user"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`${pathname === '/app/settings/user' ? 'sidebar-active' : ''} flex cursor-pointer  flex-row justify-between pl-1`}
          >
            <div className="sidebar-active-bg flex h-full w-3/4 flex-row gap-2 rounded-md  px-3 py-3 text-[#8C8C8C]">
              <UserIcon />
              <div className="text-base font-black">Account</div>
            </div>
            <div className="sidebar-active-flag hidden  h-full w-1 rounded-sm bg-primary"></div>
          </Link>
          <Link
            href="/app/settings/user"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`${pathname === '/app/settings/user' ? 'sidebar-active' : ''} flex cursor-pointer  flex-row justify-between pl-1`}
          >
            <div className="sidebar-active-bg flex h-full w-3/4 flex-row gap-2 rounded-md  px-3 py-3 text-[#8C8C8C]">
              <SettingsIcon />
              <div className="text-base font-black">Settings</div>
            </div>
            <div className="sidebar-active-flag hidden  h-full w-1 rounded-sm bg-primary"></div>
          </Link>
          <Link
            href="/"
            onClick={logout}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`${pathname === '/' ? 'sidebar-active' : ''} flex cursor-pointer  flex-row justify-between pl-1`}
          >
            <div className="sidebar-active-bg flex h-full w-3/4 flex-row gap-2 rounded-md  px-3 py-3 text-[#8C8C8C]">
              <LucideLogOut />
              <div className="text-base font-black">Sign out</div>
            </div>
            <div className="sidebar-active-flag hidden  h-full w-1 rounded-sm bg-primary"></div>
          </Link>
        </div>
        <div className="flex w-full justify-start">
          <div className="ml-2 mr-7 flex flex-col my-auto justify-center gap-4 rounded-md bg-[#5860A4] px-3 py-3 text-center text-white">
            <div className="flex w-full justify-end">
              {/* <Image
                src={'/icons/close-icon.svg'}
                alt="logo"
                width={10}
                height={10}
                priority
              /> */}
            </div>
            <p className="text-lg font-bold">Having troubles?</p>
            <p className="text-sm">
              We're always here to <br /> help you.
            </p>
            <div className="mb-8 flex justify-center">
              <a href="https://wa.me/2348183175686">
                <Button variant="secondary" className="bg-slate-200 text-[#5860A4]">
                  contact us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
