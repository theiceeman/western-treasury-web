'use client';
import Image from 'next/image';
import SideBar from '../components/SideBar';
import Link from 'next/link';
import MobileSideBar from '../components/MobileSideBar';
import { useRef, useState } from 'react';
import PaymentMethodModal from '../components/modals/PaymentMethodModal';
import CreditCardIcon from '../components/icons/CreditCardIcon';
import ArrowRightIcon from '../components/icons/ArrowRightIcon';

const Page = () => {
  let [isOpen, setIsOpen] = useState(false);
  const scrollableDivRef = useRef<HTMLDivElement>(null);

  const scrollDiv = () => {
    if (scrollableDivRef.current) {
      scrollableDivRef.current.scrollBy({
        left: 100, // Adjust this value as needed for horizontal scroll
        behavior: 'smooth'
      });
    }
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <PaymentMethodModal isOpen={isOpen} setIsOpen={setIsOpen} closeModal={closeModal} />

      <div className="flex w-full flex-col gap-2 lg:gap-10  px-2 lg:px-5 pb-5  xl:w-[85%] ">
        <div className="flex bg-white">
          <div
            ref={scrollableDivRef}
            className="flex w-full gap-3 lg:gap-5 overflow-x-auto rounded-sm px-3 py-3  lg:px-5 lg:py-5"
          >
            <div className="flex min-w-[260px] flex-grow flex-col gap-2 rounded-sm border px-5 py-5 hover:border-secondary">
              <div className="flex w-full">
                <Image
                  src={'/icons/usdt-logo.svg'}
                  alt="logo"
                  width={32}
                  height={32}
                  priority
                />
              </div>
              <div className="flex w-full flex-col">
                <p className="text-nowrap text-sm font-semibold capitalize text-[#8592AD]">
                  Tether Usd
                </p>
                <p className="font-semibold text-black">
                  <span className="text-[#8592AD]">$</span>
                  1.60
                </p>
              </div>
            </div>
            <div className="flex min-w-[260px] flex-grow flex-col gap-2 rounded-sm border px-5 py-5 hover:border-secondary">
              <div className="flex w-full">
                <Image src={'/icons/us.svg'} alt="logo" width={32} height={32} priority />
              </div>
              <div className="flex w-full flex-col">
                <p className="text-nowrap text-sm font-semibold capitalize text-[#8592AD]">
                  Solana
                </p>
                <p className="font-semibold text-black">
                  <span className="text-[#8592AD]">$</span>
                  1.60
                </p>
              </div>
            </div>
            <div className="flex min-w-[260px] flex-grow flex-col gap-2 rounded-sm border px-5 py-5 hover:border-secondary">
              <div className="flex w-full">
                <Image src={'/icons/uk.svg'} alt="logo" width={32} height={32} priority />
              </div>
              <div className="flex w-full flex-col">
                <p className="text-nowrap text-sm font-semibold capitalize text-[#8592AD]">
                  Bitcoin
                </p>
                <p className="font-semibold text-black">
                  <span className="text-[#8592AD]">$</span>
                  1.60
                </p>
              </div>
            </div>
            <div className="flex min-w-[260px] flex-grow flex-col gap-2 rounded-sm border px-5 py-5 hover:border-secondary">
              <div className="flex w-full">
                <Image src={'/icons/ngn.svg'} alt="logo" width={32} height={32} priority />
              </div>
              <div className="flex w-full flex-col">
                <p className="text-nowrap text-sm font-semibold capitalize text-[#8592AD]">
                  Tether Usd
                </p>
                <p className="font-semibold text-black">
                  <span className="text-[#8592AD]">$</span>
                  1.60
                </p>
              </div>
            </div>
          </div>
          <div onClick={scrollDiv} className="flex cursor-pointer px-6">
            <Image src={'/icons/carat-right.svg'} alt="logo" width={17} height={16} priority />
          </div>
        </div>
        <div className="flex flex-row gap-2 lg:gap-5 rounded-sm bg-white px-3 py-2 lg:px-5 lg:py-5">
          <div
            onClick={openModal}
            className="flex w-1/2 cursor-pointer flex-row justify-center gap-2 rounded-sm border px-2 py-2 lg:px-5 lg:py-5  hover:border-secondary"
          >
            <div className="flex gap-3">
              <div className="mx-auto flex w-full justify-end">
                <div className="flex rounded-full bg-violet-100 px-2 py-2 text-violet-500">
                  <CreditCardIcon />
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-nowrap  pt-2 text-black">Buy</p>
              </div>
            </div>
          </div>
          <div className="flex w-1/2 cursor-pointer flex-row justify-center gap-2 rounded-sm border px-2 py-2 lg:px-5 lg:py-5 hover:border-secondary">
            <div className="flex gap-3">
              <div className="mx-auto flex w-full justify-end">
                <div className="flex rounded-full bg-orange-100 px-2 py-2 text-orange-500">
                  <ArrowRightIcon />
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-nowrap pt-2 text-black">Sell</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 rounded-sm bg-white px-5 py-5">
          <div className="flex pl-1 font-bold">Recent Transactions</div>
          <div className="flex  h-full w-full overflow-y-auto border sm:rounded-lg">
            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
              <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Txn ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    type
                  </th>
                  <th scope="col" className="px-6 py-3">
                    status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    amount ($)
                  </th>
                  <th scope="col" className="px-6 py-3">
                    time
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    Apple MacBook Pro 17"
                  </th>
                  <td className="px-6 py-4">Silver</td>
                  <td className="px-6 py-4">Laptop</td>
                  <td className="px-6 py-4">$2999</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    Microsoft Surface Pro
                  </th>
                  <td className="px-6 py-4">White</td>
                  <td className="px-6 py-4">Laptop PC</td>
                  <td className="px-6 py-4">$1999</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    Magic Mouse 2
                  </th>
                  <td className="px-6 py-4">Black</td>
                  <td className="px-6 py-4">Accessories</td>
                  <td className="px-6 py-4">$99</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    Google Pixel Phone
                  </th>
                  <td className="px-6 py-4">Gray</td>
                  <td className="px-6 py-4">Phone</td>
                  <td className="px-6 py-4">$799</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
