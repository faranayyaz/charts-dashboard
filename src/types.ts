export interface DataPoint {
  date: string;
  value: number;
}

export interface Chart {
  id: string;
  name: string;
  type: string;
  color: string;
  data: DataPoint[];
}
