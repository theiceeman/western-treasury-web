import Image from 'next/image';
import Button from '../Button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative z-10 flex w-full  lg:h-screen mx-auto justify-center">
      <div className=" flex w-full flex-row pt-16 md:mx-28 lg:ml-38 lg:mr-0 max-w-[100rem]">
        <div className="flex w-full flex-col text-center  lg:mt-16 lg:w-2/4 lg:text-left">
          <div className="flex w-full flex-col gap-10 lg:gap-8">
            {/* text-6xl */}
            <h1 className=" text-4xl font-bold md:text-6xl">
              Settle your crypto transactions 
              <span className="text-primary italic"> Instantly</span>
            </h1>
            <p className="text-xl">
              Western Treasury offers financial services, engineered to make your use of cryptocurrency products easy and seamless.
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
        <div className=" hidden w-2/4 lg:flex justify-end ml-16">
          <Image src={'/hero/app-demo-hand-2.svg'} className='size-full' alt="demo" width={1000} height={800} />
        </div>
      </div>
    </section>
  );
}
