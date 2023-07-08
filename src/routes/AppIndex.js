import React from 'react';
import { Col, Row } from 'reactstrap';
import { Outlet } from 'react-router';
import Sidebar from '../component/sidebar/Sidebar';

export default function AppIndex() {
  return (
    <div className="body">
      <Row>
        <Col md={2} className="fixed-sidebar">
          <Sidebar />
        </Col>
        <Col md={10} className="sm:pl-0">
          <div className="scrollable-outlet">
            <Col md={12}>
              <Outlet />
            </Col>
          </div>
        </Col>
      </Row>
    </div>
  );
}
