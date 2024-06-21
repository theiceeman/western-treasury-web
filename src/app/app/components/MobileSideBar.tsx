import Link from 'next/link';
import { HomeIcon } from './icons/HomeIcon';
import { LucideDollarSign, SettingsIcon, UserIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';

const MobileSideBar = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="flex w-full justify-between gap-3 bg-white px-5 lg:hidden">
        <Link
          href="/app/overview"
          className={`${pathname === '/app/overview' ? 'sidebar-active' : ''}`}
        >
          <div className="sidebar-active-bg flex w-full flex-col justify-center py-5 text-center text-[#8C8C8C]">
            <div className="flex w-full justify-center ">
              <HomeIcon />
            </div>
            <div className="font-bold">Home</div>
          </div>
        </Link>
        <Link
          className={`${pathname === '/app/transactions' ? 'sidebar-active' : ''}`}
          href="/app/transactions"
        >
          <div className="sidebar-active-bg flex w-full flex-col justify-center py-5 text-center text-[#8C8C8C]">
            <div className="flex w-full justify-center">
              <LucideDollarSign />
            </div>
            <p className="font-bold">Transactions</p>
          </div>
        </Link>
        <Link
          className={`${pathname === '/app/settings/user' ? 'sidebar-active' : ''}`}
          href="/app/settings/user"
        >
          <div className="sidebar-active-bg flex w-full flex-col justify-center py-5 text-center text-[#8C8C8C]">
            <div className="flex w-full justify-center">
              <UserIcon />
            </div>
            <p className="font-bold">Account</p>
          </div>
        </Link>
        <Link
          className={`${pathname === '/app/settings/user' ? 'sidebar-active' : ''}`}
          href="/app/settings/user"
        >
          <div className="sidebar-active-bg flex w-full flex-col justify-center py-5 text-center text-[#8C8C8C]">
            <div className="flex w-full justify-center">
              <SettingsIcon />
            </div>
            <p className="font-bold">Settings</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default MobileSideBar;
