import RootStore from "./Root.store";
import CatalogStore from "./Catalog.store";

export default () => {
  const rStore = new RootStore();
  return {
    rootStore: rStore,
    userStore: rStore.uStore,
    catalogStore: new CatalogStore(),
  };
};
