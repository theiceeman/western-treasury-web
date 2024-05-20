import Image from 'next/image';
import SideBar from './components/SideBar';
import Link from 'next/link';
import MobileSideBar from './components/MobileSideBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full flex-col justify-between bg-[#f6f6f8]">
      <div className="flex w-full overflow-y-auto">
        <SideBar />
        <div className="flex  w-full  flex-col gap-10 bg-[#f6f6f8]">
          <div className="flex w-full justify-end bg-white px-5 py-5 text-sm font-bold">
            Hi, Ebube
          </div>
          {children}
        </div>
      </div>
      <MobileSideBar />
    </div>
  );
}
