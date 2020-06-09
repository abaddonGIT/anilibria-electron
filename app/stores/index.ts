import RootStore from "./Root.store";

export default () => {
  const rStore = new RootStore();
  return {
    rootStore: rStore,
    userStore: rStore.uStore,
  };
};
