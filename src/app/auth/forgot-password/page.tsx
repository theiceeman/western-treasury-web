import Button from '@/src/components/Button';

const Page = () => {
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
                <h1 className="text-2xl font-black capitalize">Reset your password</h1>
                <p className="text-sm font-semibold text-slate-600">
                  Just enter your email, we will send you mail with a reset link.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <input
                  type="text"
                  placeholder="Email"
                  className="h-[45px] rounded-sm px-[10px] py-[3px] text-sm outline-none outline-1 outline-offset-0 focus:border focus:outline focus:outline-[#495192]"
                />
              </div>
              <Button variant="primary">Submit</Button>
              {/* <div className="flex flex-col gap-3 font-semibold">
                <a href="">
                  <p className="text-primary">I forgot my password</p>
                </a>
                <p className="">
                  Don't have an account?&nbsp;
                  <a href="">
                    <span className="text-primary">Sign up</span>
                  </a>
                </p>
              </div> */}
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
