import { observable } from "mobx";
import { CatalogItem } from "../types";

class CatalogStore {
  @observable
  public loading: boolean = false;
  @observable.ref
  public items: CatalogItem[] = [];
}

export default CatalogStore;
