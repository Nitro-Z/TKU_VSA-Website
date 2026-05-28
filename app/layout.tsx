import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ConditionalNavbar from "./components/ConditionalNavbar";
import { ThemeProvider } from "./components/ThemeProvider";
import { LanguageProvider } from "./components/LanguageProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TKU Vietnamese Student Association",
  description: "Tổ chức hỗ trợ sinh viên Việt Nam học tập, kết nối và giao lưu tại Đài Loan. Giúp sinh viên mới thích nghi với môi trường, hỗ trợ tìm việc làm và hoàn thành các thủ tục cần thiết.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}})()` }} />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-zinc-900 transition-colors duration-300">
        <LanguageProvider>
          <ThemeProvider>
            <ConditionalNavbar />
            <main className="flex-1">{children}</main>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
