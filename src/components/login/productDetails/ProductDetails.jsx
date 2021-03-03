import React, { Component } from 'react'
import Header from "../commonComponent/Header";
import { Row, Col, Divider, Card, Button } from "antd";
import {ShoppingCartOutlined, HeartOutlined, CaretRightOutlined} from "@ant-design/icons";
class ProductDetails extends Component {
  handleWishlistClick = () => {
    this.props.history.push("/wishlist");
  }
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
    };
  }

  render() {
    return (
      <div>
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
        <Row style={{ padding: 20 }}>
          <Col xs={12} style={{ paddingLeft: 150 }}>
            <img
              src="https://m.media-amazon.com/images/I/71wEqGwp0QL._AC_UL320_.jpg"
              style={{ width: 320, height: 380 }}
            />
            <div style={{ paddingTop: 8 }}>
              <Button
                style={{
                  height: 50,
                  width: 150,
                  marginRight: 16,
                  fontWeight: "bold",
                  fontSize: 14,
                  color: "white",
                  backgroundColor: "#558000",
                }}
              >
                <ShoppingCartOutlined /> ADD TO CART
              </Button>
              <Button
                style={{
                  height: 50,
                  width: 150,
                  fontWeight: "bold",
                  fontSize: 14,
                  color: "white",
                  backgroundColor: "#33cc33",
                }}
              >
                <CaretRightOutlined /> BUY NOW
              </Button>
            </div>
          </Col>
          <Col xs={7}>
            <h2>
              TrustBasket Neem Cake Powder Organic Fertilizer and Pest Repellent
              for Plants (450 GMS)
            </h2>
            <a href="#" style={{ fontSize: 16, color: "#005c99" }}>
              Visit the TrustBasket Store
            </a>
            <Divider style={{ margin: 1 }} />
            <h3>
              M.R.P.:<strike>₹ 199.00</strike>
            </h3>
            <h2>
              Price.:<span style={{ color: "#b30000" }}>₹ 191.00</span>
            </h2>
            <h3>
              You Save:
              <span style={{ color: "#b30000" }}>₹ 8.00 (4%)</span>
            </h3>
            <h3 style={{ paddingLeft: 75 }}>Inclusive all of the taxes</h3>
            <a href="#" style={{ fontSize: 14, color: "#005c99" }}>
              FREE delivery:
            </a>
            <b> Friday,March 5</b>
            <p>No Minimum order value for first order in this category</p>
            <Button
              onClick={this.handleWishlistClick}
              style={{
                height: 50,
                width: 200,
                backgroundColor: "gray",
                color: "white",
                fontWeight: "bold",
              }}
            >
              <HeartOutlined style={{ fontSize: 18 }} />
              ADD TO WISHLIST
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ProductDetails
