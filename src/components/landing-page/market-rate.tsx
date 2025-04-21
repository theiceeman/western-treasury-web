import { getCurrentTimeFormatted } from '@/src/lib/utils';
import { toIntNumberFormat } from '@/src/utils/helper';
import { Request } from '@/src/utils/https';

async function fetchPrice(symbol: string) {
  const response = await fetch(
    `https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD&api_key=9f84f53a067dd8d02d95feb9fef27ba64208ef313e0c7367a8e7f2d49f5866e7`,{

      cache: 'no-store',
      next: { revalidate: 0 }
    }
  );
  const data = await response.json();
  return data.USD;
}

async function fetchRates() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_OFFRAMP_SERVER}/app/user/global-configuration`
  );
  const data = await response.json();
  return data;
}

export async function MarketRate() {
  const systemRates = await fetchRates();
  const solPrice = await fetchPrice('SOL');
  const ethPrice = await fetchPrice('ETH');
  const btcPrice = await fetchPrice('BTC');

  const todayDate = getCurrentTimeFormatted();

  return (
    <section id="rates" className="flex  flex-col items-center justify-center bg-[#DFE2FF] px-3 py-10 text-center md:px-[60px] md:py-[88px] lg:px-[170px] lg:py-[88px]">
      <h3 className="text-3xl font-black md:text-4xl">Today’s Market Rates</h3>

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
            <div className=" ">${toIntNumberFormat(btcPrice)}</div>
            <div className=" ">{toIntNumberFormat(systemRates?.USD_NGN_SELL_RATE)}/$</div>
          </div>
          <div className="grid w-full grid-cols-3 items-start justify-between gap-16 border-b border-[#5860A4] px-8 py-4 text-center text-base font-bold text-black">
            <div className=" ">SOL</div>
            <div className=" ">${toIntNumberFormat(solPrice)}</div>
            <div className=" ">{toIntNumberFormat(systemRates?.USD_NGN_SELL_RATE)}/$</div>
          </div>
          <div className="grid w-full grid-cols-3 items-start justify-between gap-16 border-b border-[#5860A4] px-8 py-4 text-center text-base font-bold text-black">
            <div className=" ">ETH</div>
            <div className=" ">${toIntNumberFormat(ethPrice)}</div>
            <div className=" ">{toIntNumberFormat(systemRates?.USD_NGN_SELL_RATE)}/$</div>
          </div>
          <div className="text-l grid w-full  grid-cols-1 items-start justify-end gap-16 px-8 py-4 pb-12 text-center text-black md:text-nowrap md:text-end">
            <div className=" ">As at {todayDate}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
