export type Weapons = {
  image_url: string;
  jp_weapon_name: string;
  vp: number;
  weapon_id: string;
  weapon_name: string;
}

export type Collections = {
  collection_id: string;
  created_at: Date;
  id: string;
  jp_name: string;
  set_vp: number;
  weapons: Weapons[];
}

export type CollectionsResponse = {
  collections: Collections[]
}