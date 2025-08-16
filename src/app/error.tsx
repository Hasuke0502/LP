'use client';

import { Metadata } from 'next';

// エラーページのメタデータ（クライアントコンポーネントでは使用できないため、コメントアウト）
/*
export const metadata: Metadata = {
  title: "エラーが発生しました | Habit Labo",
  description: "ページの読み込み中にエラーが発生しました。しばらく時間をおいてから再度お試しください。",
  robots: {
    index: false,
    follow: false,
  },
};
*/

import { Button } from '@/components/ui/Button';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <div className="text-center space-y-6 p-8">
        <div className="w-24 h-24 mx-auto bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
          <AlertTriangle className="w-12 h-12 text-red-600 dark:text-red-400" />
        </div>
        
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            エラーが発生しました
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-md">
            申し訳ございません。予期しないエラーが発生しました。
            しばらく時間をおいてから再度お試しください。
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset}>
            <RefreshCw className="w-4 h-4 mr-2" />
            再試行
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">
              ホームに戻る
            </Link>
          </Button>
        </div>

        {process.env.NODE_ENV === 'development' && (
          <details className="mt-8 text-left bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
            <summary className="cursor-pointer text-sm font-medium">
              エラー詳細 (開発モード)
            </summary>
            <pre className="mt-2 text-xs text-gray-600 dark:text-gray-400 overflow-auto">
              {error.message}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
} 