import React, { Component } from 'react'
import Header from '../commonComponent/Header'
import { Row, Col, Divider, Card } from "antd";
import { LeftOutlined, CaretDownOutlined} from "@ant-design/icons";
const { Meta } = Card;
class ProductLIstScreen extends Component {
  handleProductClick = () => {
    this.props.history.push("/productdetails");
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
      cardAgri: [
        {
          image:
            "https://m.media-amazon.com/images/I/71wEqGwp0QL._AC_UL320_.jpg",
          details:
            "TrustBasket Neem Cake Powder Organic Fertilizer and Pest Repellent for Plants (450 GMS)",
          cost: "₹ 191",
        },
        {
          image:
            "https://m.media-amazon.com/images/I/51TcEhluPcL._AC_SY200_.jpg",
          details:
            "B Natural Organic Cold Pressed, Pure Neem Oil for Spray on Plants & Garden 200 ml Pouch With Free Measuring Cup",
          cost: "₹ 209",
        },
        {
          image:
            "https://m.media-amazon.com/images/I/511Ne1-gyaL._AC_SY200_.jpg",
          details:
            "Casa De Amor Rose Care Special Organic Fertilizer for Rose Plants, Brown (900 GMS)",
          cost: "₹ 279",
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
              borderRight: "2px solid",
              marginRight: 5,
              marginLeft: 5,
            }}
          >
            <h4 style={{ fontWeight: "bold", color: "black" }}>Department</h4>
            <a href="#">
              <h4>Pest Control</h4>
            </a>
            <ul style={{ listStyleType: "none" }}>
              <a href="#" style={{ color: "black" }}>
                <li>Repellents</li>
                <li>Insect Controls</li>
                <li>Plant Protection Sprayers</li>
              </a>
            </ul>
            <a href="#">
              <h4>Gardining</h4>
            </a>
            <ul style={{ listStyleType: "none" }}>
              <a href="#" style={{ color: "black" }}>
                <li>Fertilizer & Soil</li>
              </a>
            </ul>
            <a href="#" style={{ color: "black" }}>
              <h4
                style={{
                  fontWeight: "bold",
                  color: "black",
                  paddingLeft: 2,
                }}
              >
                <CaretDownOutlined /> See all departments
              </h4>
            </a>
          </Col>
          <Col
            xs={18}
            // style={{ backgroundColor: "red", minHeight: 100 }}
          >
            <Row>
              {this.state.cardAgri.map((cards) => {
                return (
                  <Col xs={8}>
                    <Card
                      hoverable
                      onClick={this.handleProductClick}
                      style={{ height: 350 }}
                    >
                      <img
                        src={cards.image}
                        style={{ width: 200, height: 180 }}
                      />
                      <h4 style={{ paddingTop: 30 }}>{cards.details}</h4>

                      <Meta
                        // title={"₹" + cards.cost}
                        title={<h2>{cards.cost}</h2>}
                      />
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </>
    );
  }
}

export default ProductLIstScreen

