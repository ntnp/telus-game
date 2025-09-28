import { tv } from 'tailwind-variants';

import { hStack } from '_ui/box/styles';

export const header = tv({
  extend: hStack,
  base: [
    'w-full',
  ],
});
