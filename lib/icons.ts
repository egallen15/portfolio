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
  BoltIcon
} from '@heroicons/react/20/solid'

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
} as const

export type IconName = keyof typeof icons