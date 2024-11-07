import axios from "axios";
import { retrieveToken } from "./auth-tokens";

// const baseUrl = process.env.REACT_APP_API_URL;

// export const Request = {
//   post: async (url: any, data: any, config?: any) => {
//     const headers = config?.headers;
//     console.log({ url, data })
//     return await axios.post(url, data, {
//       headers: {
//         ...headers,
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response: any) => {
//         return { ok: true, data: response };
//       })
//       .catch((error: any) => {
//         console.error(error)
//         return { ok: false, data: error };
//       });
//   },

//   get: async (url: any, config?: any) => {
//     const headers = config?.headers;
//     // console.log(url);
//     return await axios.get(url, {
//       ...config,
//       headers: {
//         ...headers,
//         "Access-Control-Allow-Origin": process.env.NEXT_PUBLIC_OFFRAMP_CLIENT,
//       },
//     })
//       .then((response: any) => {
//         return { ok: true, data: response };
//       })
//       .catch((error: any) => {
//         console.error(error)
//         return { ok: false, data: error };
//       });
//   },
// };
interface iService {
  method?: string;
  url: string;
  headers?: object;
  params?: object;
  payload?: object;
}

const ApiResource = () => {
  // const baseURL = process.env.NEXT_PUBLIC_OFFRAMP_SERVER;
  const baseURL = `${process.env.NEXT_PUBLIC_OFFRAMP_CLIENT}/node-api`
  // console.log({baseURL:process.env.NEXT_PUBLIC_OFFRAMP_SERVER});
  // return;

  const service = axios.create({
    baseURL: `${baseURL}`,
    withCredentials: false,
    headers: {
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_OFFRAMP_CLIENT,
      'Content-Type': 'application/json',
      // 'Authorization': 'Basic parole',
      // 'latitude': window.localStorage.getItem('client-latitude'),
      // 'longitude': window.localStorage.getItem('client-longitude'),
      // 'x-real-ip': window.localStorage.getItem('client-ip'),
    },
  });
  
  // console.log(service);return;

  service.interceptors.request.use((config) => {
    const token = retrieveToken();
    if (!token) return config;
    config.headers!['Authorization'] = 'bearer ' + token.token;

    // const params = paramsToObject(config?.url);
    // const body = { ...params, ...config?.params, ...config?.data };
    // const { hashBase64, timestamp } = hmacAuth(token.token, token.secret, body);

    // config.headers!['apisignature'] = hashBase64;
    // config.headers!['token'] = token.token;
    // config.headers!['timestamp'] = timestamp;

    return config;
  });

  service.interceptors.response.use(
    (response) => {
      // console.log({ response })
      return response.data
    },

    (error) => {
      if (error?.code === 'ERR_NETWORK') {
        // showToast('Check your internet connection.', 'failed');
      }

      if (
        error?.response?.status === 401 &&
        error?.response?.data?.action === 'please_login'
      ) {
        window.history.pushState({}, '', '/auth/logout');
        window.history.go(0);
      }

      if (
        error?.response?.status === 401 &&
        error?.response?.data?.action === 'auto_login'
      ) {
        window.history.pushState({}, '', '/auth/logout');
        window.history.go(0);
      }


      return Promise.reject(error?.response?.data);
    }
  );

  return {
    get: async (url: string, params?: any) => {
      try {
        const data = service.get(url, { params });
        const resolvedData = await Promise.resolve(data);
        return resolvedData;
      } catch (error) {
        return Promise.reject(error);
      }
    },

    _get: async ({ url, params, headers }: iService) => {
      try {
        const data = service.get(url, { headers, params });
        const resolvedData = await Promise.resolve(data);
        return resolvedData;
      } catch (error) {
        return Promise.reject(error);
      }
    },

    post: async ({ url, payload }: iService) => {
      try {
        const data = service.post(url, payload);
        const resolvedData = await Promise.resolve(data);
        return resolvedData;
      } catch (error) {
        return Promise.reject(error);
      }
    },

    patch: async ({ url, payload }: iService) => {
      try {
        const data = service.patch(url, payload);
        const resolvedData = await Promise.resolve(data);
        return resolvedData;
      } catch (error) {
        return Promise.reject(error);
      }
    },

    delete: async ({ url, payload }: iService) => {
      try {
        const data = service.delete(url, payload);
        const resolvedData = await Promise.resolve(data);
        return resolvedData;
      } catch (error) {
        return Promise.reject(error);
      }
    },

    put: async ({ url, payload }: iService) => {
      try {
        const data = await service.put(url, payload);
        const resolvedData = await Promise.resolve(data);
        return resolvedData;
      } catch (error) {
        return Promise.reject(error);
      }
    },

    retry: async ({ method, url, payload }: iService) => {
      try {
        const data = service({
          method: method,
          url: url,
          data: payload,
        });
        const resolvedData = await Promise.resolve(data);
        return resolvedData;
      } catch (error) {
        return Promise.reject(error);
      }
    },
  };
};

export const Request = ApiResource();