import React, { Component } from "react";
import styles from "./style.scss";

class TopBar extends Component {
  public render() {
    return (
      <aside className={styles.sideBar}>
        Top sideBar
      </aside>
    );
  }
}

export default TopBar;
