import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PerformanceMonitor } from "@/components/PerformanceMonitor";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
// import { Analytics } from '@vercel/analytics/react'; // 無料プラン用にコメントアウト

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Habit Labo | 科学に基づいた習慣化アプリ & Webアプリ開発講座",
    template: "%s | Habit Labo"
  },
  description: "ゲーミフィケーションで楽しく継続できる習慣化アプリと、実践的なWebアプリ開発講座を提供。Next.js、TypeScript、Reactを使った実践的な開発スキルを身につけよう。",
  keywords: "習慣化, アプリ開発, Next.js, TypeScript, React, Webアプリ, 対面講座, プログラミング学習, ゲーミフィケーション, 習慣化アプリ, サプリメント管理",
  authors: [{ name: "習慣化テック", url: "https://habit-tech.vercel.app" }],
  creator: "習慣化テック",
  publisher: "習慣化テック",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://habit-tech.vercel.app"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.png", type: "image/png", sizes: "16x16" }
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
    other: [
      {
        rel: "mask-icon",
        url: "/favicon.png",
        color: "#000000"
      }
    ]
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Habit Labo | 科学に基づいた習慣化アプリ & Webアプリ開発講座",
    description: "ゲーミフィケーションで楽しく継続できる習慣化アプリと、実践的なWebアプリ開発講座を提供。Next.js、TypeScript、Reactを使った実践的な開発スキルを身につけよう。",
    type: "website",
    url: "https://habit-tech.vercel.app",
    siteName: "Habit Labo",
    locale: "ja_JP",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "習慣化テック - 習慣を変えるアプリ & 技術",
        type: "image/svg+xml"
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Habit Labo | 科学に基づいた習慣化アプリ & Webアプリ開発講座",
    description: "ゲーミフィケーションで楽しく継続できる習慣化アプリと、実践的なWebアプリ開発講座を提供。Next.js、TypeScript、Reactを使った実践的な開発スキルを身につけよう。",
    images: ["/og-image.svg"],
    creator: "@habit_tech",
    site: "@habit_tech"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "5NOB7-A-uQHkxAVwqpU-LTOKwmoZDpIMpV_INulLDpY",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
  classification: "Webアプリ開発・習慣化",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "習慣化テック",
              "url": "https://habit-tech.vercel.app",
              "logo": "https://habit-tech.vercel.app/favicon.png",
              "description": "科学に基づいた習慣化アプリ & Webアプリ開発講座を提供",
              "sameAs": [
                "https://twitter.com/habit_tech"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": "Japanese"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <PerformanceMonitor />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        {/* <Analytics /> 無料プラン用にコメントアウト */}
      </body>
    </html>
  );
}
