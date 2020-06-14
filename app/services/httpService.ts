import axios, { AxiosInstance } from "axios";
import Cookies from "js-cookie";
import { API_HOST } from "../constants/config";
import { IClientHttpRequest } from "../types";

let axiosInstance: AxiosInstance;

const getAxiosInstance = (): AxiosInstance => {
  if (axiosInstance) {
    return axiosInstance;
  }
  axiosInstance = axios.create({
    baseURL: API_HOST,
    withCredentials: true,
  });
  axiosInstance.interceptors.response.use((response) => response, (error) => {
    console.warn({
      message: "Bad response from anilibria api server",
      tags: { error_catcher_type: "fetch-guard" },
      extra: {
        error,
      },
    });
    return Promise.reject(error);
  });
  return axiosInstance;
};

export const httpRequest = (
  {
    responseType = "json",
    cookies,
    cancelToken,
    Origin,
  }: IClientHttpRequest): AxiosInstance => {
  const headers: any = {};
  if (Cookies.get("csrftoken")) {
    headers["X-CSRFToken"] = Cookies.get("csrftoken");
  }
  if (cookies) {
    headers.Cookie = cookies;
  }
  if (Origin) {
    headers.Origin = Origin;
  }
  const instance = getAxiosInstance();
  instance.defaults.headers = headers;
  instance.defaults.responseType = responseType;
  if (cancelToken) {
    instance.defaults.cancelToken = cancelToken;
  }
  return instance;
};
