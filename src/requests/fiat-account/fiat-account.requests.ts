import { Request } from "../../utils/https";
import { showToast } from "../../utils/toaster";
import { ICreateAcct } from "./fiat-account.types";

export const createAcct = async (payload: ICreateAcct) => {
    const response = Request.post({ url: 'user/fiat-account', payload });
    response
        .then((res: any) => showToast(res?.data, 'success'))
        .catch((error) => showToast(error.data, 'failed'));
    return response;
};
export const viewUserAcct = () => {
    const response = Request.get('user/fiat-account');
    response
        // .then((res: any) => showToast(res?.data, 'success'))
        .catch((error) => showToast(error.data, 'failed'));
    return response;
};
export const viewSupportedBanks = () => {
    const response = Request.get('user/fiat-account/supported-banks');
    response
        // .then((res: any) => showToast(res?.data, 'success'))
        .catch((error) => showToast(error.data, 'failed'));
    return response;
};