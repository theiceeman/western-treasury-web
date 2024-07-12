export interface ICreateTransaction {
    amountInUsd: number
    senderCurrencyId: string
    recieverCurrencyId: string
}
export interface IValidateRate {
    amountInUsd: number
    amountType: 'sending' | 'receiving'
    senderCurrencyId: string
    recieverCurrencyId: string
}
// recievingCurrencyId
export interface ICreateBuyTransaction {
    amountInUsd: number
    senderCurrencyId: string
    recievingCurrencyId: string
    recievingWalletAddress: string
}