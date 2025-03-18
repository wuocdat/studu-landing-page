import '@mantine/core/styles.css';
import '@/styles/Nunito.css';
import '@mantine/carousel/styles.css';

import React from 'react';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { Box, ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { Footer } from '@/components/Footer';
import Header from '@/components/layout/header';
import { routing } from '@/i18n/routing';
import { theme } from '../../theme/theme';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// export const metadata = {
//   title: 'Stutu - Kết nối để toả sáng',
//   description: 'I am using Mantine with Next.js!',
// };

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: any;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <MantineProvider theme={theme}>
            <>
              <Header />
              <Box py={80}>{children}</Box>
              <Footer />
            </>
          </MantineProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
