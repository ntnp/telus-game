import { tv } from 'tailwind-variants';

import { vStack } from '_ui/box/styles';

export const main = tv({
  extend: vStack,
  base: [
    'grow min-dvh',
  ],
});
