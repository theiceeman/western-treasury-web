import { Request } from "../../utils/https";
import { showToast } from "../../utils/toaster";

export const viewCurrencies = () => {
    const response = Request.get('user/currency/view');
    response
        // .then((res: any) => showToast(res?.data, 'success'))
        .catch((error) => showToast(error.data, 'failed'));
    return response;
};