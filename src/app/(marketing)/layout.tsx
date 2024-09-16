import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Providers } from "./_components/Providers";
import favicon from "./public/images/favicon.png";
import SummaryLargeImage from "./public/images/summary_large_image.png";
import Cookie from "./_components/Cookie";
import Banner from "./_components/Banner";
import Navbar from "./_components/Navbar";


import "./globals.scss";
import Footer from "./_components/Footer"; // Import your global CSS/SCSS file here

interface LayoutProps {
  children: ReactNode;
}

// Viewport settings
export const viewport: Viewport = {
  themeColor: "#e141c0",
  colorScheme: "light",
  initialScale: 1,
  width: "device-width",
};

// Metadata settings
export const metadata: Metadata = {
  title: {
    template: "NEXAURA.AI",
    default: "NEXAURA.AI | Your Personalized AI Healthcare Partner 🌟",
  },
  description:
    "NEXAURA.AI is a cutting-edge, personalized AI healthcare platform designed to revolutionize healthcare access and empower individuals with advanced AI-driven solutions 🧠💡. Our mission is to make healthcare more accessible, precise, and affordable for all, harnessing the power of AI to solve real-world challenges 🌍❤️.",
  icons: [{ rel: "icon", url: favicon.src }],
  metadataBase: new URL("https://stargate.nfteam.eu/"),
  openGraph: {
    title: "NEXAURA.AI | Your Personalized AI Doctor 🤖",
    siteName: "NEXAURA.AI | Revolutionizing Healthcare 🌐",
    description:
      "Join the healthcare revolution with NEXAURA.AI 🚀—the most advanced AI healthcare platform empowering you to take control of your health. Leveraging state-of-the-art AI, we're solving critical healthcare challenges to ensure a healthier tomorrow 💪🏽.",
    url: "https://stargate.nfteam.eu/",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: SummaryLargeImage.src,
        width: SummaryLargeImage.width,
        height: SummaryLargeImage.height,
        alt: "NEXAURA.AI | Your Personalized AI Doctor 🤖",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXAURA.AI | Your Personalized AI Doctor 🩺",
    description:
      "Transform your healthcare journey with NEXAURA.AI! 🌟 Our personalized AI platform provides cutting-edge health solutions that put you in control of your wellness.",
    images: [
      {
        url: SummaryLargeImage.src,
        width: SummaryLargeImage.width,
        height: SummaryLargeImage.height,
        alt: "NEXAURA.AI | Your Personalized AI Doctor 🩺",
      },
    ],
  },
  alternates: {
    canonical: "https://stargate.nfteam.eu/",
  },
};

// Root Layout
export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Cookie />
          <Banner />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}