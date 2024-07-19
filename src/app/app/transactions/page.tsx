'use client';
import StatusIndicator from '@/src/components/StatusIndicator';
import { viewUserTransactions } from '@/src/requests/transaction/transaction.request';
import { formatDateTime, toIntNumberFormat } from '@/src/utils/helper';
import { useEffect } from 'react';
import { useMutation } from 'react-query';
import TransactionTable from '../components/tables/TransactionTable';

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
            <TransactionTable
              table={{
                isLoading: isLoadingTransactions,
                header: ['Txn ID', 'Type', 'status', 'amount ($)', 'Date'],
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
                  <div className={'font-medium'}>{toIntNumberFormat(Number(item.amount_in_usd))}</div>,
                  <div className={'font-medium'}>{formatDateTime(item.created_at)}</div>
                ])
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
