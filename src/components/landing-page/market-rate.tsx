import { getCurrentTimeFormatted } from '@/src/lib/utils';

export function MarketRate() {
  const todayDate = getCurrentTimeFormatted();
  return (
    <section className="flex  flex-col items-center justify-center bg-[#DFE2FF] px-3 py-10 text-center md:px-[60px] md:py-[88px] lg:px-[170px] lg:py-[88px]">
      <h3 className="text-3xl font-bold md:text-4xl">Today’s Market Rates</h3>

      <div className="w-full max-w-[70rem] rounded-[25px] shadow-xl">
        <div className="mt-10 flex flex-col rounded-3xl bg-[#E9EBFF]">
          <div className="grid w-full grid-cols-3 items-start justify-between gap-16 border-b border-[#5860A4] px-8 py-4 pt-12 text-center text-lg font-black text-[#4A5192]">
            <div className="">
              {' '}
              <span className="hidden md:block ">Cryptocurrency</span>{' '}
            </div>
            <div className=" ">Price</div>
            <div className=" ">Rates</div>
          </div>
          <div className="grid w-full grid-cols-3 items-start justify-between gap-16 border-b border-[#5860A4] px-8 py-4 text-center text-base font-bold text-black">
            <div className=" ">BTC</div>
            <div className=" ">$4500</div>
            <div className=" ">1500/$</div>
          </div>
          <div className="grid w-full grid-cols-3 items-start justify-between gap-16 border-b border-[#5860A4] px-8 py-4 text-center text-base font-bold text-black">
            <div className=" ">BTC</div>
            <div className=" ">$4500</div>
            <div className=" ">1500/$</div>
          </div>
          <div className="grid w-full grid-cols-3 items-start justify-between gap-16 border-b border-[#5860A4] px-8 py-4 text-center text-base font-bold text-black">
            <div className=" ">BTC</div>
            <div className=" ">$4500</div>
            <div className=" ">1500/$</div>
          </div>
          <div className="text-l grid w-full  grid-cols-1 items-start justify-end gap-16 px-8 py-4 pb-12 text-center text-black md:text-nowrap md:text-end">
            <div className=" ">As at {todayDate}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
