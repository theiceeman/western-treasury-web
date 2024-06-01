'use client';
import Button from '@/src/components/Button';
import { useAppDispatch, useAppSelector } from '@/src/stores/hooks';
import Link from 'next/link';
import CurrencyDropdown from '../../components/CurrencyDropdown';
import { toIntNumberFormat } from '@/src/utils/helper';
import { useEffect, useState } from 'react';
import { convertToUsd } from '@/src/lib/utils';
import {
  createSell,
  validateOfframpRate
} from '@/src/requests/transaction/transaction.request';
import { getGlobalConfig } from '@/src/requests/config/config.requests';
import { useFormik } from 'formik';
import { useMutation } from 'react-query';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const config = useAppSelector(state => state.globalConfig);
  const transaction = useAppSelector(state => state.transaction);
  const [details, setDetails] = useState<any>(null);

  const { mutate: mutateSell, isLoading: isLoadingSell } = useMutation(createSell, {
    onSuccess: () => {
      // mutateCurrencies();
      // formik.resetForm();
      router.push('/app/processing');
    }
  });

  const formik = useFormik({
    initialValues: {
      amountInUsd: 0,
      senderCurrencyId: '',
      recieverCurrencyId: ''
    },
    onSubmit: values => {
      mutateSell({ ...values });
    }
  });

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
    formik.setFieldValue('amountInUsd', result?.data[0].amountInUsd);
  };

  useEffect(() => {
    dispatch(getGlobalConfig());

    if (transaction) {
      fetchSendRate();
      formik.setFieldValue('senderCurrencyId', transaction.sendCurrency?.unique_id);
      formik.setFieldValue('recieverCurrencyId', transaction.recieveCurrency?.unique_id);
    } else {
      router.push('/app/sell');
    }
  }, []);
  return (
    <>
      <div className="flex w-full flex-col  gap-10 px-5 pb-5 lg:w-[85%] ">
        <div className="flex flex-col gap-5 rounded-sm bg-white px-0 py-5 md:px-5">
          <div className="hidden pl-1 text-sm font-semibold uppercase text-black lg:flex">
            Confirmation
          </div>
          {/* <div className="flex w-full flex-col justify-center px-48 text-center"> */}
          <div className="flex w-full flex-col justify-center  text-center md:px-32 xl:px-48">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-black">Review your Transaction.</h2>
              <p className="text-sm">
                You will send {transaction.sendAmount} {transaction.sendCurrency?.symbol} to us
                & recieve {toIntNumberFormat(transaction.recieveAmount)} NGN
              </p>
            </div>
            <div className="mt-5 flex flex-col justify-start gap-4 rounded-lg p-5 text-left text-sm">
              <div className="flex flex-col gap-1">
                <p>Amount you send</p>
                <div className="flex w-full flex-row gap-3 rounded-lg  border  bg-white px-[10px] py-[6px] ">
                  <input
                    type="text"
                    value={toIntNumberFormat(transaction.sendAmount)}
                    disabled={true}
                    className="h-full w-full rounded-lg bg-white bg-opacity-30  text-sm text-black outline-none outline-1 outline-offset-2 focus:border-none focus:outline-none"
                  />
                  {transaction?.sendCurrency && (
                    <CurrencyDropdown
                      isDisabled={true}
                      defaultSymbol={transaction?.sendCurrency?.symbol}
                    />
                  )}
                </div>
              </div>
              <div className="flex w-full flex-col gap-4 rounded-lg bg-[#f6f6f8] px-5 py-5 text-sm text-slate-500">
                <div className="flex w-full justify-between">
                  <p>Fee</p>
                  <p className="text-red-500">- ${toIntNumberFormat(details?.fee)}</p>
                </div>
                <div className="flex w-full justify-between">
                  <p> Rate</p>
                  <p>$1 ~ N{toIntNumberFormat(config?.USD_NGN_BUY_RATE)}</p>
                </div>
                <div className="flex w-full justify-between">
                  <p>Bank</p>
                  <p className="text-right"> Zenith Bank plc</p>
                </div>
                <div className="flex w-full justify-between gap-7">
                  <p>Acct. No.</p>
                  <p className="text-right">235889485</p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p>Amount you recieve</p>
                <div className="flex w-full flex-row gap-3 rounded-lg  border  bg-white px-[10px] py-[6px] ">
                  <input
                    type="text"
                    value={toIntNumberFormat(transaction.recieveAmount)}
                    disabled={true}
                    className="h-full w-full rounded-lg bg-white bg-opacity-30  text-sm text-black outline-none outline-1 outline-offset-2 focus:border-none focus:outline-none"
                  />
                  <CurrencyDropdown isDisabled={true} defaultSymbol="NGN" />
                </div>
              </div>
              <div className="mt-7 flex">
                  <Button
                    onClick={() => formik.handleSubmit()}
                    variant="primary"
                    className=" w-full text-[#5860A4]"
                  >
                    confirm
                  </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
