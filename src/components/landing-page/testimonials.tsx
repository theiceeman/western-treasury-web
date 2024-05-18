import Image from 'next/image';

const Testimonials = () => {
  return (
    <>
      <section className="flex flex-col px-3 py-10 md:px-[60px] md:py-[88px] lg:px-[170px] lg:py-[88px]">
        <div className="max-w-[70rem] mx-auto">

        <h3 className="ml-5 text-4xl font-bold">Hear from our users.</h3>
        <div className="mt-12 flex w-full flex-col-reverse rounded-sm bg-[#D3D0D0] bg-opacity-20 px-5 py-16 md:flex-row md:px-16">
          <div className="flex w-full flex-col gap-12 pt-8 text-center md:w-1/2 md:text-left lg:pr-28">
            <p className="hidden text-3xl font-semibold md:block">
              Making a difference together
            </p>
            <p className="w-full">
              Using Offramp was very easy, i easily send crypto to my partner. He has a web3
              charity so sending crypto was very easy using offramp.
            </p>
            <p className="text-3xl font-semibold text-[#8B8989]">Kai and Ling</p>
            <div className="flex flex-row justify-center gap-7 md:justify-start">
              <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#DFE0E0]">
                <Image
                  src={'/arrow-left.svg'}
                  alt="testimonial"
                  height={20}
                  width={20}
                  className=""
                />
              </div>
              <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#DFE0E0]">
                <Image
                  src={'/arrow-right.svg'}
                  alt="testimonial"
                  height={20}
                  width={20}
                  className=""
                />
              </div>
            </div>
          </div>
          <div className="flex w-full md:w-1/2">
            <div className="mr-[-75px] flex">
              <Image
                src={'/btc-swap-icon.svg'}
                alt="testimonial"
                height={147}
                width={265}
                className=""
              />
            </div>
            <div className="flex">
              <Image
                src={'/testimonial-img.svg'}
                alt="testimonial"
                height={618}
                width={622}
                className=""
              />
            </div>
          </div>
        </div>
        </div>

      </section>
    </>
  );
};

export default Testimonials;
