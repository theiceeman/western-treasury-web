import { setGlobalConfig } from "@/src/stores/slices/globalConfigSlice";
import { Request } from "../../utils/https";
import { showToast } from "../../utils/toaster";

export const getGlobalConfig = () => {
    return (dispatch: any) => {
        const response = Request.get('/app/user/global-configuration');
        response
            .then((res: any) => {
                showToast(res?.message, 'success', false);
                dispatch(setGlobalConfig(res));
            })
            .catch((error) => showToast(error.message, 'failed'));
        return response;
    };
};