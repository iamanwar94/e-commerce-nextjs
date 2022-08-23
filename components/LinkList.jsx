import React from "react";
import styles from "../styles/LinkList.module.scss";

const LinkList = (props) => {
  console.log(props);
  const linkMarkup = props.options.map((link) => (
    <li key={link.id} className={styles.link_list_item}>
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link_list_item_url}
      >
        {link.text}
      </a>
    </li>
  ));

  return <ul className={styles.link_list}>{linkMarkup}</ul>;
};

export default LinkList;
