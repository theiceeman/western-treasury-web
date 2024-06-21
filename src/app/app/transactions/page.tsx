'use client';
import StatusIndicator from '@/src/components/StatusIndicator';
import { viewUserTransactions } from '@/src/requests/transaction/transaction.request';
import { formatDateTime } from '@/src/utils/helper';
import { useEffect } from 'react';
import { useMutation } from 'react-query';
import BaseTable from '../components/tables/BaseTable';

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
        <div className="flex flex-col gap-5 rounded-sm bg-white px-5 py-5">
          <div className="flex pl-1 font-bold"> Transaction History</div>
          <div className="flex  h-full w-full overflow-y-auto border sm:rounded-lg">
            <BaseTable
              table={{
                isLoading: isLoadingTransactions,
                header: ['Txn ID', 'Type', 'status', 'amount', 'type'],
                column: transactions?.data?.map((item: any, key: any) => [
                  <div className={'font-medium'}>{item.unique_id}</div>,
                  <div className={'font-medium'}>
                    {item.type === 'CRYPTO_OFFRAMP' ? 'Sell' : 'Buy'}
                  </div>,
                  <div className={'font-medium'}>
                    <StatusIndicator
                      type={
                        item.status === ('TRANSACTION_CREATED' || 'TRANSFER_CONFIRMED')
                          ? 'PROCESSING'
                          : item.status
                      }
                    />
                  </div>,
                  <div className={'font-medium'}>{item.amount_in_usd}</div>,
                  <div className={'font-medium'}>{formatDateTime(item.created_at)}</div>
                ])
              }}
            />

            {/* <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
              <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Txn ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    type
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    amount&nbsp;($)
                  </th>
                  <th scope="col" className="px-6 py-3">
                    time
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactions?.data?.length > 0 &&
                  transactions?.data?.map((e: any, key: any) => (
                    <tr
                      key={key}
                      className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800"
                    >
                      <th
                        scope="row"
                        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                      >
                        {e.unique_id}
                      </th>
                      <td className="px-6 py-4">
                        {e.type === 'CRYPTO_OFFRAMP' ? 'Sell' : 'Buy'}
                      </td>
                      <td className="px-6 py-4">
                        <StatusIndicator
                          type={
                            e.status === ('TRANSACTION_CREATED' || 'TRANSFER_CONFIRMED')
                              ? 'PROCESSING'
                              : e.status
                          }
                        />
                      </td>
                      <td className="px-6 py-4">{e.amount_in_usd}</td>
                      <td className="text-nowrap px-6 py-4">{formatDateTime(e.created_at)}</td>
                    </tr>
                  ))}
              </tbody>
            </table> */}

          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
