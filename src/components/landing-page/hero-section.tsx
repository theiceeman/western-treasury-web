import Image from 'next/image';
import Button from '../Button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative z-10 flex w-full pb-32 lg:h-screen mx-auto justify-center">
      <div className=" flex w-full flex-row pt-16 md:mx-20 lg:mx-44 max-w-[70rem]">
        <div className="flex w-full flex-col text-center lg:mr-14 lg:mt-16 lg:w-3/4 lg:text-left">
          <div className="flex w-full flex-col gap-10 lg:gap-8">
            {/* text-6xl */}
            <h1 className=" text-4xl font-bold md:text-6xl">
              Lorem ipsum dolor, sit consectetur
              <span className="text-primary "> OffRamp</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio delectus
              consequatur porro reprehenderit.
            </p>
            <div className="flex flex-row justify-center gap-3 lg:justify-start">
              <Link href="/auth/register">
                <Button variant="primary">get started</Button>
              </Link>
              <Link href="/auth/login">
              <Button variant="secondary">sign in</Button>
              </Link>
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
