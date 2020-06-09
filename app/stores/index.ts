import RootStore from "./Root.store";

export default (initialState) => {
  const rStore = new RootStore(initialState);
  return {
    rootStore: rStore,
    userStore: rStore.uStore,
  };
};
