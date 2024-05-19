// src/pages/Settings.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { addChart, updateChart, removeChart } from '../store/chartSlice';
import { Button } from 'react-bootstrap';
import { Chart } from '../types';
import { v4 as uuidv4 } from 'uuid';
import { generateRandomData } from '../utils/dataGenerator';
import ChartTable from '../components/ChartTable';
import ChartModal from '../components/ChartModal';

const Settings: React.FC = () => {
  const charts = useSelector((state: RootState) => state.charts.charts);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [editingChart, setEditingChart] = useState<Chart | null>(null);

  const handleClose = () => setShow(false);
  const handleShow = (chart: Chart | null) => {
    setEditingChart(chart);
    setShow(true);
  };

  const handleSave = (chart: Chart) => {
    const chartWithData = {
      ...chart,
      data: chart.data.length ? chart.data : generateRandomData(30) // Generate random data if not present
    };
    if (chart.id) {
      dispatch(updateChart(chartWithData));
    } else {
      dispatch(addChart({ ...chartWithData, id: uuidv4() }));
    }
    handleClose();
  };

  return (
    <div className='pt-3'>
      <div className="d-flex justify-content-end mb-3">
        <Button variant="primary" onClick={() => handleShow(null)}>
          Add Chart
        </Button>
      </div>
      {charts.length > 0 ? (
        <ChartTable
          charts={charts}
          onEdit={handleShow}
          onRemove={(id) => dispatch(removeChart(id))}
        />
      ) : (
        <p>No charts available.</p>
      )}
      <ChartModal
        show={show}
        chart={editingChart}
        onHide={handleClose}
        onSave={handleSave}
      />
    </div>
  );
};

export default Settings;
