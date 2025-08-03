import { Button } from './ui/Button';
import { ArrowDown, Code, Smartphone, Target } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              Habit Labo
              
              
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              科学に基づいた<span className="font-semibold text-blue-600 dark:text-blue-400">習慣化アプリ</span>と、それを作る技術を学べる
              <br />
              <span className="font-semibold text-blue-600 dark:text-blue-400">対面講座</span>
              をご紹介します
            </p>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-3 p-6 bg-white/70 dark:bg-gray-800/70 rounded-2xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">実証済みアプリ</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                ゲーミフィケーションで楽しく継続
              </p>
            </div>

            <div className="flex flex-col items-center space-y-3 p-6 bg-white/70 dark:bg-gray-800/70 rounded-2xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">実践的学習</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                Next.js・TypeScriptで実際に開発
              </p>
            </div>

            <div className="flex flex-col items-center space-y-3 p-6 bg-white/70 dark:bg-gray-800/70 rounded-2xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-600 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">対面サポート</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                個人の学習ペースに合わせた指導
              </p>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="#apps">
                アプリを体験する
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#courses">
                講座詳細を見る
              </a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
} 