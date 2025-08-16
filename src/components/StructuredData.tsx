import { useEffect } from 'react';

interface StructuredDataProps {
  data: Record<string, any>;
}

export function StructuredData({ data }: StructuredDataProps) {
  useEffect(() => {
    // 既存の構造化データを削除
    const existingScript = document.querySelector('script[data-structured-data]');
    if (existingScript) {
      existingScript.remove();
    }

    // 新しい構造化データを追加
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-structured-data', 'true');
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);

    // クリーンアップ
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [data]);

  return null; // このコンポーネントは何もレンダリングしない
}

// 習慣化アプリ用の構造化データ
export function HabitAppStructuredData({ app }: { app: any }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": app.name,
    "description": app.description,
    "applicationCategory": "ProductivityApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "JPY"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "ratingCount": "100"
    }
  };

  return <StructuredData data={data} />;
}

// Webアプリ開発講座用の構造化データ
export function CourseStructuredData({ course }: { course: any }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.name,
    "description": course.description,
    "provider": {
      "@type": "Organization",
      "name": "習慣化テック",
      "url": "https://habit-tech.vercel.app"
    },
    "courseMode": "offline",
    "educationalLevel": "Beginner",
    "inLanguage": "ja",
    "offers": {
      "@type": "Offer",
      "price": course.price || "0",
      "priceCurrency": "JPY"
    }
  };

  return <StructuredData data={data} />;
}

// サプリメント管理アプリ用の構造化データ
export function SupplementAppStructuredData({ supplement }: { supplement: any }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": supplement.name,
    "description": supplement.description,
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "JPY"
    }
  };

  return <StructuredData data={data} />;
}
