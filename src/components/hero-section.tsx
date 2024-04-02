import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full">
      <Image
        src={'/hero-section-img.svg'}
        width={1909}
        height={360}
        alt="hero section"
        className="absolute left-0 top-[-100px]"
      />
      {/* <div className="relative flex w-full flex-col  px-[88px] md:flex-row">
        <div className="w-[60%] space-y-4  ">
          <h1 className="text-[55px]/[80px]">
            Incliusive crypto exchange for everyone using OffRamp
          </h1>
        </div>
        <div className="w-[40%]">
          <Image src={'/a[[_demo.png'} alt="demo" width={311} height={625} priority />
        </div>
      </div> */}
      <div className="relative left-[90px] top-[100px] flex max-w-[800px] flex-col gap-10">
        <h1 className="text-[55px]/[80px]">
          Incliusive crypto exchange for everyone using{' '}
          <span className="text-primary">OffRamp</span>
        </h1>
        <p className="text-[32px]/[40px]">
          Incliusive crypto banking for everyone ,The future of crypto banking for everyone
          ,The future of crypto
        </p>
        <div className="flex justify-start">
          <button className="gap-5 rounded-[20px] bg-primary px-[35px] py-3 text-[20px]/[20px] text-white">
            Get started {'->'}
          </button>
        </div>
      </div>
    </section>
  );
}
