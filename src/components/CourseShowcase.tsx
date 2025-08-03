import { WebAppCourse } from '@/types';
import { CourseCard } from './CourseCard';

interface CourseShowcaseProps {
  courses: WebAppCourse[];
}

export function CourseShowcase({ courses }: CourseShowcaseProps) {
  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            実践的な
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {' '}対面講座
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            プロの指導のもと、実際に動作するWebアプリを開発しながら学習。
            個人のペースに合わせたサポートで、確実にスキルアップできます。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {courses.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 dark:text-gray-400">
              現在準備中の講座があります。近日開講予定です。
            </p>
          </div>
        )}

        {/* Additional info section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-8 lg:p-12">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              なぜ対面講座なのか？
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="space-y-3">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-2xl">👥</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">個別指導</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  一人ひとりの理解度に合わせた丁寧な指導で、確実にスキルを身につけます
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-2xl">💡</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">即座の解決</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  疑問点やエラーをその場で解決。学習効率が格段に向上します
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">実践重視</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  実際のプロジェクトを通じて、現場で使える技術を習得できます
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 