export interface DataPoint {
  date: string;
  value: number;
}

export const generateRandomData = (numPoints: number): DataPoint[] => {
  const data: DataPoint[] = [];
  const currentDate = new Date();
  
  for (let i = 0; i < numPoints; i++) {
    const date = new Date(currentDate);
    date.setDate(currentDate.getDate() - i);
    data.push({
      date: date.toISOString().split('T')[0], // Format the date as YYYY-MM-DD
      value: Math.floor(Math.random() * 100), // Random value between 0 and 99
    });
  }

  return data.reverse(); // Reverse to have the oldest date first
};
