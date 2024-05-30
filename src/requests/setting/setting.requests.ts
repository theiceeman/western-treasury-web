import { setGlobalConfig } from "@/src/stores/slices/globalConfigSlice";
import { Request } from "../../utils/https";
import { showToast } from "../../utils/toaster";
import { setAppSettings } from "@/src/stores/slices/appSettingsSlice";

export const getAppSettings = () => {
    return (dispatch: any) => {
        const response = Request.get('/user/setting/view');
        response
            .then((res: any) => {
                showToast(res?.message, 'success', false);
                console.log({res})
                dispatch(setAppSettings(res?.data));
            })
            .catch((error) => showToast(error.message, 'failed'));
        return response;
    };
};