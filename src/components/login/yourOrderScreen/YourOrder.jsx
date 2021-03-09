import React, { Component } from "react";
import Header from "../commonComponent/Header";
import "./YourOrder.css";
import {
  Card,
  Row,
  Col,
  Typography,
  Divider,
  Icon,
  Avatar,
  Select,
  Button,
  Input,
  Menu,
  Dropdown,
} from "antd";
import { SearchOutlined, DownOutlined } from "@ant-design/icons";
const { Title } = Typography;
const { Option } = Select;
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" href="#">
        Invoice 1
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" href="#">
        Request Invoice
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" href="#">
        Printable Order Summary
      </a>
    </Menu.Item>
  </Menu>
);
class YourOrder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orderedProducts: [
        {
          img: "https://m.media-amazon.com/images/I/71wEqGwp0QL._AC_UL320_.jpg",
          detailInfo:
            "TrustBasket Neem Cake Powder Organic Fertilizer and Pest Repellent for Plants (450 GMS)",

          date: "5 March 2021",
          price: 191.0,
          orderID: "ORDER # 404-9268026-22355",
        },
        {
          img: "https://m.media-amazon.com/images/I/51TcEhluPcL._AC_SY200_.jpg",
          detailInfo:
            "B Natural Organic Cold Pressed, Pure Neem Oil for Spray on Plants & Garden 200 ml Pouch With Free Measuring Cup",

          date: "12 February 2021",
          price: 209.0,
          orderID: "ORDER # 406-9568036-22344",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Row style={{ marginLeft: "20%", paddingTop: "2%" }}>
          <Col xs={8}>
            <Title level={2}>Your Orders</Title>
          </Col>
          <Col xs={16}>
            <Input
              prefix={<SearchOutlined />}
              placeholder="Search all orders"
              style={{ width: "50%" }}
            ></Input>
            <Button 
              style={{
                color: "white",
                backgroundColor: "black",
                fontWeight: "bold",
                marginLeft: "2%",
              }}
            >
              Search orders
            </Button>
          </Col>
        </Row>
        <Row style={{ marginLeft: "20%" }}>
          <Col xs={12}>
            <label style={{ fontWeight: "bold" }}>
              {this.state.orderedProducts.length} Orders placed in{" "}
            </label>
            <Select
              className="yourOrder"
              defaultValue="last_30days"
              style={{ width: 150, textAlign: "center", color:"black" }}
            >
              <Option value="last_30days">Last 30 Days</Option>
              <Option value="past_3months">Past 3 Months</Option>
              <Option value="past_1year">Past 1 Year</Option>
            </Select>
          </Col>
        </Row>
        <Row justify="center" style={{ paddingTop: "2%" }}>
          <Col xs={24}>
            {this.state.orderedProducts.map((orders) => {
              return (
                <Card
                  style={{ width: "60%", marginLeft: "20%", marginBottom: 10 }}
                >
                  <Row>
                    <Col xs={5}>
                      <Title level={5}>Order placed</Title>
                      <Title level={5} style={{ marginTop: 0, paddingTop: 0 }}>
                        {orders.date}
                      </Title>
                    </Col>
                    <Col xs={5} style={{ textAlign: "center" }}>
                      <Title level={5}>Total</Title>
                      <Title level={5} style={{ marginTop: 0, paddingTop: 0 }}>
                        {"₹ " + orders.price}
                      </Title>
                    </Col>
                    <Col xs={12} style={{ marginLeft: "8%", textAlign: "end" }}>
                      <Title level={5}>{orders.orderID}</Title>
                      <span>
                        <a href="#">Order Details </a>|{" "}
                        <Dropdown overlay={menu}>
                          <a href="#">
                            Invoice <DownOutlined />
                          </a>
                        </Dropdown>
                      </span>
                    </Col>
                  </Row>
                      <Divider/>
                  <Row>
                    <Col xs={4}>
                      <img
                        src={orders.img}
                        style={{ width: 100, height: 100 }}
                      />
                    </Col>
                    <Col xs={17}>
                      <Title level={5}>{orders.detailInfo}</Title>
                      <Button
                        style={{ backgroundColor: "#33cc33", color: "white", marginRight:"2%" }}
                      >
                        Buy it Again
                      </Button>
                      <Button
                        style={{ backgroundColor: "#558000", color: "white" }}
                      >
                        Write a product review
                      </Button>
                    </Col>
                  </Row>
                </Card>
              );
            })}
          </Col>
        </Row>
        <Row></Row>
      </div>
    );
  }
}

export default YourOrder;
