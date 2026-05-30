import "./globals.css";

import { Chela_One, Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const chelaOne = Chela_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-chela-one",
});

export const metadata = {
  metadataBase: new URL("https://andry-arthur.github.io/redesigned-umbrella"),
  title: {
    default: "Andry A. Rakotonjanabelo | AI/ML Software Engineer",
    template: "%s | Andry A. Rakotonjanabelo",
  },
  description:
    "Portfolio of Andry A. Rakotonjanabelo, an AI/ML software engineer building accessible products, hackathon projects, and public demos.",
  keywords: [
    "Andry Rakotonjanabelo",
    "AI/ML Software Engineer",
    "Portfolio",
    "Next.js",
    "Hackathons",
  ],
  authors: [{ name: "Andry A. Rakotonjanabelo" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Andry A. Rakotonjanabelo | AI/ML Software Engineer",
    description:
      "A tropical-themed portfolio showcasing AI/ML work, projects, awards, and contact links.",
    url: "/",
    siteName: "Andry A. Rakotonjanabelo Portfolio",
    type: "website",
    images: [
      {
        url: "/AAR.png",
        width: 1200,
        height: 630,
        alt: "Andry A. Rakotonjanabelo portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andry A. Rakotonjanabelo | AI/ML Software Engineer",
    description:
      "A tropical-themed portfolio showcasing AI/ML work, projects, awards, and contact links.",
    images: ["/AAR.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${chelaOne.variable}`}>
      <body>{children}</body>
    </html>
  );
}
