import { Col, Input, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/gourmandise.png";
import * as classes from "./Login.module.css";
const Login = () => {
  return (
    <Row className={classes.loginConatiner} gutter={30} align="center">
      <Col
        className={classes.space}
        md={{ span: 12 }}
        xs={{ span: 20 }}
        align="center"
      >
        <img src={logo} width="60%" height={20}></img>
        <br />
        <br />
        <Input
          placeholder="Login"
          type="text"
          className={classes.loginInput}
          //   value={qrCodeScanner}
          //   onChange={(e) => setqrCodeScanner(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          className={classes.loginInput}
          //   value={qrCodeScanner}
          //   onChange={(e) => setqrCodeScanner(e.target.value)}
        />

        <Link
          to="#0"
          className="button button-primary button-wide-mobile button-sm"
          style={{
            width: "80%",
            borderRadius: "10px",
            height: "45px",
            fontSize: "1em",
            padding: "10px",
          }}
        >
          Envoyer
        </Link>
      </Col>
    </Row>
  );
};

export default Login;
