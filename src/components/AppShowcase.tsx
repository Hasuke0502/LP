import { HabitApp } from '@/types';
import { HabitAppCard } from './HabitAppCard';

interface AppShowcaseProps {
  apps: HabitApp[];
}

export function AppShowcase({ apps }: AppShowcaseProps) {
  return (
    <section id="apps" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            習慣化を支援する
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}革新的アプリ
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            科学的根拠に基づいた手法と、楽しいゲーム要素を組み合わせた習慣化アプリをご体験ください。
            毎日の小さな変化が、大きな成果につながります。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app) => (
            <HabitAppCard key={app.id} app={app} />
          ))}
        </div>

        {apps.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 dark:text-gray-400">
              現在準備中のアプリがあります。近日公開予定です。
            </p>
          </div>
        )}
      </div>
    </section>
  );
} 