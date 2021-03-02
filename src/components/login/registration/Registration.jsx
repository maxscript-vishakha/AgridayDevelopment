import React, { Component } from 'react'
import {
  Card,
  Row,
  Input,
  Button,
 notification,
  Typography,
 } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import { withRouter } from "react-router-dom";

const { Title } = Typography;

class Registration extends Component {
  handleLoginClick = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <>
        <Row justify="center" style={{ padding: 5 }}>
          <h1 style={{ fontWeight: "bolder", fontStyle: "Roboto" }}>Agriday</h1>
          <Row
            style={{
              alignItems: "center",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <Card style={{ width: 350, height: 570, borderColor: "#d9d9d9" }}>
              <div>
                <Row style={{ justifyContent: "right" }}>
                  <h1 style={{ fontStyle: "Roboto" }}>Create Account</h1>
                </Row>
                <Row style={{ justifyContent: "left" }}>
                  <Title
                    style={{ fontWeight: "bold", marginBottom: 0 }}
                    level={5}
                  >
                    Your name
                  </Title>
                  <Input
                    size="large"
                    placeholder="Enter name"
                    name="name"
                    style={{
                      margin: "10px 0px 10px 0px",
                      height: 30,
                    }}
                    onChange={(event) => {
                      this.handleTextChange(event);
                    }}
                    allowClear
                  />
                  <Title
                    style={{ fontWeight: "bold", marginBottom: 0 }}
                    level={5}
                  >
                    Mobile number
                  </Title>
                  <Input
                    addonBefore="IN +91"
                    placeholder="Enter mobile number "
                    style={{
                      margin: "10px 0px 10px 0px",
                      height: 30,
                    }}
                    onChange={(event) => {
                      this.handleTextChange(event);
                    }}
                    allowClear
                  />
                  <Title
                    style={{ fontWeight: "bold", marginBottom: 0 }}
                    level={5}
                  >
                    Email (optional)
                  </Title>
                  <Input
                    size="large"
                    placeholder="Enter email"
                    name="name"
                    style={{
                      margin: "10px 0px 10px 0px",
                      height: 30,
                    }}
                    onChange={(event) => {
                      this.handleTextChange(event);
                    }}
                    allowClear
                  />
                  <Title
                    style={{ fontWeight: "bold", marginBottom: 0 }}
                    level={5}
                  >
                    Password
                  </Title>
                  <Input
                    size="large"
                    placeholder="At least 6 charecters"
                    name="name"
                    style={{
                      margin: "10px 0px 10px 0px",
                      height: 30,
                    }}
                    onChange={(event) => {
                      this.handleTextChange(event);
                    }}
                    allowClear
                  />
                  <Row>
                    <h6 style={{ fontSize: 12, fontStyle: "Roboto" }}>
                      Password must be at least 6 charecters
                    </h6>
                    <p
                      style={{
                        fontSize: 14,
                        fontStyle: "Roboto",
                        paddingTop: 10,
                      }}
                    >
                      We will send you a text to verify your phone. Message and
                      Data rates may apply.
                    </p>
                  </Row>
                  <Row style={{ justifyContent: "center", padding: 3 }}>
                    <Button
                      onClick={this.handleLoginClick}
                      style={{
                        margin: "10px 0px 0px 0px",
                        height: 40,
                        width: 290,
                        fontWeight: "bold",
                        backgroundColor: "#33cc33",
                        color: "black",
                        borderColor: "#009900",
                      }}
                    >
                      Continue
                    </Button>
                  </Row>
                  <Row>
                    <label>
                      Alredy have an account ?
                      <a href="#" onClick={this.handleLoginClick}>
                        
                        Sign in <CaretRightOutlined />
                      </a>
                    </label>
                  </Row>
                </Row>
              </div>
            </Card>
          </Row>
        </Row>
      </>
    );
  }
}

export default withRouter(Registration)
