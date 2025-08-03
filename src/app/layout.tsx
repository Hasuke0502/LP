import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "習慣化テック | 科学に基づいた習慣化アプリ & Webアプリ開発講座",
  description: "ゲーミフィケーションで楽しく継続できる習慣化アプリと、Next.js・TypeScriptを使った実践的なWebアプリ開発を対面で学べる講座をご紹介。個人のペースに合わせたサポートで確実にスキルアップ。",
  keywords: "習慣化, アプリ開発, Next.js, TypeScript, React, Webアプリ, 対面講座, プログラミング学習, ゲーミフィケーション",
  authors: [{ name: "習慣化テック" }],
  openGraph: {
    title: "習慣化テック | 科学に基づいた習慣化アプリ & Webアプリ開発講座",
    description: "ゲーミフィケーションで楽しく継続できる習慣化アプリと、実践的なWebアプリ開発講座",
    type: "website",
    url: "https://habit-tech.vercel.app",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "習慣化テック - 習慣を変えるアプリ & 技術",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "習慣化テック | 科学に基づいた習慣化アプリ & Webアプリ開発講座",
    description: "ゲーミフィケーションで楽しく継続できる習慣化アプリと、実践的なWebアプリ開発講座",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
