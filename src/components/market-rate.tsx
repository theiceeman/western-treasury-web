export function MarketRate() {
  return (
    <section className="flex  flex-col items-center justify-center bg-[#DFE2FF] p-[88px]">
      <h3 className="text-[54px]/[45px] font-semibold">Today’s Market Rates</h3>

      <div className="w-full rounded-[25px] shadow-xl">
        <div className="flex items-start justify-between px-8 py-4">
          <span className="text-[32px]/[37px] text-[#4A5192]">Cryptocurrency</span>
          <span className="text-[32px]/[37px] text-[#4A5192]">Price</span>
          <span className="text-[32px]/[37px] text-[#4A5192]">Rates</span>
        </div>
      </div>
    </section>
  );
}
