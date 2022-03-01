import React from "react";
import * as classes from "./Evaluation.module.css";
import Formulaire from "./Formulaire";

const Evaluation = ({ setEvalution }) => {
  return (
    <div className={classes.container}>
      <div className={classes.backdropTop}></div>
      <div className={classes.backdropBottom}></div>
      <Formulaire setEvalution={setEvalution} />
    </div>
  );
};
export default Evaluation;
