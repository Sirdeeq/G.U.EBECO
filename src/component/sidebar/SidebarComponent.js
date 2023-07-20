import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Col, Row } from "reactstrap";
import Sidebar from "./Sidebar";

export default function SidebarComponent() {
  return (
    <div>
      <Row>
        <Col md={2}>
            <Sidebar />
        </Col>
        <Col md={10}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create-new-question">Create New Question</Link>
            </li>
            <li>
              <Link to="/cost-sheet">Cost Sheet</Link>
            </li>
            <li>
              <Link to="/report">Report</Link>
            </li>
            <li>
              <Link to="/com">My Component</Link>
            </li>
          </ul>
          <Outlet />
        </Col>
      </Row>
    </div>
  );
}
