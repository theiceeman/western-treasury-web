import Link from 'next/link';
import { HomeIcon } from './icons/HomeIcon';
import Image from 'next/image';

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
      <div className="hidden lg:flex flex-col gap-10 h-screen w-1/5 bg-[#EDEDF7] py-5 pl-5">
        <div className="flex pl-5">
          <Link href="">
            <Image src={'/offramp-logo.svg'} alt="logo" width={151} height={42} priority />
          </Link>
        </div>
        <div className="sidebar flex w-full flex-col gap-3">
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className=" flex cursor-pointer flex-row  justify-between pl-3"
          >
            <div className="sidebar-active-bg flex h-full w-3/4 flex-row gap-2 rounded-md  px-3 py-2 text-[#8C8C8C]">
              <HomeIcon />
              <div className="font-bold">Home</div>
            </div>
            <div className="sidebar-active-flag hidden  h-full w-1 rounded-sm bg-primary"></div>
          </div>
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className=" flex cursor-pointer flex-row  justify-between pl-3"
          >
            <div className="sidebar-active-bg flex h-full w-3/4 flex-row gap-2 rounded-md  px-3 py-2 text-[#8C8C8C]">
              <HomeIcon />
              <div className="font-bold">Transactions</div>
            </div>
            <div className="sidebar-active-flag hidden  h-full w-1 rounded-sm bg-primary"></div>
          </div>
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className=" flex cursor-pointer flex-row  justify-between pl-3"
          >
            <div className="sidebar-active-bg flex h-full w-3/4 flex-row gap-2 rounded-md  px-3 py-2 text-[#8C8C8C]">
              <HomeIcon />
              <div className="font-bold">Account</div>
            </div>
            <div className="sidebar-active-flag hidden  h-full w-1 rounded-sm bg-primary"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
