export interface ChartData {
  data: [];
  name: string;
}

export function mapToChartData(json: any): ChartData {
  return {
    name: json.name,
    data: json.data.map((item: any[]) => {
      const newItem = [...item];
      newItem[0] = new Date(item[0]).getTime();
      return newItem;
    })
  };
}
