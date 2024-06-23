import Image from 'next/image';

export function HowItWorks() {
  return (
    <>
      <div className="_card-1 relative flex py-5 h-[400px] w-full rounded-[25px] shadow-xl transition ease-in">
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
        <div className="relative  flex w-full max-w-[642px] flex-col items-start justify-center gap-4 text-center px-4 py-5 md:px-[60px] md:py-[70px] lg:text-left">
          <p className="w-full text-center text-3xl md:text-[32px]/[60px] font-bold text-primary lg:text-left">
            TRANSFER
          </p>

          <p className="w-full text-center text-2xl md:text-[48px]/[60px] font-bold text-[#816CC0] lg:text-left">
            Get finance across
          </p>

          <p className=" text-lg md:text-[20px]/[30px] w-full font-medium text-[#816DC1]">
            Explore an array of investment options that offer superior returns, curated and
            managed by experts, all from the comfort of your device. Simple, right?
          </p>
        </div>
      </div>


      <div className="hidden w-full items-start gap-5  lg:flex">
        <div className="_card-2 bg-exchange relative flex py-5  h-[400px] w-[868px] rounded-[25px] bg-contain bg-center">
          <div className="relative mx-14  flex max-w-[642px] h-full flex-col items-start justify-center gap-4 px-[10px]">
            <p className="w-full text-center text-3xl md:text-[32px]/[60px] font-bold text-primary lg:text-left">
            EXCHANGE
          </p>

          <p className="w-full text-center text-2xl md:text-[48px]/[60px] font-bold text-[#74645E] lg:text-left">
            Convert to crypto
          </p>

          <p className=" text-lg md:text-[20px]/[30px] w-full font-medium text-[#74645E]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A et, nesciunt ipsa voluptatibus velit voluptate doloribus maiores. Aspernatur, corporis officiis!
          </p>
          </div>
        </div>
        <div className="_card-2 bg-exchange relative py-5  h-[400px] w-[400px] rounded-[25px] bg-contain bg-center"><Image
            src={'/features/exchange.svg'}
            alt=""
            fill={true}
            objectFit="cover"
            className=""
            priority
          /></div>
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
        <div className="relative  flex  w-full max-w-[642px] flex-col items-start justify-center gap-4 px-4 py-5 md:px-[60px] md:py-[70px] text-center lg:text-left">
          <p className="w-full text-center text-3xl md:text-[32px]/[60px] font-bold text-primary lg:text-left">
            EXCHANGE
          </p>

          <p className="w-full text-center text-2xl md:text-[48px]/[60px] font-bold text-[#74645E]  lg:text-left">
            Convert to crypto
          </p>

          <p className="text-[20px]/[30px] font-medium  text-[#74645E] ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae minima asperiores
            quasi ut aliquam alias cum laboriosam saepe ab quam?
          </p>
        </div>
      </div>


      <div className="_card-3 relative flex py-5 h-[400px] w-full rounded-[25px] shadow-xl">
        <div className=" absolute right-0 top-7 hidden h-full justify-center w-1/3 pb-5 lg:block">
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
        <div className="relative  flex w-full max-w-[642px] flex-col items-start justify-center gap-4 px-4 py-5 md:px-[60px] md:py-[70px] text-center lg:text-left">
        <p className="w-full text-center text-3xl md:text-[32px]/[60px] font-bold text-primary lg:text-left">
            TRANSFER
          </p>

          <p className="w-full text-center text-2xl md:text-[48px]/[60px] font-bold text-[#292828] lg:text-left">
            Get finance across
          </p>

          <p className=" text-lg md:text-[20px]/[30px] w-full font-medium ">
            Explore an array of investment options that offer superior returns, curated and
            managed by experts, all from the comfort of your device. Simple, right?
          </p>
        </div>
      </div>
    </>
  );
}
