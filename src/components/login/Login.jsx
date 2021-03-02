import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  Card,
  Row,
  Col,
  Input,
  Button,
  Divider,
  notification,
  Typography,
  Anchor,
} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
const { Title } = Typography;
const { Link } = Anchor;

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
      console.log(this.state);
      localStorage.setItem('token', 'someTokenShitComes Here')
      this.props.history.push("/home")
    }
  };
  navigateRegistration = () => {
    this.props.history.push("/registration");
  };
  // handleLoginClick = () => {
  //   this.props.history.push("/product")
  // }
  render() {
    return (
      <>
        <div style={{ padding: 5 }}>
          <h1 style={{ fontWeight: "bolder", fontStyle: "Roboto", textAlign:'center' }}>Agriday</h1>
          <Row
            style={{
              alignItems: "center",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <Card style={{ width: 350, height: 400, borderColor: "#d9d9d9" }}>
              <div>
                <Row style={{ justifyContent: "right" }}>
                  <h1 style={{ fontStyle: "Roboto" }}>Sign-In</h1>
                </Row>
                <Row style={{ justifyContent: "center" }}>
                  <Title
                    style={{ fontWeight: "bold", marginBottom: 0 }}
                    level={5}
                  >
                    Username
                  </Title>
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

                  <Title
                    style={{ fontWeight: "bold", marginBottom: 0 }}
                    level={5}
                  >
                    Password
                  </Title>
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
                      backgroundColor: "#33cc33",
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
                    <a href="#"> Conditions of Use</a> and
                    <a href="#">Privacy Notice</a>.
                  </h5>
                </Row>
                <Row style={{ width: "100%", padding: 3 }}>
                  <Anchor>
                    <Link href="#" title="Forgot Password" />
                  </Anchor>
                </Row>
              </div>
            </Card>
            <Divider style={{ fontSize: 11 }}>New to Agriday?</Divider>
          </Row>
          <Row justify="center">
            <Button
              onClick={this.navigateRegistration}
              style={{
                width: 300,
                backgroundColor: "#d9d9d9",
                borderColor: "black",
                color: "black",
              }}
            >
              Create your Agriday account
            </Button>
          </Row>
          <div style={{ marginTop: 20 }}>
            <Row justify="space-around">
              <Col xs={2}>
                <a href="#" style={{ fontSize: 11 }}>
                  Conditions of Use
                </a>
              </Col>
              <Col xs={2}>
                <a href="#" style={{ fontSize: 11 }}>
                  Privacy Notice
                </a>
              </Col>
              <Col xs={2}>
                <a href="#" style={{ fontSize: 11 }}>
                  Help
                </a>
              </Col>
            </Row>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter (Login);
