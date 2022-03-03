import { UserOutlined } from "@ant-design/icons/lib/icons";
import { Input } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getPointVente } from "../../services/PointVente";
import * as classes from "./Login.module.css";

const Login = ({ setIdentified, EvaluationData, setEvaluationData }) => {
  let history = useHistory();
  const [login, setlogin] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIdentified(true);

    setEvaluationData({
      ...EvaluationData,
      login: login,
    });
  };

  useEffect(() => {
    history.push("/steps");
    login && setIdentified(null);
  }, []);

  return (
    <div className={classes.space} align="center">
      <UserOutlined className={classes.logo} />
      <h5 className={classes.description}>Identifier-Vous</h5>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Input
          autoFocus
          // disabled={login ? true : false}
          placeholder="Login"
          type="email"
          className={classes.loginInput}
          value={login}
          onChange={(e) => setlogin(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Login;
/* <Link
        to="#0"
        className="button button-primary button-wide-mobile button-sm"
        style={{
          width: "80%",
          borderRadius: "5px",
          height: "45px",
          fontSize: "1em",
          padding: "10px",
        }}
      >
        Envoyer
      </Link> */
