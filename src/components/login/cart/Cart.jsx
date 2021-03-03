import React, { Component } from "react";
import Header from "../commonComponent/Header";
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
} from "antd";
import {
  DeleteOutlined,
  UserOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";
const { Title } = Typography;
const { Option } = Select;
class Cart extends Component {
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
      cartProducts: [
        {
          img: "https://m.media-amazon.com/images/I/71wEqGwp0QL._AC_UL320_.jpg",
          detailInfo:
            "TrustBasket Neem Cake Powder Organic Fertilizer and Pest Repellent for Plants (450 GMS)",
          price: 191.0,
          originalPrice: 199.0,
          discount: "4% off",
          availability: "In Stock",
          total: "",
        },
        {
          img: "https://m.media-amazon.com/images/I/51TcEhluPcL._AC_SY200_.jpg",
          detailInfo:
            "B Natural Organic Cold Pressed, Pure Neem Oil for Spray on Plants & Garden 200 ml Pouch With Free Measuring Cup",
          price: 209.0,
          originalPrice: 350.0,
          discount: "43% off",
          availability: "In Stock",
          total: "",
        },
      ],
    };
  }

  calculateTotalOriginalPrice = () => {
    let _products = Object.assign([], this.state.cartProducts);
    let _total = 0;
    _products.map((pro) => {
      _total += pro.originalPrice;
    });
    return _total;
  };

  calculateTotalPrice = () => {
    let _products = Object.assign([], this.state.cartProducts);
    let _total = 0;
    _products.map((pro) => {
      _total += pro.price;
    });
    return _total;
  };

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
        <Row style={{ paddingTop: 10 }}>
          <Col lg={18} xs={24}>
            <Card
              title={"Shopping Cart(" + this.state.cartProducts.length + ")"}
              style={{ width: 1000 }}
              bodyStyle={{ padding: 0, margin: 0 }}
            >
              {this.state.cartProducts.map((product) => {
                return (
                  <Card>
                    <Row>
                      <Col xs={4}>
                        <img
                          src={product.img}
                          style={{ width: 100, height: 100 }}
                        />
                      </Col>
                      <Col xs={17}>
                        <Title level={5}>{product.detailInfo}</Title>
                        <p style={{ color: "green" }}>{product.availability}</p>
                        <label style={{ fontWeight: "bold" }}>Qty: </label>
                        <Select
                          labelInValue
                          defaultValue={{ value: "1" }}
                          style={{ width: 50 }}
                        >
                          <Option value="1">1</Option>
                          <Option value="2">2</Option>
                          <Option value="3">3</Option>
                        </Select>
                        <div style={{ paddingTop: 8 }}>
                          <Button
                            style={{
                              color: "white",
                              backgroundColor: "#bfbfbf",
                              fontWeight: "bold",
                              fontSize: 15,
                              marginRight: 5,
                            }}
                          >
                            SAVE FOR LATER
                          </Button>
                          <Button
                            style={{
                              color: "white",
                              backgroundColor: "#ff4d4d",
                              fontWeight: "bold",
                              fontSize: 15,
                            }}
                          >
                            REMOVE
                          </Button>
                        </div>
                      </Col>
                      <Col
                        xs={3}
                        style={{
                          justifyContent: "right",
                          alignContent: "end",
                          alignItems: "end",
                        }}
                      >
                        <h3>Price</h3>
                        <h2 style={{ fontWeight: "bold" }}>
                          {"₹ " + product.price}
                        </h2>
                        <h4 style={{ color: "green" }}>
                          <strike style={{ color: "gray" }}>
                            {"₹ " + product.originalPrice}
                          </strike>
                          {" " + product.discount}
                        </h4>
                      </Col>
                    </Row>
                  </Card>
                );
              })}
            </Card>
          </Col>
          <Col
            lg={5}
            xs={24}
            style={{
              //   borderRight: "2px solid",
              marginRight: 5,
              marginLeft: 5,
            }}
          >
            <Card title="PRICE DETAILS">
              <Row justify="space-between" style={{padding:5}}>
                <Col xs={18} style={{fontSize : 16}}>
                  Price ({this.state.cartProducts.length} items)
                </Col>
                <Col xs={6} style={{fontSize : 16}}>{"₹ " + this.calculateTotalOriginalPrice()}</Col>
              </Row>
              <Row justify="space-between" style={{padding:5}}>
                <Col xs={18} style={{fontSize : 16}}>Discount</Col>
                <Col xs={6} style={{fontSize : 16}}>
                  {"₹ " +
                    (this.calculateTotalOriginalPrice() - 
                    this.calculateTotalPrice())}
                </Col>
              </Row>
              <Row justify="space-between" style={{padding:5}}>
                <Col xs={18} style={{fontSize : 16}}>Shipping Charges</Col>
                <Col xs={6} style={{fontSize : 16}}>{"FREE"}</Col>
              </Row>
              <Divider style={{ width: "100%" }} />
              <Row justify="space-between" style={{padding:5}}>
                <Col xs={18} style={{fontSize : 20, fontWeight : 700}}>Total Amount</Col>
                <Col xs={6} style={{fontSize : 20, fontWeight: 700}}>{"₹ " + this.calculateTotalPrice()}</Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

export default Cart;
