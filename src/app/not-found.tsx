import { Button } from '@/components/ui/Button';
import { Search, Home } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "ページが見つかりません | Habit Labo",
  description: "お探しのページが見つかりませんでした。習慣化テックのホームページに戻って、習慣化アプリやWebアプリ開発講座をお探しください。",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <div className="text-center space-y-6 p-8">
        <div className="space-y-4">
          <h1 className="text-8xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            ページが見つかりません
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-md">
            申し訳ございません。お探しのページは存在しないか、
            移動または削除された可能性があります。
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              ホームに戻る
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <a href="#apps">
              <Search className="w-4 h-4 mr-2" />
              アプリを探す
            </a>
          </Button>
        </div>

        <div className="pt-8">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            引き続きお困りの場合は、
            <a href="#contact" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">
              お問い合わせ
            </a>
            ください。
          </p>
        </div>
      </div>
    </div>
  );
} 