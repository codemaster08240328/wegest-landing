import { IService } from './service'
import { ITechNote } from './tech-note'

export interface IClient {
  id: string
  firstName: string
  lastName: string
  gender: string
  date?: Date
  transactionId?: string
  frequency?: string
  frequencyVariation?: string
  serviceHistory?: IService[]
  serviceAssigned?: IService[]
  techNotes?: ITechNote[]
}
