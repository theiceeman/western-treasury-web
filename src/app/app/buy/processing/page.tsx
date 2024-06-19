'use client';
import Button from '@/src/components/Button';
import { convertToUsd } from '@/src/lib/utils';
import { getGlobalConfig } from '@/src/requests/config/config.requests';
import { validateOfframpRate, viewSingleTransaction } from '@/src/requests/transaction/transaction.request';
import { useAppDispatch, useAppSelector } from '@/src/stores/hooks';
import { toIntNumberFormat } from '@/src/utils/helper';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Success from '../../components/alerts/Success';
import Processing from '../../components/alerts/Processing';
import Failed from '../../components/alerts/Failed';
import { useMutation } from 'react-query';

const Page = () => {
  const dispatch = useAppDispatch();
  const config = useAppSelector(state => state.globalConfig);
  const transaction = useAppSelector(state => state.transaction);
  const [details, setDetails] = useState<any>(null);
  console.log({ transaction });

  const { data, mutate, isLoading } = useMutation(viewSingleTransaction);

  const fetchSendRate = async () => {
    if (!transaction?.sendCurrency || !transaction?.recieveCurrency) return;
    let sendAmountInUsd = convertToUsd(
      transaction?.sendAmount,
      transaction?.sendCurrency?.market_usd_rate
    );

    let result = await validateOfframpRate({
      amountInUsd: sendAmountInUsd,
      senderCurrencyId: transaction?.sendCurrency.unique_id,
      recieverCurrencyId: transaction?.recieveCurrency?.unique_id
    });

    setDetails(result?.data[0]);
  };

  useEffect(() => {
    dispatch(getGlobalConfig());
    if (transaction) fetchSendRate();
  }, []);
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
              {/* <Success/> */}
              <Processing message="Confirm you're sending to the correct Bank Account" />
              {/* <Failed/> */}
              <div className="flex w-full flex-col gap-4 rounded-lg bg-[#f6f6f8] px-5 py-5 text-sm text-slate-500">
                <div className="flex w-full flex-row justify-between gap-2">
                  <div className="flex">Account No </div>
                  <div className="flex w-full flex-row justify-end gap-2 text-right">
                    <div className="w-[120px] whitespace-normal break-words md:w-[200px]"></div>
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
                  <p> </p>
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
                  <p>Amount to recieve</p>
                  <p className="text-right">
                    {' '}
                    {transaction.recieveAmount} {transaction.recieveCurrency?.symbol}
                  </p>
                </div>
                <div className="flex w-full justify-between">
                  <p>Fee</p>
                  <p className="text-red-500">- ${toIntNumberFormat(details?.fee)}</p>
                </div>
                <div className="flex w-full justify-between">
                  <p> Rate</p>
                  <p>$1 ~ N{toIntNumberFormat(config?.USD_NGN_BUY_RATE)}</p>
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
