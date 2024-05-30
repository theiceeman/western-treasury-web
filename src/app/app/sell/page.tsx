'use client';
import Button from '@/src/components/Button';
import { useAppDispatch, useAppSelector } from '@/src/stores/hooks';
import { setTransaction } from '@/src/stores/slices/transactionSlice';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import CurrencyDropdown from '../components/CurrencyDropdown';
import { getGlobalConfig } from '@/src/requests/config/config.requests';
import { useEffect, useState } from 'react';
import { convertToUsd } from '@/src/lib/utils';
import { getAppSettings } from '@/src/requests/setting/setting.requests';
import { toIntNumberFormat } from '@/src/utils/helper';
import { validateOfframpRate } from '@/src/requests/transaction/transaction.request';
import { useMutation } from 'react-query';
import { viewCurrencies } from '@/src/requests/currency/currency.requests';
import { debounce } from 'lodash';

const Page = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const config = useAppSelector(state => state.globalConfig);
  const transaction = useAppSelector(state => state.transaction);
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
      inProgress: true,
      sendAmount: 0,
      recieveAmount: 0,
      sendCurrency: '',
      recieveCurrency: ''
    },
    onSubmit: values => {
      dispatch(setTransaction({ ...values }));
      router.push('/app/sell/confirm');
    }
  });

  const fetchSendRate = async (value: number) => {
    if (!sendingCurrency || !recievingCurrency) return;
    let sendingAmountInUsd = convertToUsd(value, sendingCurrency.market_usd_rate);

    let result = await validateOfframpRate({
      amountInUsd: sendingAmountInUsd,
      senderCurrencyId: sendingCurrency.unique_id,
      recieverCurrencyId: recievingCurrency?.unique_id
    });

    formik.setFieldValue('recieveAmount', result?.data[0].actual_amount_user_receives);
    return result?.data[0].actual_amount_user_receives;
  };

  const fetchReceiveRate = async (value: number) => {
    if (!recievingCurrency || !sendingCurrency) return;

    let receiveAmountInUsd = convertToUsd(value, recievingCurrency.market_usd_rate);

    let result = await validateOfframpRate({
      amountInUsd: receiveAmountInUsd,
      senderCurrencyId: sendingCurrency.unique_id,
      recieverCurrencyId: recievingCurrency?.unique_id
    });

    formik.setFieldValue('sendAmount', result?.data[0].actual_amount_user_sends);
    return result?.data[0].actual_amount_user_sends;
  };

  const debouncedFetchSend = debounce(fetchSendRate, 500);
  const debouncedReceiveSend = debounce(fetchReceiveRate, 500);

  // fetch & update details of the recieving currency
  useEffect(() => {
    if (!currencies || currencies?.data?.length < 1) return;

    let ngn = currencies?.data.filter((e: any) => e.symbol === 'NGN');
    setRecievingCurrency(ngn[0]);
  }, [currencies]);

  // update recieve input amounts if recieve currency is updated.
  // useEffect(() => {
  //   if (recievingCurrency && sendingCurrency) {
  //     let receiveAmountUsd = convertToUsd(
  //       formik.values.recieveAmount,
  //       recievingCurrency?.market_usd_rate
  //     );

  //     fetchReceiveRate(receiveAmountUsd).then((amtUserSends: number) => {
  //       formik.setFieldValue('sendAmount', amtUserSends);
  //       formik.setFieldValue('sendCurrency', sendingCurrency.symbol);
  //     });
  //   }
  // }, [recievingCurrency]);

  // update send input amount if send currency is updated.
  useEffect(() => {
    if (sendingCurrency && recievingCurrency) {
      formik.setFieldValue('sendCurrency', sendingCurrency);

      let sendAmountUsd = convertToUsd(
        formik.values.sendAmount,
        sendingCurrency.market_usd_rate
      );
      fetchSendRate(sendAmountUsd).then((amtUserReceives: number) => {
        formik.setFieldValue('recieveAmount', amtUserReceives);
        formik.setFieldValue('recieveCurrency', recievingCurrency);
      });
    }
    if (formik.values.sendAmount) debouncedFetchSend(formik.values.sendAmount);
  }, [sendingCurrency]);

  // useEffect(() => {
  //   if (formik.values.sendAmount) debouncedFetchSend(formik.values.sendAmount);
  // }, [sendingCurrency]);

  // useEffect(() => {
  //   console.log('zxzx', transaction);
  //   if (recievingCurrency) formik.setFieldValue('recieveCurrency', recievingCurrency);
  //   if (formik.values.recieveAmount) debouncedReceiveSend(formik.values.recieveAmount);
  // }, [recievingCurrency]);

  // set form input values, if a sell transaction is already in progress.
  useEffect(() => {
    if (transaction?.inProgress && transaction?.type == 'sell') {
      formik.setFieldValue('sendAmount', transaction?.sendAmount);
      formik.setFieldValue('recieveAmount', transaction?.recieveAmount);
      formik.setFieldValue('sendCurrency', transaction?.sendCurrency);
      formik.setFieldValue('recieveCurrency', transaction?.recieveCurrency);

      setSendingCurrency(transaction?.sendCurrency);
    }
  }, [transaction]);

  // get global data, currrencies and app settings.
  useEffect(() => {
    dispatch(getGlobalConfig());
    dispatch(getAppSettings());
    mutateCurrencies();
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
                      debouncedFetchSend(e.target.value);
                    }}
                    type="number"
                    className="h-full w-full rounded-lg bg-white bg-opacity-30  text-sm text-black outline-none outline-1 outline-offset-2 focus:border-none focus:outline-none"
                  />
                  <CurrencyDropdown
                    isDisabled={false}
                    defaultSymbol={transaction?.sendCurrency?.symbol ?? currencies?.data[0].symbol}
                    onValueChange={setSendingCurrency}
                  />
                </div>
              </div>
              <div className="flex w-full flex-col gap-4 rounded-lg bg-[#f6f6f8] px-5 py-5 text-sm text-slate-500">
                <div className="flex w-full justify-between">
                </div>
                <div className="flex w-full justify-between">
                  <p> Rate</p>
                  <p>$1 ~ N {toIntNumberFormat(config.USD_NGN_BUY_RATE)} </p>
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
                      debouncedReceiveSend(e.target.value);
                    }}
                    type="number"
                    className="h-full w-full rounded-lg bg-white bg-opacity-30  text-sm text-black outline-none outline-1 outline-offset-2 focus:border-none focus:outline-none"
                  />
                  {recievingCurrency && (
                    <CurrencyDropdown
                      isDisabled={true}
                      defaultSymbol={recievingCurrency?.symbol}
                      onValueChange={setRecievingCurrency}
                    />
                  )}
                </div>
              </div>
              <div className="mt-7 flex">
                <Link className="w-full" href="/app/confirm">
                  <Button
                    onClick={() => formik.handleSubmit()}
                    variant="primary"
                    className=" w-full text-[#5860A4]"
                  >
                    proceed
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
