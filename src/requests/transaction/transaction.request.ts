import { Request } from "../../utils/https";
import { showToast } from "../../utils/toaster";
import { ICreateOfframp } from "./transaction.types";

export const viewUserTransactions = () => {
    const response = Request.get('user/transaction/view');
    response
        // .then((res: any) => showToast(res?.data, 'success'))
        .catch((error) => showToast(error.data, 'failed'));
    return response;
};

export const createOfframp = async (payload: ICreateOfframp) => {
    const response = Request.post({ url: 'user/transaction/offramp-crypto/create', payload });
    response
        .then((res: any) => showToast(res?.data, 'success'))
        .catch((error) => showToast(error.data, 'failed'));
    return response;
};