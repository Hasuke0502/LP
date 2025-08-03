import { HabitApp } from '@/types';
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/Card';
import { Button } from './ui/Button';
import { Smartphone, Lock, Eye } from 'lucide-react';
import Image from 'next/image';

interface HabitAppCardProps {
  app: HabitApp;
}

export function HabitAppCard({ app }: HabitAppCardProps) {
  return (
    <div className="rounded-2xl border bg-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl dark:bg-gray-900/50 dark:border-gray-700 group overflow-hidden hover:scale-105 transition-transform duration-300">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={app.image}
          alt={app.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        {app.featured && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            おすすめ
          </div>
        )}
        {app.comingSoon && (
          <div className="absolute top-4 right-4 bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
            <Lock className="w-3 h-3" />
            準備中
          </div>
        )}
      </div>
      
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-gray-900 dark:text-gray-100">{app.title}</CardTitle>
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full dark:bg-blue-900 dark:text-blue-300">
            {app.category}
          </span>
        </div>
        <CardDescription>{app.shortDescription}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex flex-wrap gap-1 mb-4">
          {app.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full dark:bg-gray-800 dark:text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="flex flex-wrap gap-2">
        {app.webUrl && (
          <Button 
            size="sm" 
            variant="primary" 
            asChild 
            className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <a href={app.webUrl} target="_blank" rel="noopener noreferrer">
              <Eye className="w-4 h-4 mr-2" />
              詳細を見る
            </a>
          </Button>
        )}
        {app.appStoreUrl && (
          <Button size="sm" variant="outline" asChild>
            <a href={app.appStoreUrl} target="_blank" rel="noopener noreferrer">
              <Smartphone className="w-4 h-4 mr-2" />
              App Store
            </a>
          </Button>
        )}
        {app.playStoreUrl && (
          <Button size="sm" variant="outline" asChild>
            <a href={app.playStoreUrl} target="_blank" rel="noopener noreferrer">
              <Smartphone className="w-4 h-4 mr-2" />
              Google Play
            </a>
          </Button>
        )}
      </CardFooter>
    </div>
  );
} 