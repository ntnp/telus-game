import { HStack, VStack } from '_ui/box';
import { H1, Span } from '_ui/typography';

import { Main } from '_layout/page/containers';
import { Header } from '_layout/page/header';

import { Navbar } from '_features/Navbar/Navbar';

export default function Page() {
  return <>
    <Header>
      <Navbar />
    </Header>

    <Main>
      <VStack className="grow items-center justify-center gap-6 sm:gap-3 text-center" asChild>
        <section>

          <H1 className="text-4xl lg:text-5xl">Natan Pereira</H1>

          <HStack className="max-sm:flex-col items-center justify-center gap-x-4 gap-y-2">
            <HStack className="gap-4 text-subtle-foreground" asChild>
              <ul>
                <li>TypeScript</li>
                <li>React</li>
                <li>Next.js</li>
              </ul>
            </HStack>

            <Span aria-hidden className="max-sm:hidden">•</Span>

            <HStack className="gap-4 text-subtle-foreground" asChild>
              <ul>
                <li>PHP</li>
                <li>Laravel</li>
                <li>Symfony</li>
              </ul>
            </HStack>
          </HStack>

        </section>
      </VStack>
    </Main>
  </>;
}
