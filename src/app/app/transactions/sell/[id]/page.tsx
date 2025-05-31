'use client';
import { getGlobalConfig } from '@/src/requests/config/config.requests';
import { viewSingleTransaction } from '@/src/requests/transaction/transaction.request';
import { useAppDispatch, useAppSelector } from '@/src/stores/hooks';
import { toIntNumberFormat } from '@/src/utils/helper';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useRouter } from 'next/navigation';
import TransactionStatus from '../../../components/TransactionStatus';
import { Socket, io } from 'socket.io-client';
import { showToast } from '@/src/utils/toaster';

const URL = process.env.NEXT_PUBLIC_OFFRAMP_SERVER ?? '';
const socket: Socket = io(URL, { autoConnect: false });

const Page = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const router = useRouter();
  const dispatch = useAppDispatch();
  const config = useAppSelector(state => state.globalConfig);
  const [tokenStandard, setTokenStandard] = useState<any>(null);

  const { data, mutate, isLoading } = useMutation(viewSingleTransaction);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    socket.connect();

    socket.emit('register_connection', id);

    socket.on('transaction_status', (data: any) => {
      // console.log({ data });
      setStatus(data?.status);
    });

    return () => {
      socket.emit('close_connection');
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    setStatus(data?.data?.status);
  }, [data]);

  useEffect(() => {
    dispatch(getGlobalConfig());
    if (id) {
      mutate(id);
    } else {
      router.push('/app/overview');
    }

    if (config?.TOKEN_STANDARD){
      setTokenStandard(config?.TOKEN_STANDARD)
    }
  }, []);

  useEffect(() => {
    if (config?.TOKEN_STANDARD){
      setTokenStandard(config?.TOKEN_STANDARD)
    }
  }, [config]);

  const handleCopy = () => {
    if (data?.data?.wallet_address) {
      navigator.clipboard
        .writeText(data.data.wallet_address)
        .then(() => {
          showToast('Wallet address copied', 'success');
        })
        .catch(err => {
          console.error('Failed to copy: ', err);
        });
    }

  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader">
          Fetching available data...
        </div>
      </div>
    );
  }

  return (
    <>


 <div className="flex w-full flex-col  gap-10 px-5 pb-5 lg:w-[85%] ">
        <div className="flex flex-col gap-5 rounded-sm bg-white px-0 py-5 md:px-5">
          <div className="hidden pl-1 text-sm font-semibold uppercase text-black lg:flex">
            {' '}
            Sell Transaction
          </div>
          <div className="flex w-full flex-col justify-center text-center md:px-32 xl:px-48">
            <div className="flex flex-col gap-1">
              <h2 className="text-xl font-black">
                {data?.data?.actual_amount_user_sends} {data?.data?.sendingCurrency?.symbol}
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
                  <div className="flex">Wallet</div>
                  <div className="flex w-full flex-row justify-end gap-2 text-right">
                    <div className="w-[120px] whitespace-normal break-words md:w-[200px]">
                      {data?.data?.wallet_address}
                    </div>
                    <div className="flex cursor-pointer" onClick={handleCopy}>
                      <img src={'/icons/copy-icon.svg'} alt="logo" width={13} height={13} />
                    </div>
                  </div>
                </div>
                <div className="flex w-full justify-between capitalize">
                  <p>Network</p>
                  {data?.data?.sendingCurrency?.network && tokenStandard && <p> {data?.data?.sendingCurrency?.network} ({tokenStandard[data?.data?.sendingCurrency?.network].toLowerCase()})</p>}
                </div>
              </div>
              <div className="flex w-full flex-col gap-4 rounded-lg bg-[#f6f6f8] px-5 py-5 text-sm text-slate-500">
                <div className="flex w-full justify-between">
                  <p>Amount sent</p>
                  <p className="text-right">
                    {data?.data?.actual_amount_user_sends}{' '}
                    {data?.data?.sendingCurrency?.symbol}
                  </p>
                </div>
                <div className="flex w-full justify-between">
                  <p>Amount received</p>
                  <p className="text-right">
                    {toIntNumberFormat(data?.data?.actual_amount_user_receives)}&nbsp;
                    {data?.data?.recieverCurrency?.symbol}
                  </p>
                </div>
                <div className="flex w-full justify-between">
                  <p>Fee</p>
                  <p className="text-red-500">- ${toIntNumberFormat(data?.data?.fee)}</p>
                </div>
                <div className="flex w-full justify-between">
                  <p> Rate</p>
                  <p>N{toIntNumberFormat(config?.USD_NGN_BUY_RATE)} / $</p>
                </div>
              </div>
              <div className="mt-7 flex w-full justify-center font-bold text-slate-500">
                <p className="text-center">
                  Need help or have questions? <br />{' '}
                  <span className="text-blue-500">
                    <a href="https://wa.me/2348183175686">Contact us</a>
                  </span>
                  {/* &nbsp;or&nbsp;
                  <span className="text-blue-500">
                    <a href="">view FAQs</a>
                  </span> */}
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
