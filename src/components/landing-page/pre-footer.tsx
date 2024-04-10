import Image from 'next/image';
import Button from '../Button';

const PreFooter = () => {
  return (
    <>
      <section className="flex flex-col px-[170px] py-[88px]">
        <div className="  h-[518px] w-full rounded-[25px] bg-[url('/bg-primary.svg')] px-[70px] py-[88px] shadow-xl">
          <div className=" flex w-full flex-row items-start justify-between gap-4 px-[10px]">
            <div className="flex w-1/2 flex-col justify-between gap-28 mt-5 text-4xl font-bold">
              <div className="w-full">
                Join our 300,000+ users exchanging and setting long term goals!
              </div>
              <div className="flex justify-start">
                <Button>sign up now</Button>
              </div>
            </div>
            <div className="mt-[-60px]  flex w-1/2 justify-end">
              <Image src={'/hero/app-demo.svg'} alt="demo" width={220} height={600} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PreFooter;
