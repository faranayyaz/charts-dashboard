import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { Chart } from '../types';

interface ChartTableProps {
  charts: Chart[];
  onEdit: (chart: Chart) => void;
  onRemove: (id: string) => void;
}

const ChartTable: React.FC<ChartTableProps> = ({ charts, onEdit, onRemove }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Color</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {charts.map(chart => (
          <tr key={chart.id}>
            <td>{chart.name}</td>
            <td>{chart.type}</td>
            <td>{chart.color}</td>
            <td>
              <Button variant="link" onClick={() => onEdit(chart)}>Edit</Button>
              <Button variant="link" onClick={() => onRemove(chart.id)}>Remove</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ChartTable;
