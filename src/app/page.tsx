import { Hero } from '@/components/Hero';
import { AppShowcase } from '@/components/AppShowcase';
import { CourseShowcase } from '@/components/CourseShowcase';
import { Footer } from '@/components/Footer';
import { getFeaturedHabitApps, getFeaturedWebAppCourses, getFeaturedSupplements } from '@/lib/data';
import { SupplementShowcase } from '@/components/SupplementShowcase';

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
