import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://military-futures.vercel.app"),
  title: "Military Futures",
  description:
    "A student-friendly guide to U.S. Service Academies, ROTC, enlistment, commissioning, Guard options, nominations, and military career pathways.",
  icons: {
    icon: "/military-futures-logo.png",
    apple: "/military-futures-logo.png"
  },
  openGraph: {
    title: "Military Futures",
    description:
      "A student-friendly guide to U.S. military education and career pathways.",
    images: [
      {
        url: "/military-futures-logo.png",
        width: 1536,
        height: 1024,
        alt: "Military Futures logo"
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
