'use client';
import Button from '@/src/components/Button';
import { useAppDispatch, useAppSelector } from '@/src/stores/hooks';
import CurrencyDropdown from '../../components/CurrencyDropdown';
import { toIntNumberFormat } from '@/src/utils/helper';
import { useEffect, useState } from 'react';
import { createBuy } from '@/src/requests/transaction/transaction.request';
import { getGlobalConfig } from '@/src/requests/config/config.requests';
import { useFormik } from 'formik';
import { useMutation } from 'react-query';
import { useRouter } from 'next/navigation';
import { viewUserAcct } from '@/src/requests/fiat-account/fiat-account.requests';
import { setTransaction } from '@/src/stores/slices/transactionSlice';

const Page = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const config = useAppSelector(state => state.globalConfig);
  const transaction = useAppSelector(state => state.transaction);
  // const [details, setDetails] = useState<any>(null);

  const { mutate, isLoading, data } = useMutation(createBuy, {
    onSuccess: res => {
      // @ts-ignore
      dispatch(setTransaction({ ...transaction, transactionId: res?.result?.unique_id }));
      router.push('/app/buy/processing');
    }
  });

  const {
    data: userAcct,
    mutate: mutateUserAcct,
    isLoading: isLoadingUserAcct
  } = useMutation(viewUserAcct);

  const formik = useFormik({
    initialValues: {
      paymentType: '',
      amountInUsd: 0,
      senderCurrencyId: '',
      recieverCurrencyId: '',
      recievingWalletAddress: ''
    },
    onSubmit: values => {
      mutate({ ...values });
    }
  });
  // console.log({transaction})

  useEffect(() => {
    mutateUserAcct();
  }, []);

  useEffect(() => {
    dispatch(getGlobalConfig());

    if (transaction && transaction?.paymentType !== '') {
      formik.setFieldValue('amountInUsd', transaction.amountInUsd);
      formik.setFieldValue('amountType', 'sending');
      formik.setFieldValue('senderCurrencyId', transaction.sendCurrency?.unique_id);
      formik.setFieldValue('recieverCurrencyId', transaction.recieveCurrency?.unique_id);
      formik.setFieldValue('recievingWalletAddress', transaction.recievingWalletAddress);
      formik.setFieldValue('paymentType', transaction.paymentType);
    } else {
      router.push('/app/overview');
    }
  }, []);
  return (
    <>
      <div className="flex w-full flex-col  gap-10 px-5 pb-5 lg:w-[85%] ">
        <div className="flex flex-col gap-5 rounded-sm bg-white px-0 py-5 md:px-5">
          <div className="hidden pl-1 text-sm font-semibold uppercase text-black lg:flex">
            Buy Confirmation
          </div>
          <div className="flex w-full flex-col justify-center  text-center md:px-32 xl:px-48">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-black">Review your Transaction.</h2>
              <p className="text-sm">
                You send {toIntNumberFormat(transaction.sendAmount)}{' '}
                {transaction.sendCurrency?.symbol} & receive{' '}
                {toIntNumberFormat(transaction.recieveAmount)}{' '}
                {transaction.recieveCurrency?.symbol}
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
                  <div className="flex"> Wallet</div>

                  <div className="flex w-full flex-row justify-end gap-2 text-right">
                    <div className="w-[120px] whitespace-normal break-words md:w-[200px]">
                      {transaction?.recievingWalletAddress}
                    </div>
                  </div>
                </div>
                <div className="flex w-full justify-between">
                  <p>Fee</p>
                  <p className="text-red-500">- ${toIntNumberFormat(transaction?.transactionFee)}</p>
                </div>
                <div className="flex w-full justify-between">
                  <p> Rate</p>
                  <p> N&nbsp;{config?.USD_NGN_SELL_RATE} / $</p>
                </div>
              </div>

              <div className="flex w-full flex-col gap-4 rounded-lg bg-[#f6f6f8] px-5 py-5 text-sm text-slate-500">
                <div className="flex w-full justify-between">
                  <p>Your Bank</p>
                  <p className="text-right"> {userAcct?.data[0]?.bank_name}</p>
                </div>
                <div className="flex w-full justify-between gap-7">
                  <p>Your Acct. No.</p>
                  <p className="text-right">{userAcct?.data[0]?.account_no}</p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p>Amount you receive</p>
                <div className="flex w-full flex-row gap-3 rounded-lg  border  bg-white px-[10px] py-[6px] ">
                  <input
                    type="text"
                    value={transaction.recieveAmount}
                    disabled={true}
                    className="h-full w-full rounded-lg bg-white bg-opacity-30  text-sm text-black outline-none outline-1 outline-offset-2 focus:border-none focus:outline-none"
                  />
                  {transaction?.recieveCurrency && (
                    <CurrencyDropdown
                      isDisabled={true}
                      defaultSymbol={transaction?.recieveCurrency?.symbol}
                    />
                  )}
                </div>
              </div>
              <div className="mt-7 flex">
                <Button
                  onClick={() => formik.handleSubmit()}
                  isLoading={isLoading}
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
