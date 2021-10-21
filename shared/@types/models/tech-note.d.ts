export interface ITypology {
  id: string
  type: string
  note: string
}

export interface ITechNote {
  date: string
  notes?: ITypology[]
}
