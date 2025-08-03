import { Github, Twitter, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              習慣化テック
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              科学に基づいた習慣化アプリと、それを作る技術を学べる対面講座を提供しています。
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Apps */}
          <div className="space-y-4">
            <h4 className="font-semibold">アプリ</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://kinnen-gnff.vercel.app/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  禁煙30日チャレンジ
                </a>
              </li>
              <li>
                <span className="text-gray-500 cursor-not-allowed">
                  ダイエット30日チャレンジ（準備中）
                </span>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  フィットネストラッカー
                </a>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div className="space-y-4">
            <h4 className="font-semibold">講座</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  鹿児島市限定Webアプリ講座
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  React基礎マスター講座
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  フルスタック開発マスター講座
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <p>&copy; {currentYear} 習慣化テック. All rights reserved.</p>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-white transition-colors">
                  プライバシーポリシー
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  利用規約
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-1 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for better habits</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 