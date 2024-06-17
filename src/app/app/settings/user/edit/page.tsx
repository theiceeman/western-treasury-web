'use client';
import Button from '@/src/components/Button';
import { useAppDispatch } from '@/src/stores/hooks';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { useMutation } from 'react-query';
import CountryCode from '@/src/utils/iso-country-code';
import { getLoggedInUser, updateUser } from '@/src/requests/account/account.requests';

const Page = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { mutate, isLoading } = useMutation(updateUser, {
    onSuccess: () => {
      dispatch(getLoggedInUser());
      router.push('/app/settings/user');
    }
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      country: ''
    },
    onSubmit: values => {
      mutate({ ...values, first_name: values.firstName, last_name: values.lastName });
    }
  });

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
                    name="firstName"
                    value={formik.values.firstName}
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
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={(e: any) => {
                      formik.handleChange(e);
                    }}
                    type="text"
                    className="h-full w-full rounded-lg bg-white bg-opacity-30 py-2  text-sm text-slate-600 outline-none outline-1 outline-offset-2 focus:border-none focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p>Country</p>
                <div className="flex w-full flex-row gap-3 rounded-lg  border  bg-white px-[10px] py-[6px] ">
                  <select
                    name="country"
                    value={formik.values.country}
                    onChange={formik.handleChange}
                    required={true}
                    disabled={false}
                    className="h-full w-full rounded-lg bg-white bg-opacity-30 py-2  text-sm text-slate-600 outline-none outline-1 outline-offset-2 focus:border-none focus:outline-none"
                  >
                    <option value="" disabled>
                      Country of origin
                    </option>
                    {CountryCode.filter(e => e.name === 'Nigeria').map(e => (
                      <option key={e.code} value={e.name}>
                        {e.name}
                        {' ' + e.flag}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mt-7 flex">
                <Button
                  onClick={() => formik.handleSubmit()}
                  variant="primary"
                  className=" w-full text-[#5860A4]"
                >
                  {isLoading ? 'Processing' : 'Save'}
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
