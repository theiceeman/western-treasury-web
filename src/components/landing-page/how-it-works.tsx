import Image from 'next/image';

export function HowItWorks() {
  return (
    <>
      <div className="_card-1 relative flex h-[400px] w-full rounded-[25px] py-5 shadow-xl transition ease-in">
        <div className=" absolute right-0 top-0 hidden h-full w-3/4 pb-5 lg:block">
          <Image
            src={'/get-finance.svg'}
            alt=""
            fill={true}
            objectFit="cover"
            className=""
            priority
          />
        </div>
        <div className="relative  flex w-full max-w-[642px] flex-col items-start justify-center gap-4 px-4 py-5 text-center md:px-[60px] md:py-[70px] lg:text-left">
          <p className="w-full text-center text-3xl font-bold text-primary md:text-[32px]/[60px] lg:text-left">
            BUY CRYPTO
          </p>

          <p className="w-full text-center text-2xl font-bold capitalize text-[#816CC0] md:text-[48px]/[60px] lg:text-left">
            with your debit card
          </p>

          <p className=" w-full text-lg font-medium text-[#816DC1] md:text-[20px]/[30px]">
            Purchase cryptocurrency easily using your debit card, and get desired currency in
            your preferred wallet instantly. Simple, right?
          </p>
        </div>
      </div>

      <div className="hidden w-full items-start gap-5  lg:flex">
        <div className="_card-2 bg-exchange relative flex h-[400px]  w-[868px] rounded-[25px] bg-contain bg-center py-5">
          <div className="relative mx-14  flex h-full max-w-[642px] flex-col items-start justify-center gap-4 px-[10px]">
            <p className="w-full text-center text-3xl font-bold text-primary md:text-[32px]/[60px] lg:text-left">
              SEND CRYPTO
            </p>

            <p className="w-full text-center text-2xl font-bold capitalize text-[#74645E] md:text-[48px]/[60px] lg:text-left">
              receive fiat in account
            </p>

            <p className=" w-full text-lg font-medium text-[#74645E] md:text-[20px]/[30px]">
              Looking to cash in on your crypto? <br /> Just send us the crypto and receive the
              fiat equivalent in your bank account instantly. <br /> No special calls to a
              liquidity provider.
            </p>
          </div>
        </div>
        <div className="_card-2 bg-exchange relative h-[400px]  w-[400px] rounded-[25px] bg-contain bg-center py-5">
          <Image
            src={'/features/exchange.svg'}
            alt=""
            fill={true}
            objectFit="cover"
            className=""
            priority
          />
        </div>
      </div>

      <div className="_card-2 relative flex h-[400px] w-full rounded-[25px] shadow-xl lg:hidden">
        <div className=" absolute right-0 top-0 hidden h-full w-3/4 pb-5 lg:block">
          <Image
            src={'/features/exchange.svg'}
            alt=""
            fill={true}
            objectFit="cover"
            className=""
            priority
          />
        </div>
        <div className="relative  flex  w-full max-w-[642px] flex-col items-start justify-center gap-4 px-4 py-5 text-center md:px-[60px] md:py-[70px] lg:text-left">
          <p className="w-full text-center text-3xl font-bold text-primary md:text-[32px]/[60px] lg:text-left">
            SEND CRYPTO
          </p>

          <p className="w-full text-center text-2xl font-bold capitalize text-[#74645E] md:text-[48px]/[60px]  lg:text-left">
            receive fiat in account
          </p>

          <p className="text-[20px]/[30px] font-medium  text-[#74645E] ">
            Looking to cash in on your crypto? <br /> Just send us the crypto and receive the
            fiat equivalent in your bank account instantly. <br /> No special calls to a
            liquidity provider.
          </p>
        </div>
      </div>

      <div className="_card-3 relative flex h-[400px] w-full rounded-[25px] py-5 shadow-xl">
        <div className=" absolute right-0 top-7 hidden h-full w-1/3 justify-center pb-5 lg:block">
          <Image
            src={'/features/globe.svg'}
            alt=""
            width={350}
            height={350}
            // fill={true}
            className=""
            priority
          />
        </div>
        <div className="relative  flex w-full max-w-[642px] flex-col items-start justify-center gap-4 px-4 py-5 text-center md:px-[60px] md:py-[70px] lg:text-left">
          <p className="w-full text-center text-3xl font-bold text-primary md:text-[32px]/[60px] lg:text-left">
            BANK TRANSFER
          </p>

          <p className="w-full text-center text-2xl font-bold capitalize text-[#292828] md:text-[48px]/[60px] lg:text-left">
            receive crypto instantly
          </p>

          <p className=" w-full text-lg font-medium md:text-[20px]/[30px] ">
            Funding your crypto wallet should be smooth. <br /> Send us a bank transfer &
            receive crypto in your wallet.
          </p>
        </div>
      </div>
    </>
  );
}
