import {
  UsersIcon,
  CalendarDaysIcon,
  ChartBarIcon,
  CheckCircleIcon,
  QrCodeIcon,
  UserGroupIcon,
  UserPlusIcon,
  ShieldCheckIcon,
  CogIcon,
  BoltIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

export const icons = {
  'chart-bar': ChartBarIcon,
  'check-circle': CheckCircleIcon,
  'calendar': CalendarDaysIcon,
  'users': UsersIcon,
  'qr-code': QrCodeIcon,
  'user-group': UserGroupIcon,
  'user-plus': UserPlusIcon,
  'shield-check': ShieldCheckIcon,
  'cog': CogIcon,
  'bolt': BoltIcon,
  'clock': ClockIcon,
} as const

export type IconName = keyof typeof icons