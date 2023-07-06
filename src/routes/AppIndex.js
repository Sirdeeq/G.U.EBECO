import React from 'react'
import { Col, Row } from 'reactstrap'
import { Outlet } from 'react-router'
import Sidebar from '../component/sidebar/Sidebar'

export default function AppIndex() {
    return (
        <div className='body'>
            <Row>
                <Col md={2}>
                    <Sidebar />
                </Col>
                <Col md={10}>
                    <Col md={12}>
                        <Outlet />
                    </Col>
                </Col>
            </Row>
        </div>
    )
}
