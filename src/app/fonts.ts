import { Golos_Text, Inter, Poppins } from 'next/font/google';

export const golosText = Golos_Text({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin', 'cyrillic'],
  variable: '--font-family',
});

export const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--second-family',
});

export const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--third-family',
});

// Використовуємо Inter як основний шрифт замість Golos Text
export const primaryFont = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-family',
}); 