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