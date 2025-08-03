import { WebAppCourse } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/Card';
import { Button } from './ui/Button';
import { Clock, User, TrendingUp, ArrowRight, MessageCircle } from 'lucide-react';
import Image from 'next/image';

interface CourseCardProps {
  course: WebAppCourse;
}

const levelLabels = {
  beginner: '初級',
  intermediate: '中級',
  advanced: '上級',
};

const levelColors = {
  beginner: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
  intermediate: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
  advanced: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
};

export function CourseCard({ course }: CourseCardProps) {
  const formatPrice = (price: number) => {
    return price.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' });
  };

  // 実践的な対面講座かどうかを判定
  const isInPersonCourse = course.id === 'nextjs-habit-app-course';
  
  // InstagramのDMリンク
  const instagramDmUrl = 'https://www.instagram.com/big__leaf0502/';

  return (
    <Card className="group overflow-hidden hover:scale-105 transition-transform duration-300">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        {course.featured && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-400 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            人気
          </div>
        )}
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${levelColors[course.level]}`}>
          {levelLabels[course.level]}
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-gray-900 dark:text-gray-100">{course.title}</CardTitle>
        <CardDescription>{course.shortDescription}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3 mb-4">
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <User className="w-4 h-4 mr-2" />
            {course.instructor}
          </div>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <Clock className="w-4 h-4 mr-2" />
            {course.duration}
          </div>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <TrendingUp className="w-4 h-4 mr-2" />
            受講料: <span className="font-semibold text-blue-600 dark:text-blue-400 ml-1">{formatPrice(course.price)}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1">
          {course.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full border border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="flex flex-col space-y-3">
        {isInPersonCourse && (
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            受講についてはインスタでのDMで受け付けております。
          </p>
        )}
        <Button 
          className={`w-full group ${isInPersonCourse ? 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700' : ''}`} 
          asChild
        >
          <a href={isInPersonCourse ? instagramDmUrl : course.detailUrl} target={isInPersonCourse ? '_blank' : undefined} rel={isInPersonCourse ? 'noopener noreferrer' : undefined}>
            {isInPersonCourse ? (
              <>
                <MessageCircle className="w-4 h-4 mr-2" />
                Instagramはこちら
              </>
            ) : (
              <>
                詳細を見る
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
} 