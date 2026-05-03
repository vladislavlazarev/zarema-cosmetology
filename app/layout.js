import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';
import { SITE } from './config';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata = {
  title: `${SITE.brandFull} — ${SITE.tagline}`,
  description: `Косметологическая студия ${SITE.brand} в ${SITE.city}. Контурная пластика, ботулинотерапия, биоревитализация, чистка лица и пилинги. Премиальный сервис, сертифицированные специалисты.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={`${inter.variable} ${cormorant.variable}`}>
      <body>
        <div id="top" />
        <Header />
        {children}
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
