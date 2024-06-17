import { Request } from "../../utils/https";
import { showToast } from "../../utils/toaster";
import { ILoginUser, ISignupUser, IUpdateUser } from "./account.types";

export const signupUser = async (payload: ISignupUser) => {
    const response = Request.post({ url: 'user/account/signup', payload });
    response
        .then((res: any) => showToast(res?.data, 'success'))
        .catch((error) => showToast(error.data, 'failed'));
    return response;
};

export const loginUser = async (payload: ILoginUser) => {
    const response = Request.post({ url: 'user/account/login', payload });

    response
        .then((res: any) => {
            // console.log({response});return;
            // showToast(res?.data, 'success')
        })
        .catch((error) => showToast(error.data, 'failed'));
    return response;
};

export const updateUser = async (payload: IUpdateUser) => {
    const response = Request.patch({ url: 'user/account/update', payload });

    response
        .then((res: any) => showToast(res?.data, 'success'))
        .catch((error) => showToast(error.data, 'failed'));
    return response;
};

export const viewLoggedInUser = () => {
    const response = Request.get('user/account/view');
    response
        // .then((res: any) => showToast(res?.data, 'success'))
        .catch((error) => showToast(error.data, 'failed'));
    return response;
};