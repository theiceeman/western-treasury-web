'use client';
import Button from '@/src/components/Button';
import { useAppDispatch, useAppSelector } from '@/src/stores/hooks';
import { resetTransaction, setTransaction } from '@/src/stores/slices/transactionSlice';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import CurrencyDropdown from '../components/CurrencyDropdown';
import { getGlobalConfig } from '@/src/requests/config/config.requests';
import { useEffect, useRef, useState } from 'react';
import { convertToUsd } from '@/src/lib/utils';
import { getAppSettings } from '@/src/requests/setting/setting.requests';
import { toIntNumberFormat } from '@/src/utils/helper';
import { validateSellRate } from '@/src/requests/transaction/transaction.request';
import { useMutation } from 'react-query';
import { viewCurrencies } from '@/src/requests/currency/currency.requests';

const Page = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const config = useAppSelector(state => state.globalConfig);
  const transaction = useAppSelector(state => state.transaction);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [sendingCurrency, setSendingCurrency] = useState<any>(null);
  const [recievingCurrency, setRecievingCurrency] = useState<any>(null);

  const {
    data: currencies,
    mutate: mutateCurrencies,
    isLoading: isLoadingCurrencies
  } = useMutation(viewCurrencies);

  const formik = useFormik({
    initialValues: {
      type: 'sell',
      amountInUsd: 0,
      paymentType: '',
      inProgress: true,
      sendAmount: 0,
      recieveAmount: 0,
      sendCurrency: '',
      recieveCurrency: ''
    },
    onSubmit: async values => {
      let amountInUsd = convertToUsd(values.sendAmount, sendingCurrency?.market_usd_rate);
      let { data } = await validateSellRate({
        amountInUsd,
        amountType: 'sending',
        senderCurrencyId: sendingCurrency.unique_id,
        recieverCurrencyId: recievingCurrency?.unique_id
      });

      dispatch(setTransaction({ ...values, amountInUsd, transactionFee: data[0].fee }));
      router.push('/app/sell/confirm');
    }
  });

  const convertToRecieveCurrency = async (value: number) => {
    if (value === 0) return;

    let amountInUsd = convertToUsd(value, sendingCurrency?.market_usd_rate);
    let result = await validateSellRate({
      amountInUsd,
      amountType: 'sending',
      senderCurrencyId: sendingCurrency.unique_id,
      recieverCurrencyId: recievingCurrency?.unique_id
    });
    formik.setFieldValue('amountInUsd', amountInUsd);
    formik.setFieldValue('recieveAmount', result?.data[0].actual_amount_user_receives);
  };

  const convertToSendCurrency = async (value: number) => {
    if (value === 0) return;

    let amountInUsd = convertToUsd(value, recievingCurrency?.market_usd_rate);
    let result = await validateSellRate({
      amountInUsd,
      amountType: 'receiving',
      senderCurrencyId: sendingCurrency.unique_id,
      recieverCurrencyId: recievingCurrency?.unique_id
    });
    formik.setFieldValue('sendAmount', result?.data[0].actual_amount_user_sends);
  };

  const delayConvertToRecieve = (value: number) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setTimeout(() => {
      convertToRecieveCurrency(value);
    }, 500);
  };

  const delayConvertToSend = (value: number) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setTimeout(() => {
      convertToSendCurrency(value);
    }, 500);
  };

  // update sendCurrency, recieveAmount when sending currency changes
  useEffect(() => {
    formik.setFieldValue('sendCurrency', sendingCurrency);
    convertToRecieveCurrency(formik.values.sendAmount);
  }, [sendingCurrency]);

  // update recieveCurrency, sendAmount when recieving currency changes
  useEffect(() => {
    formik.setFieldValue('recieveCurrency', recievingCurrency);
    convertToSendCurrency(formik.values.recieveAmount);
  }, [recievingCurrency]);

  // get global data, currrencies and app settings.
  useEffect(() => {
    dispatch(getGlobalConfig());
    dispatch(getAppSettings());
    // dispatch(resetTransaction());
    formik.resetForm();
    mutateCurrencies();
    formik.setFieldValue('paymentType', transaction.paymentType);
  }, []);

  return (
    <>
      <div className="flex w-full flex-col  gap-10 px-5 pb-5 lg:w-[85%] ">
        <div className="flex flex-col gap-5 rounded-sm bg-white px-5 py-5">
          <div className="hidden pl-1 font-bold lg:flex"> Sell</div>
          <div className="flex w-full flex-col justify-center  text-center md:px-32 xl:px-64">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-black">
                Send us crypto, recieve Naira in your bank.
              </h2>
              <p className="text-md">Please enter an amount to proceed</p>
            </div>
            <div className="mt-5 flex flex-col justify-start gap-4 rounded-lg p-5 text-left text-sm">
              <div className="flex flex-col gap-1">
                <p>Amount you send</p>
                <div className="flex w-full flex-row gap-3 rounded-lg  border  bg-white px-[10px] py-[6px] ">
                  <input
                    name="sendAmount"
                    value={formik.values.sendAmount}
                    onChange={(e: any) => {
                      formik.handleChange(e);
                      delayConvertToRecieve(e.target.value);
                    }}
                    type="number"
                    className="h-full w-full rounded-lg bg-white bg-opacity-30  text-sm text-black outline-none outline-1 outline-offset-2 focus:border-none focus:outline-none"
                  />
                  <CurrencyDropdown
                    isDisabled={false}
                    defaultSymbol={
                      transaction?.inProgress === true
                        ? transaction?.recieveCurrency?.symbol
                        : currencies?.data[0]?.symbol
                    }
                    onValueChange={setSendingCurrency}
                  />
                </div>
              </div>
              <div className="flex w-full flex-col gap-4 rounded-lg bg-[#f6f6f8] px-5 py-5 text-sm text-slate-500">
                <div className="flex w-full justify-between">
                  <p> Rate</p>
                  <p>$1 = N{config.USD_NGN_BUY_RATE} </p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p>Amount you recieve</p>
                <div className="flex w-full flex-row gap-3 rounded-lg  border  bg-white px-[10px] py-[6px] ">
                  <input
                    name="recieveAmount"
                    value={formik.values.recieveAmount}
                    onChange={(e: any) => {
                      formik.handleChange(e);
                      delayConvertToSend(e.target.value);
                    }}
                    type="number"
                    className="h-full w-full rounded-lg bg-white bg-opacity-30  text-sm text-black outline-none outline-1 outline-offset-2 focus:border-none focus:outline-none"
                  />
                  <CurrencyDropdown
                    isDisabled={true}
                    defaultSymbol={
                      transaction?.inProgress === true
                        ? transaction?.recieveCurrency?.symbol
                        : currencies?.data.filter((e: any) => e.symbol == 'NGN')[0]?.symbol
                    }
                    onValueChange={setRecievingCurrency}
                  />
                </div>
              </div>
              <div className="mt-7 flex">
                <Button
                  onClick={() => formik.handleSubmit()}
                  variant="primary"
                  className=" w-full text-[#5860A4]"
                >
                  proceed
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
