'use client';
import Image from 'next/image';
import SideBar from './components/SideBar';
import Link from 'next/link';
import MobileSideBar from './components/MobileSideBar';
import { useAppDispatch, useAppSelector } from '@/src/stores/hooks';
import TopBar from './components/TopBar';
import { setUser } from '@/src/stores/slices/userSlice';
import { getLoggedInUser } from '@/src/requests/account/account.requests';
import { useEffect } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getLoggedInUser());
  }, []);

  return (
    <div className="flex h-screen w-full flex-col justify-between bg-[#f6f6f8]">
      <div className="flex w-full overflow-y-auto">
        <SideBar />
        <div className="flex  w-full  flex-col gap-2 bg-[#f6f6f8]  lg:gap-10">
          <TopBar />
          {children}
        </div>
      </div>
      <MobileSideBar />
    </div>
  );
}
