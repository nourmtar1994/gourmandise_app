import { Card, Col, Row } from "antd";
import React from "react";

const Dashboard = () => {
  return (
    <Row gutter={[30, 30]}>
      <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
        <Card title="graph 1 ">&</Card>
      </Col>
      <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
        <Card title="graph 2 "></Card>
      </Col>
      <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
        <Card title="graph 3 "></Card>
      </Col>
      <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
        <Card title="graph 4 "></Card>
      </Col>
      <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
        <Card title="graph 1 "></Card>
      </Col>
      <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
        <Card title="graph 2 "></Card>
      </Col>
      <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
        <Card title="graph 3 "></Card>
      </Col>
      <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
        <Card title="graph 4 "></Card>
      </Col>
    </Row>
  );
};
export default Dashboard;
