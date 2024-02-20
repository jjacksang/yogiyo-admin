import { Noto_Sans_KR, Roboto } from "next/font/google";

const sumClass = (...classnames: string[]) => {
    return classnames.join(" ");
  }

export const noto_sans = Noto_Sans_KR({
    weight: ['100', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: "--noto_sans_kr",
    display: 'swap',
});

const roboto = Roboto({
  weight: ['100'],
  subsets: ['latin'], // Add the required subset here
  variable: "--roboto",
  display: 'swap',
});

export const FontClassNames = sumClass(noto_sans.className, roboto.variable);
