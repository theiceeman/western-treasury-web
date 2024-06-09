import Image from 'next/image';
import SideBar from './components/SideBar';
import Link from 'next/link';
import MobileSideBar from './components/MobileSideBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full flex-col justify-between bg-[#f6f6f8]">
      <div className="flex w-full overflow-y-auto">
        <SideBar />
        <div className="flex  w-full  flex-col gap-2 bg-[#f6f6f8]  lg:gap-10">
          <div className=" text-md flex w-full   bg-white px-5 py-5 font-bold">
            <div className="flex justify-end gap-3 w-full lg:w-[85%]">
              <div className="my-auto">Hello, Ebube</div>
              <div className="my-auto mb-auto flex rounded-full bg-violet-100 px-3 py-3 text-xs font-bold text-violet-500 md:my-auto">
                RE
              </div>
            </div>
          </div>
          {children}
        </div>
      </div>
      <MobileSideBar />
    </div>
  );
}
