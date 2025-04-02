'use client';
import { getGlobalConfig } from '@/src/requests/config/config.requests';
import { viewSingleTransaction } from '@/src/requests/transaction/transaction.request';
import { useAppDispatch, useAppSelector } from '@/src/stores/hooks';
import { toIntNumberFormat } from '@/src/utils/helper';
import { useEffect, useState } from 'react';
import Processing from '../../components/alerts/Processing';
import { useMutation } from 'react-query';
import { useRouter } from 'next/navigation';
import TransactionStatus from '../../components/TransactionStatus';
import { Socket, io } from 'socket.io-client';

declare global {
  interface Window {
    FlutterwaveCheckout: (options: any) => void;
  }
}

const URL = process.env.NEXT_PUBLIC_OFFRAMP_SERVER ?? '';
// Create the socket outside the component to avoid recreating it on renders
let socket: Socket | null = null;
const FW_PUBLIC_KEY = process.env.NEXT_PUBLIC_FLW_TESTNET_PUBLIC_KEY;

const Page = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const config = useAppSelector(state => state.globalConfig);
  const transaction = useAppSelector(state => state.transaction);
  const user = useAppSelector(state => state.user);
  const [bank, setBank] = useState<any>(null);

  const { data, mutate, isLoading } = useMutation(viewSingleTransaction);
  const [status, setStatus] = useState(null);

  const handleDebitCardPayment = () => {
    if (typeof window !== 'undefined' && window.FlutterwaveCheckout) {
      window.FlutterwaveCheckout({
        public_key: FW_PUBLIC_KEY,
        tx_ref: transaction?.transactionId,
        amount: transaction?.sendAmount,
        currency: 'NGN',
        payment_options: 'card',
        customer: {
          email: user?.email
        },
        callback: function (data: any) {
          console.log(data);
          // Handle successful payment here
        },
        onclose: function () {
          // Handle payment close event
          router.push('/app/overview');
        },
        customizations: {
          title: 'Western Treasury',
          description: 'Purchase',
          logo: `${process.env.NEXT_PUBLIC_OFFRAMP_CLIENT}/wt-favicon.svg`
        }
      });
    }
  };

  // Effect for handling bank data
  useEffect(() => {
    if (data) {
      setBank(JSON.parse(data?.data?.fiat_provider_result));
    }
  }, [data]);

  // Effect for socket connection and Flutterwave setup
  useEffect(() => {
    // Only initialize socket once
    if (!socket) {
      socket = io(URL, { autoConnect: false });
    }

    // Only connect if we have a transaction
    if (transaction?.transactionId) {
      socket.connect();
      socket.emit('register_connection', transaction.transactionId);

      // Set up event listener
      const handleStatusUpdate = (data: any) => {
        // console.log({ data });
        setStatus(data?.status);
      };

      socket.on('transaction_status', handleStatusUpdate);

      // Handle debit card payment if needed
      if (transaction.paymentType === 'DEBIT_CARD') {
        handleDebitCardPayment();
      }

      // Cleanup function
      return () => {
        if (socket) {
          socket.off('transaction_status', handleStatusUpdate);
          socket.emit('close_connection', transaction.transactionId);
          socket.disconnect();
        }
      };
    }
  }, [transaction?.transactionId, transaction?.paymentType, user?.email]);

  // Initial data loading
  useEffect(() => {
    dispatch(getGlobalConfig());
    if (transaction?.transactionId) {
      mutate(transaction.transactionId);
    } else {
      router.push('/app/overview');
    }
  }, [dispatch, mutate, router, transaction?.transactionId]);

  return (
    <>
      <div className="flex w-full flex-col  gap-10 px-5 pb-5 lg:w-[85%] ">
        <div className="flex flex-col gap-5 rounded-sm bg-white px-0 py-5 md:px-5">
          <div className="hidden pl-1 text-sm font-semibold uppercase text-black lg:flex">
            {' '}
            Transaction details
          </div>
          <div className="flex w-full flex-col justify-center text-center md:px-32 xl:px-48">
            <div className="flex flex-col gap-1">
              <h2 className="text-xl font-black">
                {transaction.sendAmount} {transaction.sendCurrency?.symbol}
              </h2>
              <p className="text-sm font-semibold text-slate-500">Amount</p>
            </div>
            <div className="mt-5 flex flex-col justify-start gap-4 rounded-lg p-5 text-left text-sm">
              <TransactionStatus
                status={status ?? 'TRANSACTION_CREATED'}
                txnType={data?.data?.type}
              />

              <div className="flex w-full flex-col gap-4 rounded-lg bg-[#f6f6f8] px-5 py-5 text-sm text-slate-500">
                <div className="flex w-full flex-row justify-between gap-2">
                  <div className="flex text-nowrap">Account No </div>
                  <div className="flex w-full flex-row justify-end gap-2 text-right">
                    <div className="w-[120px] whitespace-normal break-words md:w-[200px]">
                      {bank?.defaultAccountNo}
                    </div>
                    <div className="flex">
                      <img
                        src={'/icons/copy-icon.svg'}
                        className="cursor-pointer"
                        alt="logo"
                        width={13}
                        height={13}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex w-full justify-between">
                  <p> Bank</p>
                  <p> {bank?.defaultAccountBank}</p>
                </div>
              </div>
              <div className="flex w-full flex-col gap-4 rounded-lg bg-[#f6f6f8] px-5 py-5 text-sm text-slate-500">
                <div className="flex w-full justify-between">
                  <p>Amount to send</p>
                  <p className="text-right">
                    {' '}
                    {transaction.sendAmount} {transaction.sendCurrency?.symbol}
                  </p>
                </div>
                <div className="flex w-full justify-between">
                  <p>Amount to receive</p>
                  <p className="text-right">
                    {' '}
                    {transaction.recieveAmount}&nbsp;{transaction.recieveCurrency?.symbol}
                  </p>
                </div>
                <div className="flex w-full justify-between">
                  <p>Fee</p>
                  <p className="text-red-500">
                    - ${toIntNumberFormat(transaction?.transactionFee)}
                  </p>
                </div>
                <div className="flex w-full justify-between">
                  <p> Rate</p>
                  <p>N{toIntNumberFormat(config?.USD_NGN_SELL_RATE)} / $</p>
                </div>
              </div>
              <div className="mt-7 flex w-full justify-center font-bold text-slate-500">
                <p className="text-center">
                  Need help or have questions? <br />{' '}
                  <span className="text-blue-500">
                    <a href="">Contact us</a>
                  </span>
                  &nbsp;or&nbsp;
                  <span className="text-blue-500">
                    <a href="">view FAQs</a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
