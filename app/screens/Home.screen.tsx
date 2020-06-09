import React, { Component } from "react";
import HomePage from "../containers/HomePage";
import { inject, observer } from "mobx-react";

@inject("rootStore", "userStore")
@observer
class HomeScreen extends Component {
  public render() {
    return <HomePage />
  }
}

export default HomeScreen;
