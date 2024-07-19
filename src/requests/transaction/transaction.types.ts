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
export interface ICreateBuyTransaction {
    amountInUsd: number
    senderCurrencyId: string
    recieverCurrencyId: string
    recievingWalletAddress: string
}