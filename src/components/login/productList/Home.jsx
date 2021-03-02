import React, { Component } from 'react'
import Header from '../commonComponent/Header'
import ReactCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./product.css"
import { Carousel, Card, Row,Col,Typography } from "antd";
const { Title } = Typography;
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
class Home extends Component {
  handleProductDetailsClick = () => {
    this.props.history.push("/productListScreen")
  }
   constructor(props) {
     super(props)
   
     this.state = {
       cardsTitle: [
         {
           title: "Fertilizers",
           url:
             "https://www.amazon.in/b?ie=UTF8&node=21488179031&pf_rd_r=YGAMD1HCCSDYP6HGJSXT&pf_rd_p=53bbae3d-6459-4caf-a4d9-b6bb5138b19a&pd_rd_r=797f960f-5a19-4cd7-a5cb-d16fc30d19cb&pd_rd_w=e1QVV&pd_rd_wg=dmojB&ref_=pd_gw_unk",
           image1:
             "https://m.media-amazon.com/images/I/51JXDktuGEL._AC_SY200_.jpg",
           image2:
             "https://m.media-amazon.com/images/I/511Ne1-gyaL._AC_SY200_.jpg",
           image3:
             "https://m.media-amazon.com/images/I/41ovOUoE2rL._AC_SY200_.jpg",
           image4:
             "https://m.media-amazon.com/images/I/71wEqGwp0QL._AC_UL320_.jpg",
           productname1: "organic Fertilizers",
           productname2: "Organic Fertilizer for Rose Plant",
           productname3: "Liquid Fertilizers",
           productname4: "Neem Cake Powder Fertilizer ",
         },
         {
           title: "Seeds & Soil",
           url:
             "https://www.amazon.in/b/ref=MOREPC?ie=UTF8&node=5866078031&pf_rd_r=YGAMD1HCCSDYP6HGJSXT&pf_rd_p=97697ed1-5b1c-4f63-998b-2276ccf3c1e5&pd_rd_r=797f960f-5a19-4cd7-a5cb-d16fc30d19cb&pd_rd_w=OppCl&pd_rd_wg=dmojB&ref_=pd_gw_unk",
           image1:
             "https://m.media-amazon.com/images/I/51BtWdrYhKL._AC_SY200_.jpg",
           image2:
             "https://m.media-amazon.com/images/I/519a5NBHnfL._AC_SY200_.jpg",
           image3:
             "https://images-eu.ssl-images-amazon.com/images/I/61NhTFn8mbL._AC_UL160_SR160,160_.jpg",
           image4:
             "https://images-eu.ssl-images-amazon.com/images/I/71rGnq5Z65L._AC_UL160_SR160,160_.jpg",
           productname1: "Kraft Seeds Agro Peat",
           productname2: "Red Soil",
           productname3: "Putting Soil Mix",
           productname4: "Vegetable Seeds",
         },
         {
           title: "Sprays and Presticides",
           url:
             "https://www.amazon.in/b?node=1350384031&pf_rd_r=YGAMD1HCCSDYP6HGJSXT&pf_rd_p=ce4c3ae1-7a4f-4334-9df9-7cb0e3410d39&pd_rd_r=797f960f-5a19-4cd7-a5cb-d16fc30d19cb&pd_rd_w=vythr&pd_rd_wg=dmojB&ref_=pd_gw_unk",
           image1:
             "https://m.media-amazon.com/images/I/51TcEhluPcL._AC_SY200_.jpg",
           image2:
             "https://m.media-amazon.com/images/I/81haZqNGb6L._AC_UL320_.jpg",
           image3:
             "https://m.media-amazon.com/images/I/71Cff9uhuEL._AC_UL320_.jpg",
           image4:
             "https://m.media-amazon.com/images/I/51qfKwFKrXL._AC_UL320_.jpg",
           productname1: "Neem Oil Spray",
           productname2: "Gardern Care Kit Neem Extract Presticides",
           productname3: "Neem Oil & Karanjia Oil Fungal Control spray",
           productname4: "Agro Plus Presticides",
         },
       ],
     };
   }
   
  render() {
    return (
      <>
        <Header />
        <Carousel autoplay style={{ height: "10%" }}>
          <div>
            <img
              alt="Recharge"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC/April20/Gateway/DesktopHero_HFC_1500x600_Recharge1._CB414105779_.jpg"
              style={{ height: 361, width: "100%" }}
            />
          </div>
          <div>
            <img
              alt="Amazon prime"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
              style={{ height: 361, width: "100%" }}
            />
          </div>
          <div>
            <img
              alt="Mobiles"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/OPPO/FPFfeb/D21073588_OPPO_FPF_A31_FPF_FEB_DesktopTallHero_1500x600._CB658521896_.jpg"
              style={{ height: 361, width: "100%" }}
            />
          </div>
          <div>
            <img
              alt="Acc fest"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Audio/unrec1499/Under1499_Gw_1500x600._CB661592357_.jpg"
              style={{ height: 361, width: "100%" }}
            />
          </div>
        </Carousel>
        <div>
          <Row justify="space-between" style={{width : '100%'}}>
            {this.state.cardsTitle.map((carddata) => {
              return (
                <Col xs={24} md={8}>
                  <Card
                    title={<Title level={4}>{carddata.title}</Title>}
                    style={{ width: 355 }}
                  >
                    <Row>
                      <Col xs={12}>
                        <a href="#">
                          <img
                            onClick={this.handleProductDetailsClick}
                            src={carddata.image1}
                            alt="organic fertilizer"
                            style={{ pading: 5, height: 120, width: 140 }}
                          />
                        </a>
                        <h5>{carddata.productname1}</h5>
                      </Col>
                      <Col xs={12}>
                        <a href="#">
                          <img
                            onClick={this.handleProductDetailsClick}
                            src={carddata.image2}
                            alt="organic fertilizer for rose plant"
                            style={{ pading: 5, height: 120, width: 140 }}
                          />
                        </a>
                        <h5>{carddata.productname2}</h5>
                      </Col>

                      <Col xs={12}>
                        <a href="#">
                          <img
                            onClick={this.handleProductDetailsClick}
                            src={carddata.image3}
                            alt="liquid fertilizer"
                            style={{ pading: 5, height: 120, width: 140 }}
                          />
                        </a>
                        <h5>{carddata.productname3}</h5>
                      </Col>
                      <Col xs={12}>
                        <a href="#">
                          <img
                            onClick={this.handleProductDetailsClick}
                            src={carddata.image4}
                            alt="neem cake powder fertilizer"
                            style={{ pading: 5, height: 120, width: 140 }}
                          />
                        </a>
                        <h5>{carddata.productname4}</h5>
                      </Col>
                    </Row>
                    <a href="#">see more</a>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
        <ReactCarousel
          responsive={responsive}
          style={{ height: 361, width: "100%" }}
          itemClass="image-item"
          infinite="true"
        >
          <div>
            <img
              src="https://m.media-amazon.com/images/I/41OBf52bnOL.__AC_SY200_.jpg"
              alt="mobiles"
            />
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/51M5gy5yXaL.__AC_SY200_.jpg"
              alt="watches"
            />
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/41OV9XtxCVL.__AC_SY200_.jpg"
              alt="clothes"
            />
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/41A-ay1ftrL.__AC_SY200_.jpg"
              alt="shoes"
            />
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/51dJzBptMIL.__AC_SY200_.jpg"
              alt="seeds"
            />
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/41zn91YS7-L.__AC_SY200_.jpg"
              alt="toy gun"
            />
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/41rQI3+o3TL.__AC_SY200_.jpg"
              alt="kids appear"
            />
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/41SbmIl8AcL.__AC_SY200_.jpg"
              alt="trimming and grooming"
            />
          </div>
        </ReactCarousel>
      </>
    );
  }
}

export default Home
