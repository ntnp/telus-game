import { type ReactNode } from 'react';
import { type Metadata } from 'next';

import { cn } from '_utils/ui/tailwind';

import { geistMono, geistSans } from '_theme/fonts';

import { ThemeProviders } from '_app/features/App/ThemeProviders';

export const metadata: Metadata = {
  title: 'Natan Pereira',
  description: 'Natan Pereira Dev',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProviders>
        <body className={cn(geistSans.variable, geistMono.variable, 'antialiased')}>

          <div id="wrapper">
            {children}
          </div>

        </body>
      </ThemeProviders>
    </html>
  );
}
