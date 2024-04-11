import Image from 'next/image';
import Button from '../Button';

export default function HeroSection() {
  return (
    <section className="relative z-10 flex h-screen w-full">
      <div className=" md:mx-20 flex w-full flex-row pt-16 lg:mx-44">
        <div className="lg:mt-16 flex w-full flex-col text-center lg:mr-14 lg:w-3/4 lg:text-left">
          <div className="flex w-full flex-col gap-10 lg:gap-8">
            <h1 className="text-6xl font-bold">
              Lorem ipsum dolor, sit consectetur
              <span className="text-primary"> OffRamp</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio delectus
              consequatur porro reprehenderit.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button>get started</Button>
            </div>
          </div>
        </div>
        <div className=" mt-[-200px] hidden w-1/4 lg:flex">
          <Image src={'/hero/app-demo.svg'} alt="demo" width={327} height={640} />
        </div>
      </div>
    </section>
  );
}
