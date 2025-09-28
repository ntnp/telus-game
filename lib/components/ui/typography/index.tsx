import { type ComponentPropsWithRef } from 'react';

import { heading, type HeadingVariants, text, type TextVariants } from './styles';

interface SpanProps extends ComponentPropsWithRef<'span'>, TextVariants {
}

export function Span({ sr, ...props }: SpanProps) {
  const className = text({ sr, ...props });

  return <span {...{ ...props, className }} />;
}

interface H1Props extends ComponentPropsWithRef<'h1'>, HeadingVariants {
}

export function H1({ as = 'h1', ...props }: H1Props) {
  const className = heading({ as, ...props });

  return <h1 {...{ ...props, className }} />;
}
