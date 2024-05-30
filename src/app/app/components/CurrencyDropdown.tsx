'use client';
import { viewCurrencies } from '@/src/requests/currency/currency.requests';
import { Listbox, Menu } from '@headlessui/react';
import { Dispatch, useEffect, useState } from 'react';
import { useMutation } from 'react-query';

const CurrencyDropdown = ({
  isDisabled,
  defaultSymbol,
  onValueChange
}: {
  isDisabled: boolean;
  defaultSymbol?: string;
  onValueChange?: Dispatch<any>;
}) => {
  const [selectedCurrency, setSelectedCurrency] = useState<any>(null);
  console.log({defaultSymbol})

  const {
    data: currencies,
    mutate: mutateCurrencies,
    isLoading: isLoadingCurrencies
  } = useMutation(viewCurrencies);

  useEffect(() => {
    if (!currencies || currencies?.data.length < 1) {
      return;
    }

    if (!defaultSymbol) {
      setSelectedCurrency(currencies?.data[0]);
      onValueChange && onValueChange(currencies?.data[0]);
    }

    if (defaultSymbol) {
      let defaultCurrency = currencies?.data.filter(
        (item: any) => item.symbol === defaultSymbol
      );
      setSelectedCurrency(defaultCurrency[0]);
      onValueChange && onValueChange(defaultCurrency[0]);
    }
    console.log({selectedCurrency})
  }, [defaultSymbol, currencies]);

  useEffect(() => {
    if (!selectedCurrency) return;
    onValueChange && onValueChange(selectedCurrency);
  }, [selectedCurrency]);

  useEffect(() => mutateCurrencies(), []);
  return (
    <div className="relative">
      {currencies?.data?.length > 0 && (
        <Listbox
          value={selectedCurrency}
          onChange={value => {
            setSelectedCurrency(value);
          }}
        >
          <Listbox.Button>
            <div className="flex cursor-pointer justify-center gap-2 rounded-lg bg-[#f6f6f8] px-4 py-2 text-center">
              <img src={selectedCurrency?.logo} alt="logo" width={20} height={20} />
              <p className="whitespace-nowrap">{selectedCurrency?.symbol}</p>
              {isDisabled ? (
                <div className="flex w-[10px]"></div>
              ) : (
                <img src={'/icons/carat-down.svg'} alt="logo" width={10} height={10} />
              )}
            </div>
          </Listbox.Button>
          <Listbox.Options>
            {isDisabled ? (
              <></>
            ) : (
              <div className="absolute mt-1 flex flex-col justify-center gap-2 rounded-lg border bg-white py-2 text-center">
                {currencies?.data?.length > 0 &&
                  currencies?.data?.map((e: any, key: any) => (
                    <Listbox.Option key={key} value={e}>
                      {({ active }) => (
                        <div className="flex w-full cursor-pointer flex-row justify-between gap-2 px-4 py-1 hover:bg-[#f6f6f8] ">
                          <img src={e.logo} alt="logo" width={20} height={20} />
                          <p className="whitespace-nowrap">{e.symbol}</p>
                          <div className="flex w-[10px]"></div>
                        </div>
                      )}
                    </Listbox.Option>
                  ))}
              </div>
            )}
          </Listbox.Options>
        </Listbox>
      )}
    </div>
  );
};

export default CurrencyDropdown;
