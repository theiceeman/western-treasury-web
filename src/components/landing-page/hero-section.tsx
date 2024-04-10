import Image from 'next/image';
import Button from '../Button';

export default function HeroSection() {
  return (
    <section className="relative z-10 flex h-screen w-full">
      <div className="mx-44 flex w-full pt-16 flex-row gap-10">
        <div className="mr-14 mt-16 flex w-3/4 flex-col">
          <div className="flex w-full flex-col gap-8">
            <h1 className="text-6xl font-bold">
              Lorem ipsum dolor, sit consectetur
              <span className="text-primary"> OffRamp</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio delectus
              consequatur porro reprehenderit.
            </p>
            <div className="flex justify-start">
              <Button>get started</Button>
            </div>
          </div>
        </div>
        <div className="flex w-1/4 mt-[-200px]">
          <Image src={'/app-demo.svg'} alt="demo" width={327} height={640} />
        </div>
      </div>
    </section>
  );
}
