import { type ComponentPropsWithRef } from 'react';

import { header } from './styles';

interface HeaderProps extends ComponentPropsWithRef<'header'> {
}

export function Header({ ...props }: HeaderProps) {
  const className = header(props);

  return <header {...{ ...props, className }} />;
}
