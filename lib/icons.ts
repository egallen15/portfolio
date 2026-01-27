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
  ClockIcon,
  PaintBrushIcon,
  TicketIcon,
  CreditCardIcon
} from '@heroicons/react/24/outline'
import { SketchIcon, ZeplinIcon } from './custom-icons'

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
  'ticket': TicketIcon,
  'credit-card': CreditCardIcon,
  'procreate': PaintBrushIcon,
  'sketch': SketchIcon,
  'zeplin': ZeplinIcon,
} as const

export type IconName = keyof typeof icons