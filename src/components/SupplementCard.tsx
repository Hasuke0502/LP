import { SupplementProduct } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/Card';
import { Button } from './ui/Button';
import { ExternalLink, ShoppingCart } from 'lucide-react';
import Image from 'next/image';

interface SupplementCardProps {
  product: SupplementProduct;
}

// Google Analyticsの型定義
interface WindowWithGtag extends Window {
  gtag?: (command: string, action: string, params: Record<string, unknown>) => void;
}

export function SupplementCard({ product }: SupplementCardProps) {
  return (
    <Card className="h-full flex flex-col overflow-hidden">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover"
          loading="lazy"
        />
        <div className="absolute top-2 left-2">
          <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">
            {product.category}
          </span>
        </div>
      </div>

      <CardHeader>
        <CardTitle className="text-lg line-clamp-2">{product.title}</CardTitle>
        <CardDescription className="line-clamp-3">{product.description}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-1 mb-3">
          {product.tags.map((tag) => (
            <span key={tag} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-lg font-bold text-green-700">{product.price}</p>
      </CardContent>

      <CardFooter>
        <Button
          asChild
          className="w-full bg-green-600 hover:bg-green-700"
          onClick={() => {
            if (typeof window !== 'undefined') {
              const windowWithGtag = window as WindowWithGtag;
              if (windowWithGtag.gtag) {
                windowWithGtag.gtag('event', 'supplement_click', {
                  event_category: 'affiliate',
                  event_label: product.id,
                  value: 1,
                });
              }
            }
          }}
        >
          <a href={product.iherbUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            iHerbで見る
            <ExternalLink className="w-4 h-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}


