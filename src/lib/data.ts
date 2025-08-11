import { HabitApp, WebAppCourse, SupplementProduct } from '@/types';
import habitAppsData from '../../data/habit-apps.json';
import webAppCoursesData from '../../data/web-app-courses.json';
import supplementsData from '../../data/supplements.json';

export function getHabitApps(): HabitApp[] {
  return habitAppsData as HabitApp[];
}

export function getFeaturedHabitApps(): HabitApp[] {
  return getHabitApps().filter(app => app.featured);
}

export function getWebAppCourses(): WebAppCourse[] {
  return webAppCoursesData as WebAppCourse[];
}

export function getFeaturedWebAppCourses(): WebAppCourse[] {
  return getWebAppCourses().filter(course => course.featured);
} 

export function getSupplements(): SupplementProduct[] {
  return supplementsData as SupplementProduct[];
}

export function getFeaturedSupplements(): SupplementProduct[] {
  return getSupplements().filter(product => product.featured);
}