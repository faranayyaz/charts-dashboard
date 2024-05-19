import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { generateRandomData } from '../utils/dataGenerator';

interface DataPoint {
  date: string;
  value: number;
}

interface Chart {
  id: string;
  name: string;
  type: string;
  color: string;
  data: DataPoint[];
}

interface ChartState {
  charts: Chart[];
}

const initialState: ChartState = {
  charts: [],
};

const chartSlice = createSlice({
  name: 'charts',
  initialState,
  reducers: {
    addChart(state, action: PayloadAction<Chart>) {
      const newChart = {
        ...action.payload,
        data: action.payload.data || generateRandomData(30) // Ensure random data if not provided
      };
      state.charts.push(newChart);
    },
    updateChart(state, action: PayloadAction<Chart>) {
      const index = state.charts.findIndex(chart => chart.id === action.payload.id);
      if (index >= 0) {
        state.charts[index] = {
          ...action.payload,
          data: action.payload.data || state.charts[index].data // Preserve existing data if not provided
        };
      }
    },
    removeChart(state, action: PayloadAction<string>) {
      state.charts = state.charts.filter(chart => chart.id !== action.payload);
    },
  },
});

export const { addChart, updateChart, removeChart } = chartSlice.actions;
export default chartSlice.reducer;
