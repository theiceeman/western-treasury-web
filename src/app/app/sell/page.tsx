import Button from '@/src/components/Button';
import Image from 'next/image';

const Page = () => {
  return (
    <>
      <div className="flex w-full flex-col  gap-10 px-5 pb-5 lg:w-[85%] ">
        <div className="flex flex-col gap-5 rounded-sm bg-white px-5 py-5">
          <div className="flex pl-1 font-bold"> Sell</div>
          <div className="flex w-full flex-col justify-center px-64 text-center">
            <div className="flex flex-col">
              <h2 className="text-xl font-black">
                Send us crypto, recieve fiat in your bank.
              </h2>
              <p className="text-md">Enter amount to proceed</p>
            </div>
            <div className="mt-7 flex flex-col justify-start gap-4 rounded-lg p-5 text-left text-sm">
              <div className="flex flex-col gap-1">
                <p>Amount to send</p>
                <div className="flex w-full flex-row gap-3 rounded-lg  border  bg-white px-[10px] py-[6px] ">
                  <input
                    type="text"
                    className="h-full w-full rounded-lg bg-white bg-opacity-30  text-sm text-black outline-none outline-1 outline-offset-2 focus:border-none focus:outline-none"
                  />
                  <div className="flex justify-center gap-2 rounded-lg bg-[#f6f6f8] px-4 py-2 text-center">
                    <img src={'/icons/usdt-logo.svg'} alt="logo" width={20} height={20} />
                    <p className="whitespace-nowrap">BTC</p>
                    <img src={'/icons/carat-down.svg'} alt="logo" width={10} height={10} />
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col gap-4 rounded-lg bg-[#f6f6f8] px-5 py-5 text-sm text-slate-500">
                <div className="flex w-full justify-between">
                  <p>Transaction fee</p>
                  <p>- $0.00</p>
                </div>
                <div className="flex w-full justify-between">
                  <p>Current Rate</p>
                  <p>- $0.00</p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p>Amount to recieve</p>
                <div className="flex w-full flex-row gap-3 rounded-lg  border  bg-white px-[10px] py-[6px] ">
                  <input
                    type="text"
                    className="h-full w-full rounded-lg bg-white bg-opacity-30  text-sm text-black outline-none outline-1 outline-offset-2 focus:border-none focus:outline-none"
                  />
                  <div className="flex justify-center gap-2 rounded-lg bg-[#f6f6f8] px-4 py-2 text-center">
                    <img src={'/icons/us.svg'} alt="logo" width={20} height={20} />
                    <p className="whitespace-nowrap">BTC</p>
                    <img src={'/icons/carat-down.svg'} alt="logo" width={10} height={10} />
                  </div>
                </div>
              </div>
              <div className="flex mt-7">
              <Button variant="primary" className=" text-[#5860A4] w-full">
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
