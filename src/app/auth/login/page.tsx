'use client';
import Button from '@/src/components/Button';
import { loginUser } from '@/src/requests/account/account.requests';
import { saveToken } from '@/src/utils/auth-tokens';
import { showToast } from '@/src/utils/toaster';
import { useFormik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMutation } from 'react-query';

const Page = () => {
  const router = useRouter();

  const { mutate, isLoading } = useMutation(loginUser, {
    onSuccess: async (res: any) => {
      // Save token used for requests
      saveToken({
        token: res?.data?.token
      });

      showToast('Authentication Successfull.', 'success');
      setTimeout(() => {
        router.push('/app/overview');
      }, 1000);
    }
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
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
            <div className="absolute top-0 z-0 h-full w-full bg-[url('/auth/login-bg.svg')] bg-cover">
              {/* <div className="flex w-full ml-4 mt-32">
                <Image src="/wt-white-logo.svg" alt="logo" width={220} height={100} priority />
              </div> */}
            </div>
          </div>
          <div className="flex h-full w-full px-5 pb-20 pt-32  md:w-2/3 md:px-16 lg:px-40">
            <div className="flex max-w-[26rem] flex-col gap-8">
              <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-black capitalize">welcome back</h1>
                <p className="text-sm font-semibold text-slate-600">
                  Proceed to login and continue converting your currencies with ease.
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
              </div>
              <Button
                onClick={() => formik.handleSubmit()}
                isLoading={isLoading}
                disabled={isLoading}
                variant="primary"
              >
                Sign In
              </Button>
              <div className="flex flex-col gap-3 font-semibold">
                <Link href="/auth/forgot-password">
                  <p className="text-primary">I forgot my password</p>
                </Link>
                <p className="">
                  Don't have an account?&nbsp;
                  <Link href="/auth/register">
                    <span className="text-primary">Sign up</span>
                  </Link>
                </p>
              </div>
              <div className="flex h-full flex-col justify-end gap-2 text-sm text-slate-600">
                <p>
                Western Treasury is registered with the Corporate Affairs Commission as a
                subsidiary of Imperionix Technologies, <br /> RC Number: 7712869
                </p>
                <p>Western Treasury. All rights reserved © {new Date().getFullYear()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
