import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "読み込み中 | Habit Labo",
  description: "ページを読み込み中です。しばらくお待ちください。",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 mx-auto">
          <div className="grid grid-cols-2 gap-1">
            <div className="w-6 h-6 bg-blue-500 rounded animate-pulse"></div>
            <div className="w-6 h-6 bg-purple-500 rounded animate-pulse animation-delay-200"></div>
            <div className="w-6 h-6 bg-pink-500 rounded animate-pulse animation-delay-400"></div>
            <div className="w-6 h-6 bg-blue-500 rounded animate-pulse animation-delay-600"></div>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-400">
          読み込み中...
        </p>
      </div>
    </div>
  );
} 