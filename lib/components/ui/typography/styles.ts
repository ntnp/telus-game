import { tv, type VariantProps } from 'tailwind-variants';

export const text = tv({
  base: '',

  variants: {
    sr: {
      true: 'sr-only',
    },
  },
});

export const heading = tv({
  extend: text,
  base: [
    'text-primary leading-normal',
  ],

  variants: {
    as: {
      h1: 'font-bold text-xl lg:text-2xl',
    },
  },
});

export type TextVariants = VariantProps<typeof text>
export type HeadingVariants = VariantProps<typeof heading>
