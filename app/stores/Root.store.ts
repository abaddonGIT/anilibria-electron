import UserStore from "./User.store";
import { action, observable } from "mobx";

// interface IInitialState {}

class RootStore {
  public uStore: UserStore;
  @observable
  public isDarkMode: boolean = false;

  constructor() {
    this.uStore = new UserStore();
  }

  @action
  public toggleDarkMode = (isActive: boolean): void => {
    this.isDarkMode = isActive;
  }
}

export default RootStore;
