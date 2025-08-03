import { HabitApp, WebAppCourse } from '@/types';
import habitAppsData from '../../data/habit-apps.json';
import webAppCoursesData from '../../data/web-app-courses.json';

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