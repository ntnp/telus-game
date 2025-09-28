import { type ComponentPropsWithRef } from 'react';

import * as Headless from '@radix-ui/react-separator';

import { separator, type SeparatorVariants } from './styles';

const Root = Headless.Root;

interface SeparatorProps extends ComponentPropsWithRef<typeof Root>, SeparatorVariants {
}

export function Separator({ orientation = 'horizontal', tint, ...props }: SeparatorProps) {
  const className = separator({ orientation, tint, ...props });

  return <Root {...{ ...props, className, orientation }} />;
}
