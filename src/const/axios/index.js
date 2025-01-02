import axios from "axios";

/**
 *
 * @type {import('axios').AxiosInstance | null}
 */
let axiosInstance = null;
/**
 *
 * @returns {import('axios').AxiosRequestConfig}
 */
export function getSharedConfig() {
  const baseURL = `${process.env.VUE_APP_BASE_URL}`;

  console.log(process.env.VUE_APP_BASE_URL);
  return {
    baseURL,
  };
}

/**
 *
 * @param {import('axios').AxiosInstance} instance
 */
export function setSharedAxiosDefaults(instance) {
  const config = getSharedConfig();

  instance.defaults.baseURL = config.baseURL;

  instance.defaults.headers = {
    ...instance.defaults.headers,
    post: {
      Accept: "application/json",
    },
    put: {
      Accept: "application/json",
    },
  };
}

/**
 * @typedef {import('axios').AxiosRequestConfig} CustomAxiosConfig
 * @property {string?} token
 */

/**
 *
 * @param { CustomAxiosConfig | null} data
 * @returns {import('axios').AxiosInstance}
 */
export default (data = null) => {
  // exceptional case: wtf? (blog requests)
  if (data) {
    const instance = axios.create({
      ...data,
    });

    setSharedAxiosDefaults(instance);

    return instance;
  }

  if (!axiosInstance) {
    axiosInstance = axios.create();
  }

  setSharedAxiosDefaults(axiosInstance);

  return axiosInstance;
};
