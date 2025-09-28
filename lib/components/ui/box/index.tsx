import { type ComponentPropsWithRef } from 'react';

import { Slot } from '_ui/slot';

import { flex, hStack, type HStackVariants, vStack, type VStackVariants } from './styles';

interface FlexProps extends ComponentPropsWithRef<'div'> {
  asChild?: boolean;
}

export function Flex({ asChild, ...props }: FlexProps) {
  const Comp = asChild ? Slot : 'div';
  const className = flex(props);

  return <Comp {...{ ...props, className }} />;
}

interface HStackProps extends ComponentPropsWithRef<'div'>, HStackVariants {
  asChild?: boolean;
}

export function HStack({ asChild, ...props }: HStackProps) {
  const Comp = asChild ? Slot : 'div';
  const className = hStack(props);

  return <Comp {...{ ...props, className }} />;
}

interface VStackProps extends ComponentPropsWithRef<'div'>, VStackVariants {
  asChild?: boolean;
}

export function VStack({ asChild, ...props }: VStackProps) {
  const Comp = asChild ? Slot : 'div';
  const className = vStack(props);

  return <Comp {...{ ...props, className }} />;
}
