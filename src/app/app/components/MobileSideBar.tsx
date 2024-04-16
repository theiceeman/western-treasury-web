import Image from 'next/image';
import Link from 'next/link';

const MobileSideBar = () => {
  return (
    <>
      <div className="flex justify-between gap-3 bg-white px-5 lg:hidden">
        <div className="flex w-full text-center flex-col justify-center px-5 py-5">
          <div className="flex w-full justify-center">
            <Link href="">
              <Image src={'/icons/home-icon.svg'} alt="logo" width={27} height={27} priority />
            </Link>
          </div>
          <p className="font-bold text-primary">Home</p>
        </div>
        <div className="flex w-full text-center flex-col justify-center px-5 py-5">
          <div className="flex w-full justify-center">
            <Link href="">
              <Image src={'/icons/home-icon.svg'} alt="logo" width={27} height={27} priority />
            </Link>
          </div>
          <p className="font-bold text-primary">Home</p>
        </div>
        <div className="flex w-full text-center flex-col justify-center px-5 py-5">
          <div className="flex w-full justify-center">
            <Link href="">
              <Image src={'/icons/home-icon.svg'} alt="logo" width={27} height={27} priority />
            </Link>
          </div>
          <p className="font-bold text-primary">Home</p>
        </div>
      </div>
    </>
  );
};

export default MobileSideBar;
