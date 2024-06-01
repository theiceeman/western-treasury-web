export interface ICreateTransaction {
    amountInUsd: number
    senderCurrencyId: string
    recieverCurrencyId: string
}
export interface IValidateRate {
    amountInUsd: number
    senderCurrencyId: string
    recieverCurrencyId: string
}