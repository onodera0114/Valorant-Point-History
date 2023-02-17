export type Weapons = {
  image_url: string;
  jp_weapon_name: string;
  vp: number;
  weapon_id: number;
  weapon_name: string;
}

export type Collections = {
  collection_id: number;
  created_at: Date;
  id: string;
  jp_name: string;
  set_vp: number;
  weapons: Weapons[];
}

export type CollectionsResponse = {
  collections: Collections[]
}