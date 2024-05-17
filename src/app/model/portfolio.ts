import { mapJsonToStock, Stock } from "./stock";

export interface Portfolio {
  id: string;
  portfolio_date: Date;
  stocks: Stock[];
  total_gain_deficit: number;
  total_investment_amount: number;
  total_market_value: number;
}

export function mapJsonToPortfolio(json: any): Portfolio {
  return {
    id: json.id,
    portfolio_date: new Date(json.portfolio_date),
    stocks: json.stocks.map(mapJsonToStock),
    total_gain_deficit: json.total_gain_deficit,
    total_investment_amount: json.total_investment_amount,
    total_market_value: json.total_market_value
  };
}

export function updateStockChanges(portfolios: Portfolio[]): Portfolio[] {
  return portfolios.reduce((acc, currentPortfolio, index) => {
    if (index === 0) {
      return [...acc, currentPortfolio];
    }

    const previousPortfolio = acc[index - 1];

    const updatedStocks = currentPortfolio.stocks.map(currentStock => {
      const previousStock = previousPortfolio.stocks.find(
        stock => stock.name === currentStock.name
      );

      let change: 'increased' | 'decreased' | 'unchanged' = "unchanged";

      if (previousStock) {
        if (currentStock.current_price > previousStock.current_price) {
          change = 'increased';
        } else if (currentStock.current_price < previousStock.current_price) {
          change = 'decreased';
        } else {
          change = 'unchanged';
        }
      }

      return {
        ...currentStock,
        change
      };
    });

    const updatedPortfolio = {
      ...currentPortfolio,
      stocks: updatedStocks
    };

    return [...acc, updatedPortfolio];
  }, [] as Portfolio[]);
}
