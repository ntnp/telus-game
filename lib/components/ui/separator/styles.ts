import { tv, type VariantProps } from 'tailwind-variants';

export const separator = tv({
  base: '',

  variants: {
    orientation: {
      horizontal: 'grow border-t h-px',
      vertical: 'border-l h-full w-px',
    },

    tint: {
      primary: 'border-primary',
      subtle: 'border-subtle',
      muted: 'border-muted',
    },
  },

  defaultVariants: {
    orientation: 'horizontal',
    tint: 'muted',
  },
});

export type SeparatorVariants = VariantProps<typeof separator>
