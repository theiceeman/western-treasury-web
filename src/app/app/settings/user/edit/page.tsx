'use client';
import Button from '@/src/components/Button';
import { convertToUsd } from '@/src/lib/utils';
import { getGlobalConfig } from '@/src/requests/config/config.requests';
import { viewCurrencies } from '@/src/requests/currency/currency.requests';
import { getAppSettings } from '@/src/requests/setting/setting.requests';
import { validateOfframpRate } from '@/src/requests/transaction/transaction.request';
import { useAppDispatch, useAppSelector } from '@/src/stores/hooks';
import { resetTransaction, setTransaction } from '@/src/stores/slices/transactionSlice';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useMutation } from 'react-query';
import { toIntNumberFormat } from '@/src/utils/helper';

const Page = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const {
    data: currencies,
    mutate: mutateCurrencies,
    isLoading: isLoadingCurrencies
  } = useMutation(viewCurrencies);

  const formik = useFormik({
    initialValues: {
      type: 'buy',
      inProgress: true,
      sendAmount: 0,
      recieveAmount: 0,
      sendCurrency: '',
      recieveCurrency: ''
    },
    onSubmit: values => {
      dispatch(setTransaction({ ...values }));
      router.push('/app/buy/confirm');
    }
  });

  useEffect(() => {}, []);

  return (
    <>
      <div className="flex w-full flex-col  gap-10 px-5  pb-5 lg:w-[85%] ">
        <div className="flex flex-col gap-5 rounded-sm bg-white px-5 py-5 ">
          <div className="flex w-full flex-col justify-center text-center md:px-32 xl:px-64">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-black">Verification of your personal details.</h2>
              <p className="text-md">Enter your correct details</p>
            </div>
            <div className="mt-5 flex flex-col justify-start gap-4 rounded-lg p-5 text-left text-sm">
              <div className="flex flex-col gap-1">
                <p>First Name</p>
                <div className="flex w-full flex-row gap-3 rounded-lg  border  bg-white px-[10px] py-[6px] ">
                  <input
                    name="sendAmount"
                    value={formik.values.sendAmount}
                    onChange={(e: any) => {
                      formik.handleChange(e);
                    }}
                    type="text"
                    className="h-full w-full rounded-lg bg-white bg-opacity-30 py-2  text-sm text-slate-600 outline-none outline-1 outline-offset-2 focus:border-none focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p>Last Name</p>
                <div className="flex w-full flex-row gap-3 rounded-lg  border  bg-white px-[10px] py-[6px] ">
                  <input
                    name="recieveAmount"
                    value={formik.values.recieveAmount}
                    onChange={(e: any) => {
                      formik.handleChange(e);
                    }}
                    type="text"
                    className="h-full w-full rounded-lg bg-white bg-opacity-30 py-2  text-sm text-slate-600 outline-none outline-1 outline-offset-2 focus:border-none focus:outline-none"
                  />
                </div>
              </div>
              <div className="mt-7 flex">
                <Button
                  onClick={() => formik.handleSubmit()}
                  variant="primary"
                  className=" w-full text-[#5860A4]"
                >
                  Save
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
