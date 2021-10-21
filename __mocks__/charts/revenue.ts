interface IMonth {
  month: string
  2019: number
  2020: number
  2021: number
  '2019Color': string
  '2020Color': string
  '2021Color': string
}

interface IDepartment {
  department: string
  value: number
  valueColor: string
}

const dataColors = {
  '2019Color': '#81C884',
  '2020Color': '#E37372',
  '2021Color': '#64B5F6',
}

export const revenue: IMonth[] = [
  {
    month: 'Jan',
    2019: 12175,
    2020: 5503,
    2021: 3151,
    ...dataColors,
  },
  {
    month: 'Feb',
    2019: 20778,
    2020: 2846,
    2021: 3446,
    ...dataColors,
  },
  {
    month: 'Mar',
    2019: 10838,
    2020: 5836,
    2021: 3446,
    ...dataColors,
  },
  {
    month: 'Apr',
    2019: 4730,
    2020: 1915,
    2021: 4676,
    ...dataColors,
  },
  {
    month: 'May',
    2019: 3317,
    2020: 2363,
    2021: 0,
    ...dataColors,
  },
  {
    month: 'Jun',
    2019: 11273,
    2020: 2570,
    2021: 0,
    ...dataColors,
  },
  {
    month: 'Jul',
    2019: 18117,
    2020: 2425,
    2021: 0,
    ...dataColors,
  },
  {
    month: 'Aug',
    2019: 4658,
    2020: 2844,
    2021: 0,
    ...dataColors,
  },
  {
    month: 'Sep',
    2019: 3943,
    2020: 2108,
    2021: 0,
    ...dataColors,
  },
  {
    month: 'Oct',
    2019: 1174,
    2020: 4013,
    2021: 0,
    ...dataColors,
  },
  {
    month: 'Nov',
    2019: 9833,
    2020: 423,
    2021: 0,
    ...dataColors,
  },
  {
    month: 'Dec',
    2019: 1524,
    2020: 4697,
    2021: 0,
    ...dataColors,
  },
]

const getMonthValue = (index: number, year: string) => {
  const value: number = (revenue[index] as any)[year]

  if (Number(value) === 0) return 0

  return (value / 1000).toFixed(3)
}

const getYearTotal = (year: string) => {
  return (
    revenue.reduce((sum, month) => Number((month as any)[year]) + sum, 0) / 1000
  ).toFixed(3)
}

export const revenueTable = [
  {
    year: '2019',
    Jan: getMonthValue(0, '2019'),
    Feb: getMonthValue(1, '2019'),
    Mar: getMonthValue(2, '2019'),
    Apr: getMonthValue(3, '2019'),
    May: getMonthValue(4, '2019'),
    Jun: getMonthValue(5, '2019'),
    Jul: getMonthValue(6, '2019'),
    Aug: getMonthValue(7, '2019'),
    Sep: getMonthValue(8, '2019'),
    Oct: getMonthValue(9, '2019'),
    Nov: getMonthValue(10, '2019'),
    Dec: getMonthValue(11, '2019'),
    Total: getYearTotal('2019'),
  },
  {
    year: '2020',
    Jan: getMonthValue(0, '2020'),
    Feb: getMonthValue(1, '2020'),
    Mar: getMonthValue(2, '2020'),
    Apr: getMonthValue(3, '2020'),
    May: getMonthValue(4, '2020'),
    Jun: getMonthValue(5, '2020'),
    Jul: getMonthValue(6, '2020'),
    Aug: getMonthValue(7, '2020'),
    Sep: getMonthValue(8, '2020'),
    Oct: getMonthValue(9, '2020'),
    Nov: getMonthValue(10, '2020'),
    Dec: getMonthValue(11, '2020'),
    Total: getYearTotal('2020'),
  },
  {
    year: '2021',
    Jan: getMonthValue(0, '2021'),
    Feb: getMonthValue(1, '2021'),
    Mar: getMonthValue(2, '2021'),
    Apr: getMonthValue(3, '2021'),
    May: getMonthValue(4, '2021'),
    Jun: getMonthValue(5, '2021'),
    Jul: getMonthValue(6, '2021'),
    Aug: getMonthValue(7, '2021'),
    Sep: getMonthValue(8, '2021'),
    Oct: getMonthValue(9, '2021'),
    Nov: getMonthValue(10, '2021'),
    Dec: getMonthValue(11, '2021'),
    Total: getYearTotal('2021'),
  },
]
