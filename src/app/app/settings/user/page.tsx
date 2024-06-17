'use client';
import Link from 'next/link';
import SettingsNavbar from '../../components/settings/SettingsNavbar';
import { useMutation } from 'react-query';
import { viewLoggedInUser } from '@/src/requests/account/account.requests';
import { useEffect } from 'react';
import { getFirstLetters } from '@/src/utils/helper';

const UserSettings = () => {
  const {
    data: user,
    mutate: mutateLoggedInUser,
    isLoading: isLoadingUserAcct
  } = useMutation(viewLoggedInUser);

  useEffect(() => {
    mutateLoggedInUser();
  }, []);
  return (
    <>
      <div className="flex w-full flex-col  gap-5 px-2 pb-5 lg:w-[85%] ">
        <SettingsNavbar />
        <div className="flex w-full flex-col gap-3">
          <div className="flex flex-col gap-5 rounded-md bg-white px-8 py-3">
            <div className="flex flex-row gap-3 px-3 py-3">
              <div className="mb-auto flex rounded-full bg-violet-100 px-3 py-3 text-xs font-bold uppercase text-violet-500 md:my-auto">
                {getFirstLetters(
                  user?.data?.first_name ?? user?.data?.email,
                  user?.data?.last_name ?? user?.data?.email
                )}
              </div>
              <div className="flex flex-col">
                <p className="font-bold capitalize">
                  {user?.data?.first_name ?? '-'}&nbsp;{user?.data?.last_name}
                </p>{' '}
                <div className="flex flex-col gap-3 md:flex-row">
                  <p className="text-sm text-violet-500">{user?.data?.email}</p>
                  <div className="mr-auto flex rounded-sm bg-green-100 px-3 py-1 text-xs text-green-500 md:mx-0">
                    Verified
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 rounded-md bg-white px-8 py-3">
            <div className="flex flex-col gap-3 px-3 py-3">
              <h2 className="font-bold">Personal information</h2>
              <div className="mt-4 flex w-full text-xs capitalize">
                <div className="flex w-1/2 flex-col gap-4 lg:w-1/3">
                  <div className="flex flex-col gap-2">
                    <p className="uppercase tracking-wide text-slate-500">First Name</p>
                    <p>{user?.data?.first_name}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="uppercase tracking-wide text-slate-500">Country</p>
                    <p>{user?.data?.country}</p>
                  </div>
                </div>
                <div className="flex w-1/2 flex-col gap-4 lg:w-2/3">
                  <div className="flex flex-col gap-2">
                    <p className="uppercase tracking-wide text-slate-500">Last Name</p>
                    <p>{user?.data?.last_name}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="uppercase tracking-wide text-slate-500">Phone No</p>
                    <p>{user?.data?.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link
            href="/app/settings/user/edit"
            className="ml-auto flex cursor-pointer rounded-sm bg-blue-100 px-3 py-1 text-xs text-primary hover:bg-blue-200"
          >
            Edit Profile
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserSettings;
