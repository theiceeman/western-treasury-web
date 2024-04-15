import Image from 'next/image';
import HomeIcon from '../components/icons/HomeIcon';

const Page = () => {
  return (
    <div className="flex h-screen">
      <div className="flex h-screen w-1/5 bg-[#EDEDF7] py-5 pl-5">
        <div className="sidebar flex w-full flex-col gap-3">
          <div className="flex flex-row justify-between  pl-3 ">
            <div className=" flex h-full w-3/4 flex-row gap-2 rounded-md  px-3 py-2 text-base text-[#8C8C8C]">
              <HomeIcon />
              <div className="font-bold">Home</div>
            </div>
            <div className="flex h-full w-1 rounded-sm bg-primary"></div>
          </div>
          <div className="flex flex-row justify-between  pl-3 ">
            <div className=" flex h-full w-3/4 flex-row gap-2 rounded-md  px-3 py-2 text-base text-[#8C8C8C]">
              <HomeIcon />
              <div className="font-bold">Transactions</div>
            </div>
            <div className="flex h-full w-1 rounded-sm bg-primary"></div>
          </div>
          <div className="flex flex-row justify-between  pl-3 ">
            <div className=" sidebar-active flex h-full w-3/4 flex-row gap-2 rounded-md  px-3 py-2 text-[#8C8C8C]">
              <HomeIcon />
              <div className="font-bold">Wallet</div>
            </div>
            <div className="flex h-full w-1 rounded-sm bg-primary"></div>
          </div>
        </div>
      </div>
      <div className="flex h-screen w-4/5 bg-[#f6f6f8]"></div>
    </div>
  );
};

export default Page;
