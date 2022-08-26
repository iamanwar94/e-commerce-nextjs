import React from "react";
import styles from "../styles/LearningOptions.module.scss";

const LearningOptions = (props) => {
  const options = [
    {
      text: "Javascript",
      handler: props.actionProvider.handleJS,
      id: 1,
    },
    {
      text: "Data visualization",
      handler: props.actionProvider.handleData,
      id: 2,
    },
    { text: "APIs", handler: () => {}, id: 3 },
    { text: "Security", handler: () => {}, id: 4 },
    { text: "Interview prep", handler: () => {}, id: 5 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className={styles.learning_option_button}
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return (
    <div className={styles.learning_option_container}>{optionsMarkup}</div>
  );
};

export default LearningOptions;
