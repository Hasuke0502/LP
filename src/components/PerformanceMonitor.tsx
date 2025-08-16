'use client';

import { useEffect } from 'react';

export function PerformanceMonitor() {
  useEffect(() => {
    // Core Web Vitalsの測定
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // LCP (Largest Contentful Paint)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          console.log('LCP:', lastEntry.startTime);
          // ここでAnalyticsに送信
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // FID (First Input Delay)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          console.log('FID:', entry.processingStart - entry.startTime);
          // ここでAnalyticsに送信
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // CLS (Cumulative Layout Shift)
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        console.log('CLS:', clsValue);
        // ここでAnalyticsに送信
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // クリーンアップ
      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, []);

  return null;
}

// パフォーマンスメトリクスを取得する関数
export function getPerformanceMetrics() {
  if (typeof window === 'undefined') return null;

  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  if (!navigation) return null;

  return {
    // DNS解決時間
    dnsLookup: navigation.domainLookupEnd - navigation.domainLookupStart,
    // TCP接続時間
    tcpConnection: navigation.connectEnd - navigation.connectStart,
    // サーバー応答時間
    serverResponse: navigation.responseEnd - navigation.requestStart,
    // DOM構築時間
    domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
    // ページ読み込み完了時間
    pageLoad: navigation.loadEventEnd - navigation.loadEventStart,
    // 総合時間
    totalTime: navigation.loadEventEnd - navigation.navigationStart,
  };
}

// リソース読み込み時間を取得する関数
export function getResourceTiming() {
  if (typeof window === 'undefined') return [];

  const resources = performance.getEntriesByType('resource');
  return resources.map((resource: any) => ({
    name: resource.name,
    duration: resource.duration,
    size: resource.transferSize,
    type: resource.initiatorType,
  }));
}
