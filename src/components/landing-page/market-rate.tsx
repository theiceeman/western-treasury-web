export function MarketRate() {
  return (
    <section className="flex  flex-col items-center justify-center bg-[#DFE2FF] md:px-[60px] md:py-[88px] lg:px-[170px] lg:py-[88px] text-center py-10 px-3">
      <h3 className="text-3xl md:text-4xl font-bold">Today’s Market Rates</h3>

      <div className="w-full rounded-[25px] shadow-xl max-w-[70rem]">
        <div className="mt-10 flex flex-col rounded-3xl bg-[#E9EBFF]">
          <div className="grid w-full grid-cols-3 items-start justify-between gap-16 border-b border-[#5860A4] px-8 py-4 pt-12 text-center text-lg font-black text-[#4A5192]">
            <div className=""> <span className="hidden md:block ">Cryptocurrency</span> </div>
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
            <div className=" ">As at 18 March, 2024, 12:02 (UTC +01:00)</div>
          </div>
        </div>
      </div>
    </section>
  );
}
