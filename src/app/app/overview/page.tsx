'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import PaymentMethodModal from '../components/modals/PaymentMethodModal';
import CreditCardIcon from '../components/icons/CreditCardIcon';
import ArrowRightIcon from '../components/icons/ArrowRightIcon';
import { useMutation } from 'react-query';
import { viewCurrencies } from '@/src/requests/currency/currency.requests';
import { formatDateTime, toIntNumberFormat } from '@/src/utils/helper';
import { viewUserTransactions } from '@/src/requests/transaction/transaction.request';
import SkeletonCurrencyCard from '../components/skeletons/SkeletonCurrencyCard';
import StatusIndicator from '@/src/components/StatusIndicator';
import TransactionTable from '../components/tables/TransactionTable';

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [transactionType, setTransactionType] = useState<string | null>(null);
  const scrollableDivRef = useRef<HTMLDivElement>(null);

  const scrollDiv = () => {
    if (scrollableDivRef.current) {
      scrollableDivRef.current.scrollBy({
        left: 100, // Adjust this value as needed for horizontal scroll
        behavior: 'smooth'
      });
    }
  };

  const {
    data: currencies,
    mutate: mutateCurrencies,
    isLoading: isLoadingCurrencies
  } = useMutation(viewCurrencies);

  const {
    data: transactions,
    mutate: mutateTransactions,
    isLoading: isLoadingTransactions
  } = useMutation(viewUserTransactions);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  useEffect(() => {
    mutateCurrencies();
    mutateTransactions();
  }, []);
  return (
    <>
      <PaymentMethodModal
        transactionType={transactionType}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        closeModal={closeModal}
      />

      <div className="flex w-full flex-col gap-2 px-2  pb-5 lg:gap-10 lg:px-5  xl:w-[85%] ">
        <div className="flex bg-white">
          <div
            ref={scrollableDivRef}
            className="flex w-full gap-3 overflow-x-auto rounded-sm px-3 py-3 lg:gap-5  lg:px-5 lg:py-5"
          >
            {isLoadingCurrencies ? (
              <>
                <SkeletonCurrencyCard />
                <SkeletonCurrencyCard />
                <SkeletonCurrencyCard />
                <SkeletonCurrencyCard />
              </>
            ) : (
              currencies?.data?.map((e: any, key: any) => (
                <div
                  key={key}
                  className="flex min-w-[260px] flex-grow flex-col gap-2 rounded-sm border px-5 py-5 hover:border-secondary"
                >
                  <div className="flex w-full">
                    <Image src={e.logo} alt="logo" width={32} height={32} priority />
                  </div>
                  <div className="flex w-full flex-col">
                    <p className="text-nowrap text-sm font-semibold capitalize text-[#8592AD]">
                      {e.name}
                    </p>
                    <p className="font-semibold text-black">
                      <span className="text-[#8592AD]">$&nbsp;</span>
                      { e.market_usd_rate}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
          <div onClick={scrollDiv} className="flex cursor-pointer px-6">
            <Image src={'/icons/carat-right.svg'} alt="logo" width={17} height={16} priority />
          </div>
        </div>
        <div className="flex flex-row gap-2 rounded-sm bg-white px-3 py-2 lg:gap-5 lg:px-5 lg:py-5">
          <div
            onClick={() => {
              setTransactionType('buy');
              openModal();
            }}
            className="flex w-1/2 cursor-pointer flex-row justify-center gap-2 rounded-sm border px-2 py-2 hover:border-secondary lg:px-5  lg:py-5"
          >
            <div className="flex gap-3">
              <div className="mx-auto flex w-full justify-end">
                <div className="flex rounded-full bg-violet-100 px-2 py-2 text-violet-500">
                  <CreditCardIcon />
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-nowrap  pt-2 text-black">Buy</p>
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              setTransactionType('sell');
              openModal();
            }}
            className="flex w-1/2 cursor-pointer flex-row justify-center gap-2 rounded-sm border px-2 py-2 hover:border-secondary lg:px-5 lg:py-5"
          >
            <div className="flex gap-3">
              <div className="mx-auto flex w-full justify-end">
                <div className="flex rounded-full bg-orange-100 px-2 py-2 text-orange-500">
                  <ArrowRightIcon />
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-nowrap pt-2 text-black">Sell</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 rounded-sm bg-white px-5 py-5">
          <div className="flex pl-1 font-bold">Recent Transactions</div>
          <div className="flex  h-full w-full overflow-y-auto border sm:rounded-lg">
            <TransactionTable
              table={{
                isLoading: isLoadingTransactions,
                header: ['Txn ID', 'Type', 'status', 'amount ($)', 'type'],
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
