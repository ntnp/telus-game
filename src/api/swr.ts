import { isServer, keepPreviousData, QueryClient } from '@tanstack/react-query';

function makeSwr() {
  const swr = new QueryClient({
    defaultOptions: {
      queries: {
        placeholderData: keepPreviousData,
        staleTime: 60e3,
      },
    },
  });

  return swr;
}

const swr = {
  server: makeSwr,
  client: undefined as QueryClient | undefined,
};

export function getSwr() {
  if (isServer) {
    return swr.server();
  }

  return swr.client ??= makeSwr();
}

export { useQuery, useSuspenseQuery, useMutation, queryOptions } from '@tanstack/react-query';
