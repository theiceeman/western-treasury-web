export function MarketRate() {
  return (
    <section className="flex  flex-col items-center justify-center bg-[#DFE2FF] py-[88px] px-[170px]">
      <h3 className="text-4xl font-bold">Today’s Market Rates</h3>

      <div className="w-full rounded-[25px] shadow-xl">
        <div className="mt-10 flex flex-col rounded-3xl bg-[#E9EBFF]">
          <div className="grid w-full grid-cols-3 items-start justify-between gap-16 border-b border-[#5860A4] px-8 py-4 pt-12 text-center text-lg font-black text-[#4A5192]">
            <div className=" ">Cryptocurrency</div>
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
          <div className="grid w-full grid-cols-1  items-start justify-end gap-16 text-nowrap px-8 py-4 pb-12 text-end text-l text-black">
            <div className=" ">As at 18 March, 2024, 12:02 (UTC +01:00)</div>
          </div>
        </div>
      </div>
    </section>
  );
}
