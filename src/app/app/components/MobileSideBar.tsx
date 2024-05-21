import Image from 'next/image';
import Link from 'next/link';
import { HomeIcon } from './icons/HomeIcon';
import { LucideMoreHorizontal, UserIcon } from 'lucide-react';

const MobileSideBar = () => {
  return (
    <>
      <div className="flex justify-between gap-3 bg-white px-5 lg:hidden">
        <Link href="/app/overview">
          <div className="flex w-full flex-col justify-center px-5 py-5 text-center text-[#8C8C8C]">
            <div className="flex w-full justify-center">
              <HomeIcon />
            </div>
            <p className="font-bold">Home</p>
          </div>
        </Link>
        <Link href="">
          <div className="flex w-full flex-col justify-center px-5 py-5 text-center text-[#8C8C8C]">
            <div className="flex w-full justify-center">
              <UserIcon />
            </div>
            <p className="font-bold">Account</p>
          </div>
        </Link>
        <Link href="">
          <div className="flex w-full flex-col justify-center px-5 py-5 text-center text-[#8C8C8C]">
            <div className="flex w-full justify-center">
              <LucideMoreHorizontal />
            </div>
            <p className="font-bold">More</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default MobileSideBar;
