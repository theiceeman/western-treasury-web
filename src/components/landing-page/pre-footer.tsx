import Image from 'next/image';
import Button from '../Button';
import Link from 'next/link';

const PreFooter = () => {
  return (
    <>
      <section className="flex flex-col px-3 my-16 md:my-0 md:py-[88px] md:px-[60px] lg:px-[170px] lg:py-[80px]">
        <div className="  flex w-full rounded-[25px] bg-[#C8CCF7] pt-12 md:px-[70px] md:pt-[50px] lg:pt-[70px] lg:py-[50px] shadow-xl max-w-[70rem] mx-auto">
          <div className=" flex w-full flex-col lg:flex-row items-start justify-between gap-10 px-[15px]">
            <div className="flex w-full lg:w-1/2 flex-col justify-center text-center lg:text-left lg:justify-between gap-10 lg:gap-28 mt-5 text-3xl md:text-4xl font-bold">
              <div className="w-full">
               Bid farewell to slow settlement times. <br /> Join Western treasury!
              </div>
              <div className="flex justify-center lg:justify-start">
                <Link href="/auth/register"><Button variant='primary'>sign up now</Button></Link>
              </div>
            </div>
            <div className="  flex w-full justify-center lg:hidden ">
              <Image src={'/hero/half-app-demo.svg'} alt="demo" width={220} height={600} />
            </div>
            <div className="  w-1/2 justify-end hidden lg:flex ">
              <Image src={'/hero/app-demo-2.svg'} alt="demo" width={210} height={600} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PreFooter;
