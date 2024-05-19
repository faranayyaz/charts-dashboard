import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

interface DateRangeFilterProps {
  startDate: string;
  endDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
}

const DateRangeFilter: React.FC<DateRangeFilterProps> = ({ startDate, endDate, onStartDateChange, onEndDateChange }) => {
  return (
    <Form className="mb-3">
      <Row>
        <Col xs={12} md={6}>
          <Form.Group controlId="startDate">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type="date"
              value={startDate}
              onChange={(e) => onStartDateChange(e.target.value)}
              className="ml-2"
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group controlId="endDate">
            <Form.Label>End Date</Form.Label>
            <Form.Control
              type="date"
              value={endDate}
              onChange={(e) => onEndDateChange(e.target.value)}
              className="ml-2"
            />
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default DateRangeFilter;
