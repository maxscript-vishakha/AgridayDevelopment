import React, { Component } from "react";
import Header from "../commonComponent/Header";
import { Card, Row, Col, Typography, Divider, Icon, Avatar } from "antd";
import {
  DeleteOutlined,
  UserOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";

const { Title } = Typography;

class Wishlist extends Component {
  handleProductDetails = () => {
    this.props.history.push("/productdetails");
  };
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          menuName: "Kitchen & Home Appliences",
        },
        {
          menuName: "Large Appliences",
        },
        {
          menuName: "Kitchen & Dining",
        },
        {
          menuName: "Furniture",
        },
        {
          menuName: "Home Furnishing",
        },
        {
          menuName: "Home Decor",
        },
      ],
      wishProducts: [
        {
          img: "https://m.media-amazon.com/images/I/71wEqGwp0QL._AC_UL320_.jpg",
          detailInfo:
            "TrustBasket Neem Cake Powder Organic Fertilizer and Pest Repellent for Plants (450 GMS)",
          price: "₹ 191",
        },
        {
          img: "https://m.media-amazon.com/images/I/51TcEhluPcL._AC_SY200_.jpg",
          detailInfo:
            "B Natural Organic Cold Pressed, Pure Neem Oil for Spray on Plants & Garden 200 ml Pouch With Free Measuring Cup",
          price: "₹ 209",
        },
      ],
    };
  }

  render() {
    return (
      <>
        <Header />
        <Row align="middle">
          <Col xs={2} style={{ paddingTop: 10 }}>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/furniture/megamenu/home_logo._CB485947101_.png"
              style={{ height: 45 }}
            />
          </Col>
          <Col xs={22}>
            <Row>
              {this.state.products.map((product) => {
                return (
                  <Col xs={4} style={{ fontSize: 12 }}>
                    <a href="#" style={{ color: "black" }}>
                      {product.menuName}
                    </a>
                  </Col>
                );
              })}
            </Row>
          </Col>
          <Divider style={{ margin: 0 }} />
        </Row>
        <Row style={{ padding: 10 }}>
          <Col
            xs={5}
            style={{
              //   borderRight: "2px solid",
              marginRight: 5,
              marginLeft: 5,
            }}
          >
            <Card style={{ height: 80 }}>
              <Row>
                <Col xs={2}>
                  <Avatar size="large" icon={<UserOutlined />} />
                </Col>
                <Col xs={12} style={{ marginLeft: 50 }}>
                  <Row>
                    <span>Hello,</span>
                  </Row>
                  <Row>
                    <span style={{ fontWeight: "bold", fontSize: 16 }}>
                      Alice David
                    </span>
                  </Row>
                </Col>
              </Row>
            </Card>
            <Row style={{ paddingTop: 5 }}>
              <Card style={{ width: 300, height: 300 }}>
                <h3
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "#a6a6a6",
                  }}
                >
                  MY ORDERS <CaretRightOutlined />
                </h3>
                <Divider />
                <Row>
                  <Col xs={2}>
                    <UserOutlined style={{ color: "blue", fontSize: 16 }} />
                  </Col>
                  <Col xs={20}>
                    <h3
                      style={{
                        textAlign: "center",
                        fontWeight: "bold",
                        color: "#a6a6a6",
                      }}
                    >
                      ACCOUNT SETTINGS
                    </h3>
                    <h4 style={{ textAlign: "center" }}>Profile Information</h4>
                    <h4 style={{ textAlign: "center" }}>Manage Addresses</h4>
                    <h4 style={{ textAlign: "center" }}>
                      PAN Card Information
                    </h4>
                    
                  </Col>
                </Row>
              </Card>
            </Row>
          </Col>
          <Col xs={18}>
            <Card
              title={"My Wishlist(" + this.state.wishProducts.length + ")"}
              style={{ width: 1000 }}
              bodyStyle={{ padding: 0, margin: 0 }}
            >
              {this.state.wishProducts.map((product) => {
                return (
                  <Card hoverable>
                    <Row>
                      <Col xs={4}>
                        <img
                          src={product.img}
                          style={{ width: 100, height: 100 }}
                        />
                      </Col>
                      <Col xs={8}>
                        <Title level={5}>
                          TrustBasket Neem Cake Powder Organic Fertilizer and
                          Pest Repellent for Plants (450 GMS)
                        </Title>
                        <h2 style={{ fontWeight: "bold" }}>₹ 191</h2>
                        <h4>
                          <span>
                            <strike> ₹ 199.00</strike>
                            <a href="#" onClick={this.handleProductDetails}>
                              You save ₹ 8.00 (4%)
                            </a>
                          </span>
                        </h4>
                      </Col>
                      <Col xs={2}>
                        <DeleteOutlined
                          style={{
                            color: "red",
                            marginLeft: 400,
                            fontSize: 20,
                          }}
                        />
                      </Col>
                    </Row>
                  </Card>
                );
              })}
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

export default Wishlist;
