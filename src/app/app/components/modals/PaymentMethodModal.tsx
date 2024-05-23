'use client';
import { Dispatch, SetStateAction } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import PhantomIcon from '@/public/icons/us.svg';
import Image from 'next/image';
import Link from 'next/link';
import {
  LucideCreditCard,
  LucidePiggyBank,
  LucideSmartphone,
  LucideTabletSmartphone
} from 'lucide-react';
import CreditCardIcon from '../icons/CreditCardIcon';
import { useRouter } from 'next/navigation';
// import { connectToBrowserWalletAfresh } from "@/app/utils/web3-solana";

export default function PaymentMethodModal({
  isOpen,
  setIsOpen,
  closeModal,
  transactionType
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  closeModal: any;
  transactionType: string | null;
}) {
  const router = useRouter();
  // const [transactionType, setTransactionType] = useState(null);

  function handleTransactionPage(type: string | null) {
    switch (type) {
      case 'buy':
        router.push('/app/buy');

        break;
      case 'sell':
        router.push('/app/sell');

        break;

      default:
        break;
    }
  }
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-primary/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto bg-opacity-50 backdrop-blur-sm">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full transform overflow-hidden rounded-md  border bg-[#F1F2FD] px-8 pb-10 pt-3 text-left align-middle shadow-xl transition-all md:w-1/3">
                <div
                  onClick={closeModal}
                  className="mb-7 flex w-full cursor-pointer justify-end"
                >
                  <Image
                    src={'/icons/blue-close-icon.svg'}
                    alt="logo"
                    width={20}
                    height={20}
                    priority
                  />
                </div>
                <Dialog.Title
                  as="h3"
                  className="text-xl font-medium capitalize leading-6 text-black"
                >
                  select a payment method
                </Dialog.Title>
                <div className="my-7 flex w-full flex-col">
                  <div
                    onClick={() => handleTransactionPage(transactionType)}
                    className="flex w-full cursor-pointer flex-row gap-5 rounded-sm border-b px-[10px] py-[15px] hover:bg-white"
                  >
                    <div className="flex rounded-full bg-red-100 px-2 py-2 text-red-500">
                      <CreditCardIcon />
                    </div>
                    <p className="my-auto text-sm">Debit Card</p>
                  </div>
                  <div
                    onClick={() => handleTransactionPage(transactionType)}
                    className="flex w-full cursor-pointer flex-row gap-5 rounded-sm border-b px-[10px] py-[15px] hover:bg-white"
                  >
                    <div className="flex rounded-full bg-blue-100 px-2 py-2">
                      <LucideTabletSmartphone className="text-blue-500" />
                    </div>
                    <p className="my-auto text-sm">Bank Transfer</p>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Dear User, we are currently integrating more payment options.
                  </p>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
