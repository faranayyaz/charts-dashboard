import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { Chart } from '../types';

interface ChartModalProps {
  show: boolean;
  chart: Chart | null;
  onHide: () => void;
  onSave: (chart: Chart) => void;
}

const ChartModal: React.FC<ChartModalProps> = ({ show, chart, onHide, onSave }) => {
  const [name, setName] = useState(chart?.name || '');
  const [type, setType] = useState(chart?.type || 'line');
  const [color, setColor] = useState(chart?.color || '');

  useEffect(() => {
    if (chart) {
      setName(chart.name);
      setType(chart.type);
      setColor(chart.color);
    }
  }, [chart]);

  const handleSave = () => {
    if (chart) {
      onSave({ ...chart, name, type, color });
    } else {
      onSave({ id: '', name, type, color, data: [] });
    }
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{chart?.id ? 'Edit Chart' : 'Add Chart'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="chartName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="chartType">
            <Form.Label>Type</Form.Label>
            <Form.Control
              as="select"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="line">Line</option>
              <option value="spline">Spline</option>
              <option value="area">Area</option>
              <option value="bar">Bar</option>
              <option value="column">Column</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="chartColor">
            <Form.Label>Color</Form.Label>
            <Form.Control
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ChartModal;
