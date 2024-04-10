import Image from 'next/image';

const Testimonials = () => {
  return (
    <>
      <section className="flex flex-col px-[170px] py-[88px]">
        <h3 className="ml-5 text-4xl font-bold">What our users say</h3>
        <div className="mt-12 flex w-full rounded-sm bg-[#D3D0D0] bg-opacity-20 px-16 py-16">
          <div className="flex w-1/2 flex-col gap-12 pr-28 pt-8">
            <p className="text-3xl font-semibold">Making a difference together</p>
            <p className="w-full">
              Using Offramp was very easy, i easily send crypto to my partner. He has a web3
              charity so sending crypto was very easy using offramp.
            </p>
            <p className="text-3xl font-semibold text-[#8B8989]">Kai and Ling</p>
            <div className="flex flex-row gap-7">
              <div className="h-[30px] w-[30px] rounded-full bg-[#DFE0E0] items-center justify-center flex">
                <Image
                  src={'/arrow-left.svg'}
                  alt="testimonial"
                  height={20}
                  width={20}
                  className=""
                />
              </div>
              <div className="h-[30px] w-[30px] rounded-full bg-[#DFE0E0] items-center justify-center flex">
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
          <div className="flex w-1/2">
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
      </section>
    </>
  );
};

export default Testimonials;
