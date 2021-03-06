import React, { Component } from "react";
import styles from "./style.scss";
import Logo from "../../UiKit/Logo";

class LeftSideBar extends Component {
  public render() {
    return (
      <aside className={styles.sideBar}>
        <Logo />
      </aside>
    );
  }
}

export default LeftSideBar;
