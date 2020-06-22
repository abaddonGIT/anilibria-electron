import React, { Component } from "react";
import HomePage from "../containers/HomePage";
import { inject, observer } from "mobx-react";
import RootStore from "../stores/Root.store";
import UserStore from "../stores/User.store";
import {httpRequest} from "../services/httpService";

interface IProps {
  rootStore: RootStore;
  userStore: UserStore;
}

@inject("rootStore", "userStore")
@observer
class HomeScreen extends Component<IProps> {
  public componentDidMount(): void {
    const data = new FormData();
    data.append("query", "catalog");
    data.append("filter", "id,code,poster,names,last,series,description");
    data.append("xpage", "catalog");
    data.append("perPage", "25");
    const result = httpRequest({}).post("", data);
    console.log(result);
  }

  public render() {
    return <HomePage />
  }
}

export default HomeScreen;
