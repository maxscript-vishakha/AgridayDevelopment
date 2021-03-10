import React, { Component } from "react";
import "./SellerDashboard.css";
import {
  Typography,
  Row,
  Col,
  Card,
  Select,
  Avatar,
  Divider,
  Progress,
  Table,
  Tag,
  Button,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  SettingOutlined,
  CaretLeftOutlined,
  CaretUpOutlined,
  CaretDownFilled,
  GooglePlusOutlined,
  ShoppingCartOutlined,
  TeamOutlined,
  TagOutlined,
  HeartOutlined,
  CloudDownloadOutlined,
  MessageOutlined,
} from "@ant-design/icons";
const { Title, Paragraph } = Typography;
const { Option } = Select;
const data = [
  {
    name: "Neem Cake Fertilizer",
    products: 400,
    amt: 100,
  },
  {
    name: "Pure Neem Oil Spray",
    products: 300,
    amt: 200,
  },
  {
    name: "Red Soil",
    products: 200,
    amt: 300,
  },
  {
    name: "Mix Black Soil",
    products: 278,
    amt: 400,
  },
  {
    name: "Kraft Seeds Agro Peats",
    products: 180,
    amt: 500,
  },
  {
    name: "Rose Care Organic Fertilizer",
    products: 2390,
    amt: 600,
  },
  {
    name: "Vermi Compost Fertilizer",
    products: 520,
    amt: 700,
  },
  {
    name: "SAAF Fungicides",
    products: 350,
    amt: 800,
  },
  {
    name: "Homemade Organic Fertilizer",
    products: 500,
    amt: 900,
  },
  {
    name: "Organic Pestcontroller",
    products: 420,
    amt: 1000,
  },
  {
    name: "Vermicompost Fertilizer",
    products: 400,
    amt: 1100,
  },
  {
    name: "GUARD Fungicides for seeds",
    products: 350,
    amt: 1200,
  },
];
const data2 = [
  { name: "Fertilizers", value: 400 },
  { name: "Seeds", value: 300 },
  { name: "Presticides", value: 300 },
  { name: "Soils", value: 200 },
  { name: "Sprays", value: 160 },
  { name: "Tools", value: 500 },
];

const columnData = [
  {
    key: "1",
    order_id: "OR9842",
    item: "Neem Cake Powder",
    category: "Fertilizer",
    status: "Pending",
  },
  {
    key: "2",
    order_id: "OR1848",
    item: "Neem Oil Spray",
    category: "Spray",
    status: "Cancelled",
  },
  {
    key: "3",
    order_id: "OR7429",
    item: "Red Soil",
    category: "Soil",
    status: "Processing",
  },
  {
    key: "4",
    order_id: "OR7428",
    item: "Bloom Buddy",
    category: "Presticides",
    status: "Delivered",
  },
];
const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#FFBDD8",
  "#FF36CE",
];
class SellerDashboard extends Component {
  render() {
    const columns = [
      {
        title: "Order ID",
        dataIndex: "order_id",
      },
      {
        title: "Item",
        dataIndex: "item",
      },
      {
        title: "Category",
        dataIndex: "category",
      },
      {
        title: "Status",
        dataIndex: "status",
        render: (text) => {
          let color = "blue";
          if (text === "Delivered") {
            color = "green";
          }
          if (text === "Cancelled") {
            color = "volcano";
          }
          if (text === "Processing") {
            color = "purple";
          }
          return (
            <Tag color={color} key={text}>
              {text.toUpperCase()}
            </Tag>
          );
        },
      },
    ];
    return (
      <div className="bodycolor" style={{ maxHeight: "100%" }}>
        <Row style={{ padding: 20 }}>
          <Title level={4} style={{ fontWeight: "bold" }}>
            Welcome to Seller Dashboard
          </Title>
        </Row>
        <Row>
          <Card
            style={{
              width: "100%",
              marginLeft: 10,
              marginRight: 10,
              borderRadius: 15,
              backgroundColor: " #c6ffb3",
            }}
          >
            <Row style={{ padding: 10 }}>
              <Col xs={12}>
                <Typography>
                  <Title
                    level={5}
                    style={{ color: "#009900", fontWeight: "bold" }}
                  >
                    <Avatar
                      style={{ marginRight: 8 }}
                      size={50}
                      icon={<UserOutlined />}
                    />
                    Hello Abhay Nawale !
                  </Title>
                  <Paragraph style={{ fontWeight: "bold" }}>
                    Here you can check the details about your products.
                  </Paragraph>
                </Typography>
              </Col>
            </Row>
          </Card>
        </Row>
        <Row
          justify="center"
          align="middle"
          style={{ padding: 10, marginLeft: 12 }}
        >
          <Col xs={6}>
            <Card
              bodyStyle={{ padding: 0 }}
              style={{ width: "80%", height: 100 }}
            >
              <Row>
                <Col xs={8} style={{ backgroundColor: "#39c0ef" }}>
                  <div style={{ width: "100%", height: 100 }}>
                    <SettingOutlined
                      style={{
                        fontSize: 54,
                        paddingTop: 20,
                        paddingLeft: 15,
                        color: "white",
                      }}
                    />
                  </div>
                </Col>
                <Col xs={16}>
                  <Title style={{ fontSize: 16, margin: "2%" }}>
                    CPU TRAFFIC
                  </Title>
                  <p style={{ fontSize: 16, fontWeight: "bold", margin: "2%" }}>
                    90%
                  </p>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xs={6}>
            <Card
              bodyStyle={{ padding: 0 }}
              style={{ width: "80%", height: 100 }}
            >
              <Row>
                <Col xs={8} style={{ backgroundColor: "#dd4b39" }}>
                  <div style={{ width: "100%", height: 100 }}>
                    <GooglePlusOutlined
                      style={{
                        fontSize: 54,
                        paddingTop: 20,
                        paddingLeft: 15,
                        color: "white",
                      }}
                    />
                  </div>
                </Col>
                <Col xs={16}>
                  <Title style={{ fontSize: 16, margin: "2%" }}>LIKES</Title>
                  <p style={{ fontSize: 16, fontWeight: "bold", margin: "2%" }}>
                    41,410
                  </p>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xs={6}>
            <Card
              bodyStyle={{ padding: 0 }}
              style={{ width: "80%", height: 100 }}
            >
              <Row>
                <Col xs={8} style={{ backgroundColor: " #50a75b" }}>
                  <div style={{ width: "100%", height: 100 }}>
                    <ShoppingCartOutlined
                      style={{
                        fontSize: 54,
                        paddingTop: 20,
                        paddingLeft: 15,
                        color: "white",
                      }}
                    />
                  </div>
                </Col>
                <Col xs={16}>
                  <Title style={{ fontSize: 16, margin: "2%" }}>SALES</Title>
                  <p style={{ fontSize: 16, fontWeight: "bold", margin: "2%" }}>
                    760
                  </p>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xs={6}>
            <Card
              bodyStyle={{ padding: 0 }}
              style={{ width: "80%", height: 100 }}
            >
              <Row>
                <Col xs={8} style={{ backgroundColor: "#f39d30" }}>
                  <div style={{ width: "100%", height: 100 }}>
                    <TeamOutlined
                      style={{
                        fontSize: 54,
                        paddingTop: 20,
                        paddingLeft: 15,
                        color: "white",
                      }}
                    />
                  </div>
                </Col>
                <Col xs={16}>
                  <Title style={{ fontSize: 16, margin: "2%" }}>
                    NEW MEMBERS
                  </Title>
                  <p style={{ fontSize: 16, fontWeight: "bold", margin: "2%" }}>
                    2,000
                  </p>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row style={{ padding: 10 }}>
          <Col xs={24}>
            <Card style={{ overflowX: "scroll", borderRadius: 15 }}>
              <label style={{ fontWeight: "bold" }}>Products Sold </label>
              <Select defaultValue="today" style={{ width: 200 }}>
                <Option value="today">Today</Option>
                <Option value="this_week">This Week</Option>
                <Option value="this_month">This Month</Option>
                <Option value="last_3months">Last 3 Months</Option>
                <Option value="last_6months">Last 6 Months</Option>
              </Select>
              <BarChart
                style={{ padding: 10 }}
                width={2200}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis dataKey="amt" />
                <Tooltip />
                <Legend />
                <Bar dataKey="products" fill="#82ca9d" />
              </BarChart>
              <Divider />
              <Row justify="space-around">
                <Col xs={3}>
                  <Title style={{ fontSize: 12, color: "#00b33c" }}>
                    <CaretUpOutlined />
                    17%
                  </Title>
                  <h5 style={{ fontSize: 12, fontWeight: "bold" }}>
                    ₹ 35,210.43
                  </h5>
                  <h5 style={{ marginRight: "1%" }}>TOTAL REVENUE</h5>
                </Col>
                <Col xs={3}>
                  <Title level={5} style={{ color: "#e67300", fontSize: 12 }}>
                    <CaretLeftOutlined /> 0%
                  </Title>
                  <h5 style={{ fontSize: 12, fontWeight: "bold" }}>
                    ₹ 10,390.90
                  </h5>
                  <h5 style={{ marginRight: "1%" }}>TOTAL COST</h5>
                </Col>
                <Col xs={3}>
                  <Title level={5} style={{ color: "#29a329", fontSize: 12 }}>
                    <CaretUpOutlined />
                    20%
                  </Title>
                  <h5 style={{ fontSize: 12, fontWeight: "bold" }}>
                    ₹ 24,813.53
                  </h5>
                  <h5 style={{ marginRight: "1%" }}>TOTAL PROFIT</h5>
                </Col>
                <Col xs={3}>
                  <Title level={5} style={{ color: "red", fontSize: 12 }}>
                    <CaretDownFilled /> 18%
                  </Title>
                  <h5 style={{ fontSize: 12, fontWeight: "bold" }}>₹ 1200</h5>
                  <h5 style={{ marginRight: "1%" }}>GOAL COMPLETION</h5>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row style={{ padding: 10 }}>
          <Col xs={12}>
            <Card title="Products Sales" style={{ height: 400, width: 700 }}>
              <Row>
                <Col xs={10}>
                  <PieChart
                    width={700}
                    height={300}
                    onMouseEnter={this.onPieEnter}
                  >
                    <Legend
                      layout="vertical"
                      verticalAlign="top"
                      align="center"
                    />
                    <Pie
                      data={data2}
                      cx={120}
                      cy={0}
                      innerRadius={30}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {data2.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xs={6}>
            <Row>
              <Col xs={20}>
                <Card
                  bodyStyle={{ padding: 0 }}
                  style={{
                    width: 390,
                    height: 100,
                    marginLeft: "100%",
                    marginTop: 10,
                  }}
                >
                  <Row>
                    <Col xs={8} style={{ backgroundColor: "#cc6600" }}>
                      <div style={{ width: "100%", height: 100 }}>
                        <TagOutlined
                          style={{
                            fontSize: 54,
                            paddingTop: 25,
                            paddingLeft: 40,
                            color: "white",
                          }}
                        />
                      </div>
                    </Col>
                    <Col xs={16} style={{ backgroundColor: "#f39c12" }}>
                      <Title
                        style={{ fontSize: 16, margin: "2%", color: "white" }}
                      >
                        INVENTORY
                      </Title>
                      <p
                        style={{
                          fontSize: 16,
                          fontWeight: "bold",
                          margin: "2%",
                          color: "white",
                        }}
                      >
                        5,200
                      </p>
                      <Progress percent={50} status="active" type="line" />
                      <h5 style={{ color: "white" }}>
                        50% Increase in 30 Days
                      </h5>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xs={20}>
                <Card
                  bodyStyle={{ padding: 0 }}
                  style={{
                    width: 390,
                    height: 100,
                    marginLeft: "100%",
                    marginTop: 10,
                  }}
                >
                  <Row>
                    <Col xs={8} style={{ backgroundColor: "#006638" }}>
                      <div style={{ width: "100%", height: 100 }}>
                        <HeartOutlined
                          style={{
                            fontSize: 54,
                            paddingTop: 25,
                            paddingLeft: 40,
                            color: "white",
                          }}
                        />
                      </div>
                    </Col>
                    <Col xs={16} style={{ backgroundColor: "#00a65a" }}>
                      <Title
                        style={{ fontSize: 16, margin: "2%", color: "white" }}
                      >
                        MENTIONS
                      </Title>
                      <p
                        style={{
                          fontSize: 16,
                          fontWeight: "bold",
                          margin: "2%",
                          color: "white",
                        }}
                      >
                        92,050
                      </p>
                      <Progress percent={20} status="active" type="line" />
                      <h5 style={{ color: "white" }}>
                        20% Increase in 30 Days
                      </h5>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xs={20}>
                <Card
                  bodyStyle={{ padding: 0 }}
                  style={{
                    width: 390,
                    height: 100,
                    marginLeft: "100%",
                    marginTop: 10,
                  }}
                >
                  <Row>
                    <Col xs={8} style={{ backgroundColor: "#ae2e1e" }}>
                      <div style={{ width: "100%", height: 100 }}>
                        <CloudDownloadOutlined
                          style={{
                            fontSize: 54,
                            paddingTop: 25,
                            paddingLeft: 40,
                            color: "white",
                          }}
                        />
                      </div>
                    </Col>
                    <Col xs={16} style={{ backgroundColor: "#dd4b39" }}>
                      <Title
                        style={{ fontSize: 16, margin: "2%", color: "white" }}
                      >
                        DOWNLOADS
                      </Title>
                      <p
                        style={{
                          fontSize: 16,
                          fontWeight: "bold",
                          margin: "2%",
                          color: "white",
                        }}
                      >
                        114,381
                      </p>
                      <Progress percent={40} status="active" type="line" />
                      <h5 style={{ color: "white" }}>
                        40% Increase in 30 Days
                      </h5>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xs={20}>
                <Card
                  bodyStyle={{ padding: 0 }}
                  style={{
                    width: 390,
                    height: 100,
                    marginLeft: "100%",
                    marginTop: 10,
                  }}
                >
                  <Row>
                    <Col xs={8} style={{ backgroundColor: "#008fb3" }}>
                      <div style={{ width: "100%", height: 100 }}>
                        <MessageOutlined
                          style={{
                            fontSize: 54,
                            paddingTop: 25,
                            paddingLeft: 40,
                            color: "white",
                          }}
                        />
                      </div>
                    </Col>
                    <Col xs={16} style={{ backgroundColor: "#00c0ef" }}>
                      <Title
                        style={{ fontSize: 16, margin: "2%", color: "white" }}
                      >
                        DIRECT MESSAGES
                      </Title>
                      <p
                        style={{
                          fontSize: 16,
                          fontWeight: "bold",
                          margin: "2%",
                          color: "white",
                        }}
                      >
                        163,921
                      </p>
                      <Progress percent={70} status="active" type="line" />
                      <h5 style={{ color: "white" }}>
                        70% Increase in 30 Days
                      </h5>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row style={{ padding: 10 }}>
          <Col xs={24}>
            <Card title="Latest Orders">
              <Table columns={columns} dataSource={columnData} size="middle" />
              <Row justify="end">
                <Col xs={4}>
                  <Button
                    style={{ backgroundColor: "	 #bfbfbf", fontWeight: "bold" }}
                  >
                    View All Orders
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SellerDashboard;
