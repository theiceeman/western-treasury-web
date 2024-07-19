'use client';
import { getGlobalConfig } from '@/src/requests/config/config.requests';
import { viewSingleTransaction } from '@/src/requests/transaction/transaction.request';
import { useAppDispatch, useAppSelector } from '@/src/stores/hooks';
import { useEffect, useState } from 'react';
import Processing from '../../../components/alerts/Processing';
import { useMutation } from 'react-query';
import { useRouter } from 'next/navigation';
import Success from '../../../components/alerts/Success';
import Failed from '../../../components/alerts/Failed';

const Page = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const router = useRouter();
  const dispatch = useAppDispatch();
  const config = useAppSelector(state => state.globalConfig);
  const [bank, setBank] = useState<any>(null);

  const { data, mutate, isLoading } = useMutation(viewSingleTransaction);
  console.log({ data });

  useEffect(() => {
    if (data) {
      setBank(JSON.parse(data?.data?.fiat_provider_result));
    }
  }, [data]);

  useEffect(() => {
    dispatch(getGlobalConfig());
    if (id) {
      mutate(id);
    } else {
      router.push('/app/overview');
    }
  }, []);
  return (
    <>
      <div className="flex w-full flex-col  gap-10 px-5 pb-5 lg:w-[85%] ">
        <div className="flex flex-col gap-5 rounded-sm bg-white px-0 py-5 md:px-5">
          <div className="hidden pl-1 text-sm font-semibold uppercase text-black lg:flex">
            {' '}
            Buy Transaction
          </div>
          <div className="flex w-full flex-col justify-center text-center md:px-32 xl:px-48">
            <div className="flex flex-col gap-1">
              <h2 className="text-xl font-black">
                {data?.data?.actual_amount_user_sends} {data?.data?.sendingCurrency?.symbol}
              </h2>
              <p className="text-sm font-semibold text-slate-500">Amount</p>
            </div>
            <div className="mt-5 flex flex-col justify-start gap-4 rounded-lg p-5 text-left text-sm">
              {data?.data?.status ===
                ('TRANSACTION_CREATED' || 'TRANSFER_CONFIRMED' || 'PROCESSING') && (
                <Processing message="Confirm you're sending to the correct network & address" />
              )}

              {data?.data?.status === 'COMPLETED' && (
                <Success message="Transaction completed." />
              )}

              {data?.data?.status === 'FAILED' && <Failed message="Transaction failed." />}
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
                  <p>Amount sent</p>
                  <p className="text-right">
                    {data?.data?.actual_amount_user_sends}{' '}
                    {data?.data?.sendingCurrency?.symbol}
                  </p>
                </div>
                <div className="flex w-full justify-between">
                  <p>Amount received</p>
                  <p className="text-right">
                    {data?.data?.actual_amount_user_receives}&nbsp;
                    {data?.data?.recieverCurrency?.symbol}
                  </p>
                </div>
                <div className="flex w-full justify-between">
                  <p>Fee</p>
                  <p className="text-red-500">- ${data?.data?.fee}</p>
                </div>
                <div className="flex w-full justify-between">
                  <p> Rate</p>
                  <p>N{config?.USD_NGN_SELL_RATE} / $</p>
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
