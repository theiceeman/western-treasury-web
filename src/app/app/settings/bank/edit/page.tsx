'use client';
import Button from '@/src/components/Button';
import { useAppDispatch } from '@/src/stores/hooks';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import {
  createAcct,
  viewSupportedBanks,
  viewUserAcct
} from '@/src/requests/fiat-account/fiat-account.requests';
import { Combobox } from '@headlessui/react';

const Page = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState('');
  const [selectedBank, setSelectedBank] = useState<any>(null);

  const { mutate, isLoading } = useMutation(createAcct);
  const {
    data: supportedBanks,
    mutate: mutateSupportedBanks,
    isLoading: isLoadingSupportedBanks
  } = useMutation(viewSupportedBanks);

  const {
    data: userAcct,
    mutate: mutateUserAcct,
    isLoading: isLoadingUserAcct
  } = useMutation(viewUserAcct);

  const formik = useFormik({
    initialValues: {
      accountName: '',
      accountNo: '',
      bankName: ''
    },
    onSubmit: values => {
      mutate({ ...values, accountNo: String(values?.accountNo) });
      router.push('/app/settings/bank');
    }
  });

  const filteredBanks =
    query === ''
      ? supportedBanks?.data
      : supportedBanks?.data.filter((bank: any) => {
          return bank.name.toLowerCase().includes(query.toLowerCase());
        });

  useEffect(() => {
    if (userAcct !== undefined && userAcct?.data.length > 0) {
      formik.setFieldValue('accountName', userAcct?.data[0]?.account_name);
      formik.setFieldValue('accountNo', userAcct?.data[0]?.account_no);
      formik.setFieldValue('bankName', userAcct?.data[0]?.bank_name);
    }
  }, [userAcct]);

  useEffect(() => {
    formik.setFieldValue('bankName', selectedBank?.name);
  }, [selectedBank]);

  useEffect(() => {
    mutateSupportedBanks();
    mutateUserAcct();
  }, []);

  return (
    <>
      <div className="flex w-full flex-col  gap-10 px-5  pb-5 lg:w-[85%] ">
        <div className="flex flex-col gap-5 rounded-sm bg-white px-5 py-5 ">
          <div className="flex w-full flex-col justify-center text-center md:px-32 xl:px-64">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-black">Bank Account to recieve Fiat payment.</h2>
              <p className="text-md">Enter an account that accepts Naira</p>
            </div>
            <div className="mt-5 flex flex-col justify-start gap-4 rounded-lg p-5 text-left text-sm">
              <div className="flex flex-col gap-1">
                <p>Bank Name</p>
                <div className="relative">
                  <Combobox
                    value={selectedBank}
                    onChange={value => {
                      setSelectedBank(value);
                    }}
                  >
                    <div className="flex w-full flex-col gap-3 rounded-lg  border  bg-white px-[10px] py-[6px] ">
                      <Combobox.Input
                        name="bankName"
                        className="h-full w-full rounded-lg bg-white bg-opacity-30 py-2  text-sm text-slate-600 outline-none outline-1 outline-offset-2 focus:border-none focus:outline-none"
                        displayValue={(bank: any) => bank?.name}
                        onChange={event => setQuery(event.target.value)}
                      />
                      <Combobox.Options>
                        <div className="absolute z-10 ml-[-11px] mt-3 flex max-h-52 w-full flex-col justify-center gap-2 overflow-y-auto rounded-lg border bg-[#f6f6f8]  py-2 text-center">
                          {filteredBanks?.length > 0 &&
                            filteredBanks?.map((e: any, key: any) => (
                              <Combobox.Option key={key} value={e}>
                                {({ active }) => (
                                  <div className="flex w-full cursor-pointer flex-row justify-between gap-2 px-4 py-1 hover:bg-white ">
                                    <p className="whitespace-nowrap">{e.name}</p>
                                  </div>
                                )}
                              </Combobox.Option>
                            ))}
                        </div>
                      </Combobox.Options>
                    </div>
                  </Combobox>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p>Account Name</p>
                <div className="flex w-full flex-row gap-3 rounded-lg  border  bg-white px-[10px] py-[6px] ">
                  <input
                    name="accountName"
                    value={formik.values.accountName}
                    onChange={(e: any) => {
                      formik.handleChange(e);
                    }}
                    type="text"
                    className="h-full w-full rounded-lg bg-white bg-opacity-30 py-2  text-sm text-slate-600 outline-none outline-1 outline-offset-2 focus:border-none focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p>Account No.</p>
                <div className="flex w-full flex-row gap-3 rounded-lg  border  bg-white px-[10px] py-[6px] ">
                  <input
                    name="accountNo"
                    value={formik.values.accountNo}
                    onChange={(e: any) => {
                      formik.handleChange(e);
                    }}
                    type="number"
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
