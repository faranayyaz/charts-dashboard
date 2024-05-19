import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import DateRangeFilter from '../components/DateRangeFilter';
import ChartList from '../components/ChartList';
import { formatDate } from '../utils/dateHelper';

const ViewMode: React.FC = () => {
  const today = new Date();
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(today.getDate() - 30);

  const [startDate, setStartDate] = useState<string>(formatDate(thirtyDaysAgo));
  const [endDate, setEndDate] = useState<string>(formatDate(today));
  const charts = useSelector((state: RootState) => state.charts.charts);

  // Filter charts based on the selected date range
  const filteredCharts = charts.filter(chart => 
    chart.data && chart.data.some(data => data.date >= startDate && data.date <= endDate)
  );

  // Filter data points in each chart based on the selected date range
  const filteredChartData = filteredCharts.map(chart => ({
    ...chart,
    data: chart.data.filter(data => data.date >= startDate && data.date <= endDate),
  }));
  
  return (
    <div className='pt-3'>
      {charts.length > 0 && (
        <DateRangeFilter
          startDate={startDate}
          endDate={endDate}
          onStartDateChange={setStartDate}
          onEndDateChange={setEndDate}
        />
      )}
      <ChartList charts={filteredChartData} />
    </div>
  );
};

export default ViewMode;
