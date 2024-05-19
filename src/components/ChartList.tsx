import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Chart } from '../types';
import ChartItem from './ChartItem';

interface ChartListProps {
  charts: Chart[];
}

const ChartList: React.FC<ChartListProps> = ({ charts }) => {
  return (
    <Row>
      {charts.length === 0 ? (
        <p>No charts available.</p>
      ) : (
        charts.map(chart => (
          <Col key={chart.id} xs={12} md={6} lg={6} className="mb-4">
            <ChartItem chart={chart} />
          </Col>
        ))
      )}
    </Row>
  );
};

export default ChartList;
