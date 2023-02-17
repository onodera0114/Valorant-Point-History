import { Ref } from "nuxt/dist/app/compat/capi";

type Weapon = {
  weapon_id: string,
  purchased: boolean,
}

type Data = {
  collection_id: string,
  set_purchased: boolean,
  weapons: Weapon[]
}

type CollectionDataState = {
  data: Data[]
}

export const useCollectionDataStore = () => {
  const state = useState<CollectionDataState>("collectionData_state", () => ({

  }));
  return {
    collectionData: readonly(state),
    setCollectionData: setCollectionData(state),
  };
};

const setCollectionData = (state: Ref<CollectionDataState>) => {
  return (data: CollectionDataState) => (state.value = data);
};