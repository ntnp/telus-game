import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse, type Method } from 'axios';
import { isServer, type QueryFunctionContext } from '@tanstack/react-query';

import { _ } from '_utils/url';

function makeWillowtreeApi() {
  const api = axios.create({
    baseURL: 'https://namegame.willowtreeapps.com/api',

    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });

  return api;
}

const willowtreeApi = {
  server: makeWillowtreeApi,
  client: undefined as AxiosInstance | undefined,
};

export function getWillowtreeApi() {
  if (isServer) {
    return willowtreeApi.server();
  }

  return willowtreeApi.client ??= makeWillowtreeApi();
}

export function willowtreeSwrFetcher<Data, Payload>(
  ctx: QueryFunctionContext<['willowTree', ...any[]]>,
  method: Method = 'get',
  config?: Omit<AxiosRequestConfig<Payload>, 'url' | 'method'>,
) {
  const url = _(...ctx.queryKey.slice(1));

  return getWillowtreeApi().request<Data, AxiosResponse<Data>, Payload>({ ...config, url, method });
}
