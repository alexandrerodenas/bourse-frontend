export interface Dividend {
  name: string,
  date: Date,
  amount?: number
}

export function mapJsonToDividend(json: any): Dividend {
  return {
    name: json.name,
    date: new Date(json.date),
    amount: json.amount
  }
}
