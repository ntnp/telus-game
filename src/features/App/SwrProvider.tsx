'use client';

import { type ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';

import { getSwr } from '_api/swr';

export function SwrProvider({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={getSwr()}>
      <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
    </QueryClientProvider>
  );
}
