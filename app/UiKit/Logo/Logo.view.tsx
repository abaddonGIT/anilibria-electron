import React from "react";
import LogoImage from "../../../resources/icon.png";
import styles from "./style.scss";
import { NavLink } from "react-router-dom";
import ROUTES from "../../constants/routes.json";

interface IProps {}

const Logo: React.FC<IProps> = ({}) => (
  <NavLink to={ROUTES.HOME} activeClassName={styles.active} className={`${styles.logo}`}>
    <img src={LogoImage} alt="" />
  </NavLink>
);

export default Logo;
