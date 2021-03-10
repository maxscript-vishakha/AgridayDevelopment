import React, { Component } from "react";
import "./Inventory.css";
import {
  Typography,
  Row,
  Col,
  Card,
  
  
  Table,
  
  Button,
  Tooltip,
} from "antd";
import { PlusOutlined, DownloadOutlined, ExportOutlined, DeleteOutlined, EditOutlined} from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";

const { Title } = Typography;
const colData = [
  {
    key: "1",
    sr_no: "1",
    product_name: "Neem Cake Powder",
    sku: "0003156",
    category: "Fertilizer",
    price: 191,
    available_quantity: 30,
    location: "Warehouse1",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS12OASH1ZEEuGoHUllxauvRHSO-h0NNTp8hLQVF6p9YOf1i_tAjJFPmKcLNHT-qfEK8VUey61tM-JzyQnyYTnFD3vl2z5zE1Y&usqp=CAc",
  },
  {
    key: "2",
    sr_no: "2",
    product_name: "Mycorrhiza Powder",
    sku: "00027648",
    category: "Fertilizer",
    price: 189,
    available_quantity: 50,
    location: "Warehouse1",
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSFP8p1lSI5Y7GevbweIuzxU192AjAr0MIXBVMKj0d2iRQNDdQTtpZiTj5Gq6qD1F1c-ixbOD2O9i1OHbmYxkxnLF7ICjRD4yY&usqp=CAc",
  },
  {
    key: "3",
    sr_no: "3",
    product_name: "Shovel",
    sku: "00433684",
    category: "Gardening Tool",
    price: 400,
    available_quantity: 40,
    location: "Warehouse2",
    imageUrl:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFoAhwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcIAgH/xAA2EAABAwMBBgMFBgcAAAAAAAABAAIDBAURBhIhMUFRYQcUgRMiIzJxQmKRsdHwM0RSY4Khov/EABgBAQEBAQEAAAAAAAAAAAAAAAADBAIB/8QAHREBAAICAwEBAAAAAAAAAAAAAAIDAUESEzERBP/aAAwDAQACEQMRAD8A7iiIgIiICIiAiIgIiICIiAijL1cfJQ7MZ+K7h2C/NP1dTWUbpKkZAfhj8Y2gpdsezr2p1y4c9JRERVTEREBERAREQEREBERAREQFhq6hlLA6WTgOA6nospIAJJwBzVTvtxNXLsQ5MTdzAPtHqofouxVH7tWmrNkvmmENmvFx9lk+8dqRw+y397lcIYmQxMiiaGsYMNA5BaFjt3kKT4g+PJ70h6dB6KSXP5qswjyl7l1fZiWeMfMCIi0oCIiAiIgIiICIiAiIgIigtZakpdL2Z9bUvaHuOxC0gnLjzIG/A4n9SEGXUFYI4DTtdgu+fHTotLTtAZpfOTN+Gz+GDzPX0/fBUnQuqjrW51NDJEWzQuL3TR5LJYs42hkZaeG49R3x1mNjY2NYxoa1owAOQWKNUrLsznjzxqzPEK+MdvpERbWUREQEREBERAREQEJwMnguda58W7Ppiqnt1JBLcLlCdl8bTsRxnduc88Tv4NB6EhcT1X4hak1UXRV1YYqR38pS5ZHjvzd6koO7ap8V9Mafc+BlSbjWN3GGjw4NPRz/AJR33kjoqZafHeeW4SNuVib5Rx+GKWbMkY77WA7/AJXGo6N7se0937oG8qWp7SDCdxY490Hoij8VNJVlIZ46+Rso40z4XCTPYcD9Qcd1xbXes7jq7UL4qB0raaQeVgpmby9pPAjmXHH+hyVcmZJQU8gaQHPHEccLBYbhPaLxSXSnEZmpZRKwSs2m5HUIPTXhpo+PSFgZDI1puNQA+rkG/wB7k0Ho3P5lW5Ujw/19Jq0mGayVNJMxu0+Rrg+IDfgknBGSNwwfw3q7oCIiAiIgIiICIiAorVN5Zp/Ttwu0jdsUsLntZ/U7g0epIClViqqaCsppaaqiZNBK0skjkblrmniCEHjWZtRWVEtXXSkyzvdJI93F7nHJP4lbdJS5x7FmPvniu16j8FaGaZ9Vp6qdTvO/ytS4vj+jXfM312vRUG7aeuVgf7K5UMlPk4a8jLHfRw3H6cUERS0bIt53uPMrcwNnDTg9VjGVIWeyXO/VXlrVSvmcPnfwYzu53AfmV4IiSlh97J2nni4lWvRfh5X3t0dT7I09HxFXO3e4f228/rw78l0XSXhlbrQWVV3LLhWjeGkfBjPZp+Y9z6AK+oI6w2WisNuZRW+MtjG9znb3SO5uceZUiiL0EREBERAREQEREBERAXxNFFPE6KeNkkbxhzHtBDh3BX2iCm1/hnpyrq2VDIZqVodl8NPJsseOmCDs/wCOFaqCipbdSspaGnjp4GfLHG3AC2EQEREBERAREQEREBERB//Z",
  },
  {
    key: "4",
    sr_no: "4",
    product_name: "Hand Trowel",
    sku: "00046582",
    category: "Gardening Tool",
    price: 450,
    available_quantity: 25,
    location: "Warehouse2",
    imageUrl:
      "https://5.imimg.com/data5/AY/VM/MY-1950898/garden-trowel-500x500.jpg",
  },
  {
    key: "5",
    sr_no: "5",
    product_name: "Neem Oil Spray",
    sku: "00623456",
    category: "Spray",
    price: 120,
    available_quantity: 80,
    location: "Warehouse4",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTiaUtyPD3nwyFNmdcLg2vEYA4A1qmDx9FFmgwVnw20ajnuA_gLe2n8pXEQKGNuewJWeJ1mIie1NQdm_qGQ5fFua-3QjvWc8paf&usqp=CAc",
  },
  {
    key: "6",
    sr_no: "6",
    product_name: "Pyaramid Seeds",
    sku: "000689523",
    category: "Vegetable Seeds",
    price: 160,
    available_quantity: 90,
    location: "Warehouse3",
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSd9lIMpmD3b0IX6IXakb00ahvuqnAxtNFOWgxrcCzf7UlQ4IDQ6RXRZFGR0Tl-hqDh3KOmijzUNt-PjuSh9BNvCmHjsoBrVEs8B6kkdFBjHfs6gf1QuCeB5fsqPkE&usqp=CAc",
  },
];
export class SellerInventory extends Component {


  renderProductName = (text, record, index) => {
    return (
      <Row align="middle">
        <Avatar size={"large"} src={record.imageUrl} />
        <label style={{ paddingLeft: 10, paddingRight: 10, fontWeight: 700 }}>
          {text}
        </label>
      </Row>
    );
  };

  actionFormatter = () => {
    return (
      <Row type="flex" justify="space-between">
        <Col xs={24}>
          <Tooltip title="Edit">
            <Button shape="circle" style={{ marginRight: 10 }}>
              <EditOutlined style={{ cursor: "pointer" }} />
            </Button>
          </Tooltip>
          <Tooltip title="Delete">
            <Button shape="circle">
              <DeleteOutlined style={{ color: "red", cursor: "pointer" }} />
            </Button>
          </Tooltip>
        </Col>
      </Row>
    );
  };
  render() {
    const columns = [
      {
        align: "center",
        title: "Sr. No.",
        dataIndex: "sr_no",
      },
      {
        title: "Product Name",
        dataIndex: "product_name",
        sorter: (a, b) => a.product_name.localeCompare(b.product_name),
        render: this.renderProductName,
      },
      {
        align: "center",
        title: "SKU",
        dataIndex: "sku",
      },
      {
        title: "Category",
        dataIndex: "category",
      },
      {
        title: "Price",
        dataindex: "price",
        sorter: (a, b) => a.price - b.price,
        render: (text) => <label>{"₹ " + text.price + " /-"}</label>,
      },
      {
        align: "center",
        title: "Available Quantity",
        dataIndex: "available_quantity",
      },
      {
        title: "Location",
        dataIndex: "location",
      },
      {
        align: "center",
        title: "Action",
        dataIndex: "action",
        render: this.actionFormatter,
      },
    ];
    return (
      <div className="bodycolor" style={{ maxHeight: "100%" }}>
        <Row style={{ padding: 20 }}>
          <Title level={4} style={{ fontWeight: "bold" }}>
            Seller Inventory
          </Title>
        </Row>
        <Row>
          <Col xs={24}>
            <Card style={{ borderRadius: 20, margin: 20 }}>
              <Row justify="end">
                <Col xs={3}>
                  <Button
                    style={{
                      backgroundColor: "#e6e6e6",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    <ExportOutlined /> Export
                  </Button>
                </Col>

                <Col xs={4}>
                  <Button
                    style={{
                      backgroundColor: "#e6e6e6",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    <DownloadOutlined /> Import from CSV
                  </Button>
                </Col>

                <Col xs={4}>
                  <Button
                    style={{
                      backgroundColor: "#2eb82e",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    <PlusOutlined style={{ color: "white" }} /> Add products
                  </Button>
                </Col>
              </Row>
              <Row style={{ paddingTop: 10 }}>
                <Col xs={24}>
                  <Table columns={columns} dataSource={colData} size="middle" />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SellerInventory;
