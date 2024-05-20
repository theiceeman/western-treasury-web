import Image from 'next/image';
import Link from 'next/link';
import { HomeIcon } from './icons/HomeIcon';
import { LucideMoreHorizontal, UserIcon } from 'lucide-react';

const MobileSideBar = () => {
  return (
    <>
      <div className="flex justify-between gap-3 bg-white px-5 lg:hidden">
        <div className="flex w-full text-center flex-col justify-center px-5 py-5 text-[#8C8C8C]">
          <div className="flex w-full justify-center">
            <Link href="/app/overview">
            <HomeIcon />
            </Link>
          </div>
          <p className="font-bold">Home</p>
        </div>
        <div className="flex w-full text-center flex-col justify-center px-5 py-5 text-[#8C8C8C]">
          <div className="flex w-full justify-center">
            <Link href="">
              <UserIcon/>
            </Link>
          </div>
          <p className="font-bold">Account</p>
        </div>
        <div className="flex w-full text-center flex-col justify-center px-5 py-5 text-[#8C8C8C]">
          <div className="flex w-full justify-center">
            <Link href="">
              <LucideMoreHorizontal />
            </Link>
          </div>
          <p className="font-bold">More</p>
        </div>
      </div>
    </>
  );
};

export default MobileSideBar;
