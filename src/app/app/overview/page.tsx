'use client';
import Image from 'next/image';
import SideBar from '../components/SideBar';
import Link from 'next/link';
import MobileSideBar from '../components/MobileSideBar';
import { useState } from 'react';
import PaymentMethodModal from '../components/modals/PaymentMethodModal';

const Page = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <PaymentMethodModal isOpen={isOpen} setIsOpen={setIsOpen} closeModal={closeModal} />

      <div className="flex w-full flex-col  gap-10 px-5 pb-5 lg:w-[85%] ">
        <div className="flex w-full gap-5 overflow-y-auto rounded-sm bg-white px-5 py-5">
          <div className="flex min-w-[260px] flex-grow flex-col gap-2 rounded-sm border px-5 py-5 hover:border-secondary">
            <div className="flex w-full">
              <Image src={'/icons/usdt-logo.svg'} alt="logo" width={32} height={32} priority />
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
        <div className="flex  gap-5 rounded-sm bg-white px-5 py-5">
          <div onClick={openModal} className="flex w-1/2 cursor-pointer flex-row justify-center gap-2 rounded-sm border px-5 py-5 hover:border-secondary">
            <div className="flex gap-3">
              <div className="mx-auto flex w-full justify-end">
                <Image
                  src={'/icons/plus-icon.svg'}
                  alt="logo"
                  width={17}
                  height={16}
                  priority
                />
              </div>
              <div className="flex flex-col">
                <p className="text-nowrap font-semibold text-black">Buy Crypto</p>
              </div>
            </div>
          </div>
          <div className="flex w-1/2 cursor-pointer flex-row justify-center gap-2 rounded-sm border px-5 py-5 hover:border-secondary">
            <div className="flex gap-3">
              <div className="mx-auto flex w-full justify-end">
                <Image
                  src={'/icons/sell-icon.svg'}
                  alt="logo"
                  width={17}
                  height={17}
                  priority
                />
              </div>
              <div className="flex flex-col">
                <p className="text-nowrap font-semibold text-black">Sell Crypto</p>
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
