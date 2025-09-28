import { type ComponentPropsWithRef } from 'react';

import { HStack } from '_ui/box';
import { Separator } from '_ui/separator';
import { Span } from '_ui/typography';

import { SiGithub } from '@icons-pack/react-simple-icons';
import { AtSignIcon } from 'lucide-react';

import { NavbarLink } from '_features/Navbar/NavbarLink';

interface NavbarProps extends ComponentPropsWithRef<'nav'> {
  children?: never;
}

export function Navbar({ ...props }: NavbarProps) {
  return (
    <HStack className="justify-between h-14 w-full" asChild>
      <nav {...props}>

        <section aria-hidden />

        <HStack className="items-stretch" asChild>
          <section>

            <NavbarLink href="https://github.com/ntnp" target="_blank">
              <SiGithub size={24} aria-hidden />
              <Span sr>Github</Span>
            </NavbarLink>

            <Separator orientation="vertical" className="self-center h-6" />

            <NavbarLink href="mailto:ntnp@ntnp.dev" target="_blank">
              <AtSignIcon size={24} aria-hidden />
              <Span sr>Mail me</Span>
            </NavbarLink>

          </section>
        </HStack>

      </nav>
    </HStack>
  );
}
