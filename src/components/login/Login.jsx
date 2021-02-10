import React, { Component } from "react";
import { Card, Row, Col, Input, Button, Divider, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  handleTextChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value,
        
    });
  };
  checkValidation = () => {
    let validate = true;
    if (this.state.email.trim() === "") {
      notification["error"]({
        message: "Invalid Username",
      });
      validate = false;
    }
    if (this.state.password.trim() === "") {
      notification["error"]({
        message: "Invalid Password",
      });
      validate = false;
    }
    return validate;
  };
  handleLoginClick = () => {
      if (this.checkValidation()) {
       // console.log(this.state);  
    }
  };

  render() {
    return (
      <>
        <div style={{ padding: 5 }}>
          <h1 style={{ fontWeight: "bolder" }}>Agriday</h1>
          <Row
            style={{
              alignItems: "center",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <Card style={{ width: 350, height: 380 }}>
              <div>
                <Row style={{ justifyContent: "right" }}>
                  <h1 style={{ fontStyle: "calibri" }}>Sign-In</h1>
                </Row>
                <Row style={{ justifyContent: "center" }}>
                  <h3 style={{ fontWeight: "bold" }}>Username</h3>
                  <Input
                    prefix={
                      <UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    size="large"
                    placeholder="Email"
                    name="email"
                    style={{ margin: "10px 0px 10px 0px", height: 40 }}
                    onChange={(event) => {
                      this.handleTextChange(event);
                    }}
                    allowClear
                  />
                  <h3 style={{ fontWeight: "bold" }}>Password</h3>
                  <Input.Password
                    prefix={
                      <LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    size="large"
                    name="password"
                    placeholder="Password"
                    style={{ margin: "10px 0px 0px 0px", height: 40 }}
                    onChange={(event) => {
                      this.handleTextChange(event);
                    }}
                    allowClear
                  />
                </Row>
                <Row style={{ justifyContent: "center", padding: 10 }}>
                  <Button
                    onClick={this.handleLoginClick}
                    style={{
                      margin: "10px 0px 0px 0px",
                      height: 40,
                      width: 290,
                      fontWeight: "bold",
                      backgroundColor: "#00e600",
                      color: "black",
                      borderColor: "#009900",
                    }}
                  >
                    Continue
                  </Button>
                </Row>
                <Row>
                  <h5 style={{ fontSize: 12, fontStyle: "calibri" }}>
                    By continuing, you agree to Agriday's
                    <a href="#"> Conditions of Use</a> and{" "}
                    <a href="#">Privacy Notice</a>.
                  </h5>
                </Row>
              </div>
            </Card>
            <Divider style={{ fontSize: 11 }}>New to Agriday?</Divider>
          </Row>
          <Row justify="center">
            <Button
              style={{
                width: 350,
                backgroundColor: "#d9d9d9",
                borderColor: "black",
                color: "black",
              }}
            >
              Create your Agriday account
            </Button>
          </Row>
          <div style={{ marginTop: 20 }}>
            <Row justify="center">
              <Col xs={4}>
                <a href="#">Conditions of Use</a>
              </Col>
              <Col xs={4}>
                <a href="#">Privacy Notice</a>
              </Col>
              <Col xs={4}>
                <a href="#">Help</a>
              </Col>
            </Row>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
