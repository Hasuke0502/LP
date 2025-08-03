import { Hero } from '@/components/Hero';
import { AppShowcase } from '@/components/AppShowcase';
import { CourseShowcase } from '@/components/CourseShowcase';
import { Footer } from '@/components/Footer';
import { getFeaturedHabitApps, getFeaturedWebAppCourses } from '@/lib/data';

export default function Home() {
  const featuredApps = getFeaturedHabitApps();
  const featuredCourses = getFeaturedWebAppCourses();

  return (
    <main className="min-h-screen">
      <Hero />
      <AppShowcase apps={featuredApps} />
      <CourseShowcase courses={featuredCourses} />
      <Footer />
    </main>
  );
}
