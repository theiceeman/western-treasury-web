import Button from '@/src/components/Button';
import Link from 'next/link';

const Page = () => {
  return (
    <>
      <div className="flex w-full flex-col  gap-10 px-5 pb-5 lg:w-[85%] ">
        <div className="flex flex-col gap-5 rounded-sm bg-white px-5 py-5">
          <div className="flex pl-1 text-sm font-semibold uppercase text-black">
            {' '}
            Confirmation
          </div>
          <div className="flex w-full flex-col justify-center px-48 text-center">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-black">Review your Transaction.</h2>
              <p className="text-sm">You will send 50 USDT to us & recieve 49,900 NGN</p>
            </div>
            <div className="mt-5 flex flex-col justify-start gap-4 rounded-lg p-5 text-left text-sm">
              <div className="flex flex-col gap-1">
                <p>Amount you send</p>
                <div className="flex w-full flex-row gap-3 rounded-lg  border  bg-white px-[10px] py-[6px] ">
                  <input
                    type="text"
                    value="50000"
                    disabled={true}
                    className="h-full w-full rounded-lg bg-white bg-opacity-30  text-sm text-black outline-none outline-1 outline-offset-2 focus:border-none focus:outline-none"
                  />
                  <div className="flex justify-center gap-2 rounded-lg bg-[#f6f6f8] px-4 py-2 text-center">
                    <img src={'/icons/usdt-logo.svg'} alt="logo" width={20} height={20} />
                    <p className="whitespace-nowrap">BTC</p>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col gap-4 rounded-lg bg-[#f6f6f8] px-5 py-5 text-sm text-slate-500">
                <div className="flex w-full justify-between">
                  <p>Wallet</p>
                  <div className="flex gap-2">
                    <p>0x377123Ed74fBE8ddb47E30aEbCf267c55EFa7b33</p>
                    <img src={'/icons/copy-icon.svg'} className='cursor-pointer' alt="logo" width={13} height={13} />
                  </div>
                </div>
                <div className="flex w-full justify-between">
                  <p>Transaction fee</p>
                  <p>$0.00</p>
                </div>
                <div className="flex w-full justify-between">
                  <p>Current Rate</p>
                  <p>$0.00</p>
                </div>
                <div className="flex w-full justify-between">
                  <p>Network</p>
                  <p> BSC (Bep 20)</p>
                </div>
                <div className="flex w-full justify-between">
                  <p>Your Bank Name</p>
                  <p> Zenith Bank plc</p>
                </div>
                <div className="flex w-full justify-between">
                  <p>Your Bank Account No.</p>
                  <p>235889485</p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p>Amount you recieve</p>
                <div className="flex w-full flex-row gap-3 rounded-lg  border  bg-white px-[10px] py-[6px] ">
                  <input
                    type="text"
                    value="50000"
                    disabled={true}
                    className="h-full w-full rounded-lg bg-white bg-opacity-30  text-sm text-black outline-none outline-1 outline-offset-2 focus:border-none focus:outline-none"
                  />
                  <div className="flex justify-center gap-2 rounded-lg bg-[#f6f6f8] px-4 py-2 text-center">
                    <img src={'/icons/us.svg'} alt="logo" width={20} height={20} />
                    <p className="whitespace-nowrap">BTC</p>
                  </div>
                </div>
              </div>
              <div className="mt-7 flex">
                <Link className="w-full" href="/app/confirm">
                  <Button variant="primary" className=" w-full text-[#5860A4]">
                    confirm
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
