import { LogoutOutlined } from "@ant-design/icons";
import {
  Col,
  Layout,
  Menu,
  Row,
  Input,
  Select,
  Space,
  Button,
  Badge,
} from "antd";
import React from "react";
import { withRouter } from "react-router-dom";
import {
  EnvironmentOutlined,
  ShoppingCartOutlined,
  CaretDownOutlined,
  MenuOutlined,
} from "@ant-design/icons";
const { Option } = Select;

const { Search } = Input;

const selectBefore = (
  <Select defaultValue="All" className="select-before">
    {/* <Option value="http://">http://</Option> */}
    {/* <Option value="https://">https://</Option> */}
  </Select>
);
const onSearch = (value) => console.log(value);
const onclick = () => console.log("clicked on cart");
const Header = (props) => {
  return (
    <Layout>
      <header style={{ padding: 10, backgroundColor: "black" }}>
        <Row>
          <Col span={2}>
            <h3
              style={{
                fontStyle: "Roboto",
                color: "white",
                fontSize: 26,
                fontWeight: "bold",
              }}
            >
              Agriday
            </h3>
          </Col>
          <Col span={3}>
            <div>
              <span
                style={{ color: "white", fontSize: 12, fontStyle: "Roboto" }}
              >
                Hello
              </span>
            </div>
            <div>
              <span
                style={{
                  color: "white",
                  fontSize: 14,
                  fontStyle: "Roboto",
                  fontWeight: "bold",
                }}
              >
                <EnvironmentOutlined
                  style={{ fontSize: "16px", color: "white" }}
                />
                Select your address
              </span>
            </div>
          </Col>
          <Col span={10}>
            <div>
              <Space direction="vertical">
                <Search
                  style={{ width: 500 }}
                  addonBefore={selectBefore}
                  placeholder="input search text"
                  allowClear
                  enterButton
                  size="large"
                  onSearch={onSearch}
                />
              </Space>
            </div>
          </Col>
          <Col span={4}>
            <div>
              <span
                style={{ color: "white", fontSize: 12, fontStyle: "Roboto" }}
              >
                Hello, Sign in
              </span>
            </div>
            <div>
              <span
                style={{
                  color: "white",
                  fontSize: 14,
                  fontStyle: "Roboto",
                  fontWeight: "bold",
                }}
              >
                Account & Lists
              </span>
              <CaretDownOutlined style={{ color: "white", marginLeft: 5 }} />
            </div>
          </Col>
          <Col span={3}>
            <div>
              <span
                style={{ color: "white", fontSize: 12, fontStyle: "Roboto" }}
              >
                Returns
              </span>
            </div>
            <div>
              <span
                style={{
                  color: "white",
                  fontSize: 14,
                  fontStyle: "Roboto",
                  fontWeight: "bold",
                }}
              >
                & Orders
              </span>
            </div>
          </Col>

          <Col span={2}>
            <Button
              style={{
                color: "white",
                borderColor: "black",
                backgroundColor: "black",
                height: 40,
                width: 90,
              }}
              onClick={onclick}
            >
              <Badge
                count={0}
                showZero
                style={{
                  color: "red",
                  backgroundColor: "white",
                  fontWeight: "bold",
                }}
              >
                <ShoppingCartOutlined
                  style={{ color: "white", fontSize: 30, paddingTop: 2 }}
                />
              </Badge>
              Cart
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={24}>
            <Menu
              mode="horizontal"
              style={{
                color: "white",
                fontSize: 18,
                backgroundColor: "#001a33",
                borderBottomStyle: "none",
              }}
            >
              <Menu.Item key="all" icon={<MenuOutlined />}>
                All
              </Menu.Item>
              <Menu.Item key="bestSeller">Best Sellers</Menu.Item>
              <Menu.Item key="mobiles">Mobiles</Menu.Item>
              <Menu.Item key="todayDeals">Today's todayDeals</Menu.Item>
              <Menu.Item key="fashion">Fashion</Menu.Item>
              <Menu.Item key="newReleases">New Releases</Menu.Item>
              <Menu.Item key="electronics">Electronics</Menu.Item>
              <Menu.Item key="customerService">Customer Service</Menu.Item>
            </Menu>
          </Col>
        </Row>
      </header>
    </Layout>
  );
};

export default withRouter(Header);
