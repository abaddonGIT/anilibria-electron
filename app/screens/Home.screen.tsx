import React, { Component } from "react";
import HomePage from "../containers/HomePage";
import { inject, observer } from "mobx-react";
import RootStore from "../stores/Root.store";
import UserStore from "../stores/User.store";

interface IProps {
  rootStore: RootStore;
  userStore: UserStore;
}

@inject("rootStore", "userStore")
@observer
class HomeScreen extends Component<IProps> {
  public componentDidMount(): void {
    console.log(this.props.rootStore);
  }

  public render() {
    return <HomePage />
  }
}

export default HomeScreen;
