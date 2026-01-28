import "./globals.css";
import Providers from "@/store/Providers";
import Footer from "@/components/common/Footer";
import { Inter } from "next/font/google";
import Navbar from "@/components/common/Navbar";
import WhatsAppButton from "@/components/common/WhatsAppButton"

/* ✅ Professional Font (Industry Standard) */
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Umanz Technology | Web Development & Digital Solutions Company",
  description:
    "Umanz Technology is a web development and digital solutions company offering websites, apps, and digital marketing services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-black antialiased overflow-x-hidden font-sans">
        <Providers>
          <Navbar/>
          {children}
          <WhatsAppButton />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
