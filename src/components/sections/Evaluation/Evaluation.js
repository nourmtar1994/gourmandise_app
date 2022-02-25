import React, { useState } from "react";
import { Radio, Steps, Card } from "antd";

import * as classes from "./Evaluation.module.css";
import { StepForwardOutlined } from "@ant-design/icons/lib/icons";
import Formulaire from "./Formulaire";
const { Step } = Steps;

const Evaluation = () => {
  const [value, setValue] = React.useState(1);
  const [current, setCurrent] = useState(0);
  const steps = [
    {
      title: "Vous êtes :",
      content: (
        <Radio.Group value={value}>
          <Radio value={1}>Homme</Radio>
          <Radio value={2}>Femme</Radio>
        </Radio.Group>
      ),
    },
    {
      title: "Votre age est :",
      content: <></>,
    },
    {
      title: "Où habitez-vous ?",
      content: <></>,
    },
  ];

  return (
    <div className={classes.container}>
      <div className={classes.backdropTop}></div>
      {/* <Steps
        direction="horizontal"
        current={current}
        onChange={(e) => setCurrent(e)}
      >
        {steps.map((item) => (
          <Step title={item.title} />
        ))}
      </Steps>

      <div className={classes.stepsContent}>{steps[current].content}</div> */}
      <div className={classes.backdropBottom}></div>

      <Formulaire />
    </div>
  );
};
export default Evaluation;
