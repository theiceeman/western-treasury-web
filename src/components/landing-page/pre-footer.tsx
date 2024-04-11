import Image from 'next/image';
import Button from '../Button';

const PreFooter = () => {
  return (
    <>
      <section className="flex flex-col px-3 my-16 md:my-0 md:py-[88px] md:px-[60px] lg:px-[170px] lg:py-[80px]">
        <div className="  flex w-full rounded-[25px] bg-[url('/bg-primary.svg')] pt-12 md:px-[70px] md:pt-[50px] lg:pt-[88px] lg:py-[50px] shadow-xl">
          <div className=" flex w-full flex-col lg:flex-row items-start justify-between gap-10 px-[15px]">
            <div className="flex w-full lg:w-1/2 flex-col justify-center text-center lg:text-left lg:justify-between gap-10 lg:gap-28 mt-5 text-3xl md:text-4xl font-bold">
              <div className="w-full">
                Join our 300,000+ users exchanging and setting long term goals!
              </div>
              <div className="flex justify-center lg:justify-start">
                <Button>sign up now</Button>
              </div>
            </div>
            <div className="  flex w-full justify-center lg:hidden ">
              <Image src={'/hero/half-app-demo.svg'} alt="demo" width={220} height={600} />
            </div>
            <div className="  w-1/2 justify-end hidden lg:flex ">
              <Image src={'/hero/app-demo.svg'} alt="demo" width={190} height={600} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PreFooter;
