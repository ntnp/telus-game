import { type ComponentPropsWithRef } from 'react';

import { main } from './styles';

interface MainProps extends ComponentPropsWithRef<'main'> {
}

export function Main({ ...props }: MainProps) {
  const className = main(props);

  return <main {...{ ...props, className }} />;
}
