import { Inter } from "@next/font/google";

import "@/styles/reset.css";
import "@/styles/global.css";

import Header from "@/components/header";
import Footer from "@/components/footer";

const interFontFamiliy = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={interFontFamiliy.className}>
      <body className="container">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
