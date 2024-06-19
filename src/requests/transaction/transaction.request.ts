import { Request } from "../../utils/https";
import { showToast } from "../../utils/toaster";
import { ICreateBuyTransaction, ICreateTransaction, IValidateRate } from "./transaction.types";

export const viewUserTransactions = () => {
    const response = Request.get('user/transaction/view');
    response
        // .then((res: any) => showToast(res?.data, 'success'))
        .catch((error) => showToast(error.data, 'failed'));
    return response;
};

export const viewSingleTransaction = (transactionId: string) => {
    const response = Request.get('user/transaction/view/' + transactionId);
    response
        // .then((res: any) => showToast(res?.data, 'success'))
        .catch((error) => showToast(error.data, 'failed'));
    return response;
};

export const createSell = async (payload: ICreateTransaction) => {
    const response = Request.post({ url: 'user/transaction/offramp-crypto/create', payload });
    response
        .then((res: any) => showToast(res?.data, 'success'))
        .catch((error) => showToast(error.details ?? error.data, 'failed'));
    return response;
};
export const createBuy = async (payload: ICreateBuyTransaction) => {
    const response = Request.post({ url: 'user/transaction/buy-crypto/create', payload });
    response
        .then((res: any) => showToast(res?.data, 'success'))
        .catch((error) => showToast(error.details ?? error.data, 'failed'));
    return response;
};

export const validateOfframpRate = async (payload: IValidateRate) => {
    const response = Request.post({ url: 'user/transaction/offramp-crypto/validate', payload });
    // response
    // .then((res: any) => showToast(res?.data, 'success'))
    // .catch((error) => showToast(error.data, 'failed'));
    return response;
};

export const validateBuyCrypto = async (payload: IValidateRate) => {
    const response = Request.post({ url: 'user/transaction/buy-crypto/validate', payload });
    // response
    // .then((res: any) => showToast(res?.data, 'success'))
    // .catch((error) => showToast(error.data, 'failed'));
    return response;
};