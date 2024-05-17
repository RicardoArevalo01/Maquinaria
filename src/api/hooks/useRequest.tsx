import axios, {AxiosError, AxiosResponse} from 'axios';
import {ApiEndpoints} from '../routes';
import {ApiErrorResponse} from '../../interfaces';
import {Alert} from '../../utils';
import {useAuthStore} from '../../shared/hooks';

export const useRequest = () => {
  //#region AxiosConfig

  const {
    auth: {status, jwtInfo},
  } = useAuthStore();

  // Create an axios instance for the other endpoints
  const ApiRequest = axios.create({
    baseURL: ApiEndpoints.BaseURL + ApiEndpoints.BaseApi,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwtInfo?.token ?? ''}`,
    },
  });
  const ApiPostFileRequest = axios.create({
    baseURL: ApiEndpoints.BaseURL + ApiEndpoints.BaseApi,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer  ${jwtInfo?.token ?? ''}`,
      otherHeader: 'foo',
    },
    maxContentLength: 100000000,
    maxBodyLength: 1000000000,
  });

  //#endregion

  //#region RequestConfig

  const getRequest = async <T extends unknown>(
    endpoint: string,
    params?: object,
  ): Promise<T> =>
    await ApiRequest.get(endpoint, {params})
      .then(({data}: AxiosResponse<T>) => data)
      .catch((error: AxiosError<ApiErrorResponse>) => {
        Alert.showApiError(error);
        throw error;
      });

  const postRequest = async <T extends unknown>(
    endpoint: string,
    data?: object,
    params?: object,
  ): Promise<T> =>
    await ApiRequest.post(endpoint, data, {params})
      .then(({data}: AxiosResponse<T>) => data)
      .catch((error: AxiosError<ApiErrorResponse>) => {
        Alert.showApiError(error);
        throw error;
      });

  const postFileRequest = async <T extends unknown>(
    endpoint: string,
    data?: object,
    params?: object,
  ): Promise<T> =>
    await ApiPostFileRequest.post(endpoint, data, {params})
      .then(({data}: AxiosResponse<T>) => data)
      .catch((error: AxiosError<ApiErrorResponse>) => {
        console.error(JSON.stringify(error, null, 3));
        Alert.showApiError(error);
        throw error;
      });

  //#endregion

  return {getRequest, postRequest, postFileRequest};
};
