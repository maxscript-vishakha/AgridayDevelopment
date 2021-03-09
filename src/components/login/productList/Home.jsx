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
           productname2: "Gardern Care Kit",
           productname3: "Fungal Control spray",
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
              alt="carousal1"
              src="https://cdn.ihsmarkit.com/www/blog/ra-wheat-field-against-blue-sky-65943406-post.jpg"
              style={{ height: 361, width: "100%" }}
            />
          </div>
          <div>
            <img
              alt="carousal2"
              src="https://cdn.ihsmarkit.com/www/blog/ra-planting-seeds-1419397073-post.jpg"
              style={{ height: 361, width: "100%" }}
            />
          </div>
          <div>
            <img
              alt="Carousal3"
              src="https://cdn.ihsmarkit.com/www/blog/ra-human-hand-holding-soybean-field-107308046-post.jpg"
              style={{ height: 361, width: "100%" }}
            />
          </div>
          <div>
            <img
              alt="Acc fest"
              src="https://cdn.ihsmarkit.com/www/blog/ra-spraying-pesticide-378322951-post.jpg"
              style={{ height: 361, width: "100%" }}
            />
          </div>
        </Carousel>
        <div>
          <Row justify="space-between" style={{ width: "100%" }}>
            {this.state.cardsTitle.map((carddata) => {
              return (
                <Col xs={24} md={8}>
                  <Card
                    title={<Title level={4}>{carddata.title}</Title>}
                    style={{ width: 355 }}
                  >
                    <Row>
                      <Col xs={12} style={{ minHeight: 165 }}>
                        <img
                          onClick={this.handleProductDetailsClick}
                          src={carddata.image1}
                          alt="organic fertilizer"
                          style={{ pading: 5, height: 120, width: 140 }}
                        />

                        <h5 style={{ textOverflow: "ellipsis" }}>
                          {carddata.productname1}
                        </h5>
                      </Col>
                      <Col xs={12}>
                        <img
                          onClick={this.handleProductDetailsClick}
                          src={carddata.image2}
                          alt="organic fertilizer for rose plant"
                          style={{
                            pading: 5,
                            height: 120,
                            width: 140,
                            cursor: "pointer",
                          }}
                        />

                        <h5 style={{ textOverflow: "ellipsis" }}>
                          {carddata.productname2}
                        </h5>
                      </Col>

                      <Col xs={12}>
                        <img
                          onClick={this.handleProductDetailsClick}
                          src={carddata.image3}
                          alt="liquid fertilizer"
                          style={{ pading: 5, height: 120, width: 140 }}
                        />

                        <h5 style={{ textOverflow: "ellipsis" }}>
                          {carddata.productname3}
                        </h5>
                      </Col>
                      <Col xs={12}>
                        <img
                          onClick={this.handleProductDetailsClick}
                          src={carddata.image4}
                          alt="neem cake powder fertilizer"
                          style={{ pading: 5, height: 120, width: 140 }}
                        />

                        <h5 style={{ textOverflow: "ellipsis" }}>
                          {carddata.productname4}
                        </h5>
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
              src="https://m.media-amazon.com/images/I/51JXDktuGEL._AC_SY200_.jpg"
              alt="fertilizer"
            />
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/41v55GyndDL._AC_SY200_.jpg"
              alt="black soil"
            />
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/51BtWdrYhKL._AC_SY200_.jpg"
              alt="seeds"
            />
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/519a5NBHnfL._AC_SY200_.jpg"
              alt="Red soil"
            />
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/41ovOUoE2rL._AC_SY200_.jpg"
              alt="Liquid Fertilizer"
            />
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/51aRF2OcZLL._AC_SY200_.jpg"
              alt="Compost Fertilizer"
            />
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/51QbXOiCkiL._AC_SY200_.jpg"
              alt="Neem Powder"
            />
          </div>
          <div>
            <img
              src="https://m.media-amazon.com/images/I/51q0ih8HC2L._AC_SY200_.jpg"
              alt="Organic Mix Soil"
            />
          </div>
        </ReactCarousel>
      </>
    );
  }
}

export default Home
