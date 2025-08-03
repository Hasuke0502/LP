export interface User {
  id: string
  email: string
  created_at: string
  updated_at: string
}

export interface Challenge {
  id: string
  user_id: string
  participation_fee: number
  start_date: string
  end_date: string
  status: 'active' | 'completed' | 'failed'
  refund_option: 'refund' | 'donate'
  created_at: string
  updated_at: string
}

export interface DailyRecord {
  id: string
  challenge_id: string
  user_id: string
  date: string
  recorded: boolean
  smoked: boolean | null
  notes?: string
  created_at: string
}

export interface PaymentTransaction {
  id: string
  challenge_id: string
  user_id: string
  amount: number
  type: 'participation' | 'refund' | 'donation'
  stripe_payment_intent_id?: string
  status: 'pending' | 'completed' | 'failed'
  created_at: string
}

export interface MoneyMonster {
  level: number
  experience: number
  coins: number
}

export interface GameProgress {
  successDays: number
  totalDays: number
  currentStreak: number
  longestStreak: number
  moneyMonster: MoneyMonster
}

export interface HabitApp {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  category: string;
  tags: string[];
  image: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  webUrl?: string;
  featured: boolean;
  comingSoon?: boolean;
}

export interface WebAppCourse {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  instructor: string;
  duration: string;
  price: number;
  level: 'beginner' | 'intermediate' | 'advanced';
  technologies: string[];
  image: string;
  detailUrl: string;
  featured: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
} 