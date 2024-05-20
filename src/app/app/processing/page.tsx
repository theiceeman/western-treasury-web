import Button from '@/src/components/Button';
import Link from 'next/link';

const Page = () => {
  return (
    <>
      <div className="flex w-full flex-col  gap-10 px-5 pb-5 lg:w-[85%] ">
        <div className="flex flex-col gap-5 rounded-sm bg-white px-0 md:px-5 py-5">
          <div className="hidden pl-1 text-sm font-semibold uppercase text-black lg:flex">
            {' '}
            Transaction details
          </div>
          <div className="flex w-full flex-col justify-center text-center md:px-32 xl:px-48">
            <div className="flex flex-col gap-1">
              <h2 className="text-xl font-black">50.00 USD</h2>
              <p className="text-sm font-semibold text-slate-500">Amount</p>
            </div>
            <div className="mt-5 flex flex-col justify-start gap-4 rounded-lg p-5 text-left text-sm">
              <div className="flex w-full flex-col gap-4 rounded-lg  bg-green-100 px-5 py-5 text-sm text-slate-500">
                <div className="flex w-full gap-2">
                  <img
                    src={'/icons/status/success.svg'}
                    className="cursor-pointer"
                    alt="logo"
                    width={20}
                    height={20}
                  />
                  <p className="font-bold text-green-700">Completed</p>
                </div>
              </div>
              <div className="flex w-full flex-col gap-4 rounded-lg  bg-yellow-100 px-5 py-5 text-sm text-slate-500">
                <div className="flex w-full gap-2">
                  <img
                    src={'/icons/status/warning.svg'}
                    className="cursor-pointer"
                    alt="logo"
                    width={20}
                    height={20}
                  />
                  <p className="font-bold text-yellow-700">
                    Always confirm you're sending, to the correct network.
                  </p>
                </div>
              </div>
              <div className="flex w-full flex-col gap-4 rounded-lg bg-[#f6f6f8] px-5 py-5 text-sm text-slate-500">
                <div className="flex flex-row gap-2 w-full justify-between">
                  <div className='flex'>Wallet</div>
                  <div className="flex flex-row gap-2 w-full text-right justify-end">
                    <div className="break-words whitespace-normal w-[120px] md:w-[200px]">0x377123Ed74fBE8ddb47E30aEbCf267c55EFa7b33</div>
                    <div className="flex">
                    <img
                      src={'/icons/copy-icon.svg'}
                      className="cursor-pointer"
                      alt="logo"
                      width={13}
                      height={13}
                    />
                    </div>
                  </div>
                </div>
                <div className="flex w-full justify-between">
                  <p>Amount to send</p>
                  <p className='text-right'>USDT 20.00</p>
                </div>
                <div className="flex w-full justify-between">
                  <p>Amount to recieve</p>
                  <p className='text-right'>NGN 20,000.00</p>
                </div>
                <div className="flex w-full justify-between">
                  <p>Transaction fee</p>
                  <p>$0.00</p>
                </div>
                <div className="flex w-full justify-between">
                  <p>Rate</p>
                  <p>$0.00</p>
                </div>
                <div className="flex w-full justify-between">
                  <p>Network</p>
                  <p> BSC (Bep 20)</p>
                </div>
              </div>
              <div className="mt-7 flex w-full justify-center font-bold text-slate-500">
                <p className="text-center">
                  Need help or have questions? <br />{' '}
                  <span className="text-blue-500">
                    <a href="">Contact us</a>
                  </span>
                  &nbsp;or&nbsp;
                  <span className="text-blue-500">
                    <a href="">view FAQs</a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
