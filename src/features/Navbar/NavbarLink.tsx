import { type ComponentPropsWithRef, type ReactNode } from 'react';

import { VStack } from '_ui/box';

interface NavbarLinkProps extends ComponentPropsWithRef<'a'> {
  href: string;
  children: ReactNode;
}

export function NavbarLink({ ...props }: NavbarLinkProps) {
  return (
    <VStack className="items-center justify-center px-4" asChild>
      <a {...props} />
    </VStack>
  );
}
