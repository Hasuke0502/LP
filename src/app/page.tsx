import { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { AppShowcase } from '@/components/AppShowcase';
import { CourseShowcase } from '@/components/CourseShowcase';
import { Footer } from '@/components/Footer';
import { getFeaturedHabitApps, getFeaturedWebAppCourses, getFeaturedSupplements } from '@/lib/data';
import { SupplementShowcase } from '@/components/SupplementShowcase';

export const metadata: Metadata = {
  title: "ホーム",
  description: "習慣化テックの公式サイト。科学に基づいた習慣化アプリ、Webアプリ開発講座、サプリメント管理アプリを提供。Next.js、TypeScript、Reactを使った実践的な開発スキルを身につけよう。",
  keywords: "習慣化, アプリ開発, Next.js, TypeScript, React, Webアプリ, 対面講座, プログラミング学習, ゲーミフィケーション, 習慣化アプリ, サプリメント管理, ホーム",
  openGraph: {
    title: "ホーム | Habit Labo",
    description: "習慣化テックの公式サイト。科学に基づいた習慣化アプリ、Webアプリ開発講座、サプリメント管理アプリを提供。",
    url: "https://habit-tech.vercel.app/",
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const featuredApps = getFeaturedHabitApps();
  const featuredCourses = getFeaturedWebAppCourses();
  const featuredSupplements = getFeaturedSupplements();

  return (
    <main className="min-h-screen">
      <Hero />
      <AppShowcase apps={featuredApps} />
      <CourseShowcase courses={featuredCourses} />
      <SupplementShowcase products={featuredSupplements} />
      <Footer />
    </main>
  );
}
