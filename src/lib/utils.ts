import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// convert user's sending amount to recieving amount.
/**
 * Convert user's sending amount to recieving amount.
 * @param sendingCurrencyAmount Sending currency to usd rate
 * @param sendingCurrencyUsdRate Sending currency to usd rate
 * @param usdNgn Rate for usd to ngn
 */
export function convertToUsd(amount: number, usdRate: number) {
  let amountInUsd = amount / Number(usdRate);
  return amountInUsd;
}
export function getCurrentTimeFormatted() {
  const date = new Date();
  
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
  };

  // Format the date using the options
  const formattedDate = date.toLocaleDateString('en-US',options);

  return formattedDate;
}