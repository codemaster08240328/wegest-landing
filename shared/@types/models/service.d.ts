export interface IService {
  id: string
  name: string
  startHour?: number
  startMinute?: number
  endHour?: number
  endMinute?: number
  operator?: boolean
  operatorId?: string
  operatorInitials?: string
  display?: boolean
  color?: string
  days?: number
}
