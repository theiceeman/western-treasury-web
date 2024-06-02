'use client';
import { viewUserTransactions } from '@/src/requests/transaction/transaction.request';
import { formatDateTime } from '@/src/utils/helper';
import { useEffect } from 'react';
import { useMutation } from 'react-query';

const Page = () => {
  const {
    data: transactions,
    mutate: mutateTransactions,
    isLoading: isLoadingTransactions
  } = useMutation(viewUserTransactions);

  useEffect(() => {
    mutateTransactions();
  }, []);
  return (
    <>
      <div className="flex w-full flex-col  gap-10 px-5 pb-5 lg:w-[85%] ">
        <div className="flex flex-col gap-5 rounded-md bg-white px-8 py-3">
          <div className="mx-3 my-3 flex rounded-md bg-[#F0F0F2] px-3 py-1">
            <div className="flex rounded-sm bg-white px-4 py-4 text-center font-bold justify-center capitalize">
              {' '}
              security
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
