import Image from 'next/image';

export function HowItWorks() {
  return (
    <>
      <div className="_card-1 relative  h-[518px] w-full rounded-[25px] shadow-xl">
        <Image
          src={'/get-finance.svg'}
          alt=""
          height={482}
          width={774}
          className=" absolute right-0 top-0"
          priority
        />

        <div className="relative left-[84px] top-[139px] flex max-w-[642px] flex-col items-start justify-center gap-4 px-[10px]">
          <h4 className="text-[32px]/[60px] font-bold text-primary">TRANSFER</h4>

          <h5 className="text-[48px]/[60px] font-bold text-[#816CC0]">Get finance across</h5>

          <p className="text-[24px]/[40px] font-medium text-[#816DC1]">
            Explore an array of investment options that offer superior returns, curated and
            managed by experts, all from the comfort of your device. Simple, right?
          </p>
        </div>
      </div>
      <div className="flex w-full items-start gap-5">
        <div className="_card-2 bg-exchange relative h-[560px] w-[868px] rounded-[25px] bg-contain bg-center">
          <div className="relative left-[84px] top-[100px] flex max-w-[642px] flex-col items-start justify-center gap-4 px-[10px]">
            <h4 className="text-[32px]/[60px] font-bold text-primary">EXCHANGE</h4>

            <h5 className="text-[48px]/[60px] font-bold text-[#74645E]">
              Convert fiat to crypto
            </h5>

            <p className="text-[24px]/[40px] font-medium text-[#74645E]">
              Explore an array of investment options that offer superior returns, curated and
              managed by experts, all from the comfort of your device. Simple, right?
            </p>
          </div>
        </div>
        <div className="_card-2 relative h-[560px] w-[400px] rounded-[25px] bg-contain bg-center"></div>
      </div>
      <div className="_card-3 relative  h-[518px] w-full rounded-[25px] shadow-xl">
        <Image
          src={'/globe.svg'}
          alt=""
          height={482}
          width={774}
          className=" absolute right-0 top-0"
          priority
        />

        <div className="relative left-[84px] top-[139px] flex max-w-[642px] flex-col items-start justify-center gap-4 px-[10px]">
          <h4 className="text-[32px]/[60px] font-bold text-primary">TRANSFER</h4>

          <h5 className="text-[48px]/[60px] font-bold">Get finance across</h5>

          <p className="text-[24px]/[40px] font-medium">
            Explore an array of investment options that offer superior returns, curated and
            managed by experts, all from the comfort of your device. Simple, right?
          </p>
        </div>
      </div>
    </>
  );
}
