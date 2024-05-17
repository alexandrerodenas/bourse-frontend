export interface Stock {
  name: string;
  number: number;
  status: string;
  date: Date;
  unit_cost: number;
  current_price: number;
  stock_value_investment: number;
  stock_value_estimation: number;
  difference_value_euros: number;
  difference_value_percentage: number;
  change?: 'increased' | 'decreased' | 'unchanged';
}

export function mapJsonToStock(json: any): Stock {
  return {
    name: json.name,
    number: json.number,
    status: json.status,
    date: new Date(json.date),
    unit_cost: json.unit_cost,
    current_price: json.current_price,
    stock_value_investment: json.stock_value_investment,
    stock_value_estimation: json.stock_value_estimation,
    difference_value_euros: json.difference_value_euros,
    difference_value_percentage: json.difference_value_percentage,
    change: json.change
  };
}
