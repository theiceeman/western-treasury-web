'use client';
import { BsBank2 } from 'react-icons/bs';
import Link from 'next/link';
import SettingsNavbar from '../../components/settings/SettingsNavbar';
import { useMutation } from 'react-query';
import { viewUserAcct } from '@/src/requests/fiat-account/fiat-account.requests';
import { useEffect } from 'react';

const BankSettings = () => {
  const {
    data: userAcct,
    mutate: mutateUserAcct,
    isLoading: isLoadingUserAcct
  } = useMutation(viewUserAcct);

  useEffect(() => {
    mutateUserAcct();
  }, []);
  return (
    <div className="flex w-full flex-col  gap-5 px-2 pb-5 lg:w-[85%] ">
      <SettingsNavbar />
      <div className="flex w-full flex-col gap-3">
        <div className="flex flex-row justify-between gap-5 rounded-md bg-white px-8 py-3">
          <div className="flex flex-row gap-3 px-3 py-3">
            <div className="my-auto flex rounded-full bg-violet-100 px-3 py-3 text-sm font-bold text-violet-500">
              <BsBank2 />
            </div>
            <div className="flex flex-col gap-1 text-sm">
              <p className="font-bold capitalize">{userAcct?.data[0]?.account_name}</p>
              <p className=" text-violet-500">{userAcct?.data[0]?.account_no}</p>
              <p className="">{userAcct?.data[0]?.bank_name}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Link
            href="/app/settings/bank/edit"
            className=" flex cursor-pointer rounded-sm bg-blue-100 px-3 py-1 text-xs text-primary hover:bg-blue-200"
          >
            Update Bank
          </Link>
          <div className="flex cursor-pointer rounded-sm bg-red-100 px-3 py-1 text-xs text-red-500 hover:bg-red-200">
            Delete Bank
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankSettings;
