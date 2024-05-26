export interface Dividend {
  name: string,
  detachment_date: Date,
  amount?: number,
  income: number
}

export function mapJsonToDividend(json: any): Dividend {
  return {
    name: json.name,
    detachment_date: new Date(json.detachment_date),
    amount: json.amount,
    income: json.income
  }
}
