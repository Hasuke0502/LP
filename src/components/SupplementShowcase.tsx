import { SupplementProduct } from '@/types';
import { SupplementCard } from './SupplementCard';

interface SupplementShowcaseProps {
  products: SupplementProduct[];
}

export function SupplementShowcase({ products }: SupplementShowcaseProps) {
  return (
    <section id="supplements" className="py-20 bg-gradient-to-b from-white to-green-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            健康をサポートする
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              {' '}おすすめサプリ
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            科学的根拠を重視し、品質とコスパの良さにこだわって厳選しました。リンクはiHerbのアフィリエイトを利用しています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <SupplementCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            ※ 価格・在庫は変動します。詳細はiHerbの商品ページでご確認ください。
          </p>
        </div>
      </div>
    </section>
  );
}


