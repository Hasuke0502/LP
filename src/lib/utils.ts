import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// 返金額計算（参加費-500円）×（記録成功日/30）
export function calculateRefund(participationFee: number, successDays: number): number {
  return Math.max(0, (participationFee - 500) * (successDays / 30))
}

// 募金額計算：参加費×（記録成功日/30）
export function calculateDonation(participationFee: number, successDays: number): number {
  return participationFee * (successDays / 30)
}

// 日付フォーマット関数
export function formatDate(date: Date): string {
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
} 