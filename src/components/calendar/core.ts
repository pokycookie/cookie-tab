export type TCalendarStatus = 'prev' | 'current' | 'next'

export interface ICalendar {
  label: number
  date: Date
  status: TCalendarStatus
}

export function dailyArr(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay()
  const lastDate = new Date(year, month + 1, 0).getDate()
  const prevLastDate = new Date(year, month, 0).getDate()

  const result: ICalendar[] = []
  for (let i = 0; i < 42; i++) {
    let label: number
    let date: Date
    let status: TCalendarStatus
    if (i < firstDay) {
      // prev month
      label = prevLastDate - firstDay + i + 1
      date = new Date(year, month - 1, label)
      status = 'prev'
    } else if (i - firstDay + 1 <= lastDate) {
      // current month
      label = i - firstDay + 1
      date = new Date(year, month, label)
      status = 'current'
    } else {
      // next month
      label = i - firstDay - lastDate + 1
      date = new Date(year, month + 1, label)
      status = 'next'
    }
    result.push({ label, date, status })
  }
  return result
}
