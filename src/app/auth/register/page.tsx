'use client';
import Button from '@/src/components/Button';
import { signupUser } from '@/src/requests/account/account.requests';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMutation } from 'react-query';

const Page = () => {
  const router = useRouter();

  const { mutate, isLoading } = useMutation(signupUser, {
    onSuccess: () => {
      router.push('/auth/login');
      formik.resetForm();
    }
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      password_confirmation: ''
    },
    onSubmit: values => {
      mutate({ ...values });
      // formik.resetForm()
    }
  });

  return (
    <>
      <div className="flex h-screen flex-col">
        <div className=" relative flex h-24 w-full bg-gray-500 lg:hidden">
          <div className="absolute top-0 z-0 h-full w-full bg-[url('/auth/login-bg.svg')] "></div>
        </div>
        <div className="flex h-screen w-full">
          <div className="relative hidden h-full w-1/3 lg:flex">
            <div className="absolute top-0 z-0 h-full w-full bg-[url('/auth/login-bg.svg')] bg-cover"></div>
          </div>
          <div className="flex h-full w-full px-5 pb-20 pt-32  md:w-2/3 md:px-16 lg:px-40">
            <div className="flex max-w-[26rem] flex-col gap-8">
              <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-black capitalize">Create an account</h1>
                <p className="text-sm font-semibold text-slate-600">
                  Explore the easiest way of purchasing and selling your cryptocurrency.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <input
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  type="text"
                  placeholder="Email"
                  className="h-[45px] rounded-sm px-[10px] py-[3px] text-sm outline-none outline-1 outline-offset-0 focus:border focus:outline focus:outline-[#495192]"
                />
                <input
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  type="password"
                  placeholder="Password"
                  className="h-[45px] rounded-sm px-[10px] py-[3px] text-sm outline-none outline-1 outline-offset-0 focus:border focus:outline focus:outline-[#495192]"
                />
                <input
                  name="password_confirmation"
                  value={formik.values.password_confirmation}
                  onChange={formik.handleChange}
                  type="password"
                  placeholder="Confirm Password"
                  className="h-[45px] rounded-sm px-[10px] py-[3px] text-sm outline-none outline-1 outline-offset-0 focus:border focus:outline focus:outline-[#495192]"
                />
              </div>
              <Button
                onClick={() => formik.handleSubmit()}
                isLoading={isLoading}
                disabled={isLoading}
                variant="primary"
              >
                Register
              </Button>
              <div className="flex flex-col gap-3 font-semibold">
                <p className="">
                  Already have an account?&nbsp;
                  <Link href="/auth/login">
                    <span className="text-primary">Sign in</span>
                  </Link>
                </p>
              </div>
              <div className="flex h-full flex-col justify-end gap-2 text-sm text-slate-600">
                <p>
                  OffRamp is registered with the Corporate Affairs Commission, RC Number:
                  1623222
                </p>
                <p>OffRamp. All rights reserved © 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
