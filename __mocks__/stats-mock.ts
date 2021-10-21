import { IResume } from '@/shared/@types/models/stastics'

export const resume: Record<string, IResume> = {
  month: {
    revenue: 4675.64,
    avgReceiptValue: 203.29,
    fees: 3878.77,
    serviceFees: 3806.25,
    productFees: 72.52,
    attendance: 23,
    newCustomers: 1,
    handledCustomer: 11,
    expenses: 1105.32,
    netIncome: 3570.32,
  },

  today: {
    revenue: 0,
    avgReceiptValue: 0,
    fees: 0,
    serviceFees: 0,
    productFees: 0,
    attendance: 0,
    newCustomers: 0,
    handledCustomer: 0,
    expenses: 0,
    netIncome: 0,
  },

  yesterday: {
    revenue: 166,
    avgReceiptValue: 166,
    fees: 0,
    serviceFees: 0,
    productFees: 0,
    attendance: 1,
    newCustomers: 0,
    handledCustomer: 1,
    expenses: 0,
    netIncome: 166,
  },
}
