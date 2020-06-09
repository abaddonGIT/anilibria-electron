import UserStore from "./User.store";

interface IInitialState {}

class RootStore {
  public uStore: UserStore;

  constructor(initialState) {
    this.uStore = new UserStore();
  }
}

export default RootStore;
