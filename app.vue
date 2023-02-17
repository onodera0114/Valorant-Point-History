<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <div class="point-view">
      <p>{{ `累計消費ヴァロラントポイント：${calculatePoint}` }}</p>
    </div>
    <div v-for="(collection, index) in data?.collections" :key="collection.collection_id">
      <Accordion :collections="collection" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { CollectionsResponse } from "~/types/collections";

const {data} = await useFetch<CollectionsResponse>("/api/query?col=collections&orderName=collection_id&order=desc");
const collectionStore = useCollectionDataStore();
const { collectionData, setCollectionData } = collectionStore;

const saveLocalStorage = () => {
  const collection = collectionData.value;
  localStorage.setItem("collectionData", JSON.stringify(collection))
}

const calculatePoint = computed(() => {
  let point = 0;
  if(collectionData.value && collectionData.value.data){
    collectionData.value.data.forEach((value) => {
    const collection = data.value?.collections.find((v, i) => v.collection_id === value.collection_id);
    if(collection){
      if(value.set_purchased){
        point += collection.set_vp;
      }
      else{
        value.weapons.forEach(weapon => {
          const data = collection.weapons.find((w) => w.weapon_id === weapon.weapon_id);
          if(data){
            if(weapon.purchased){
              point += data.vp;
            }
          }
        })
      }
    }
  })
  }
  saveLocalStorage();
  return point;
})

onBeforeMount(() => {
  const storage = localStorage.getItem("collectionData");
  if(storage){
    setCollectionData(JSON.parse(storage));
  }
})

</script>

<style lang="scss" scoped>
.point-view{
  text-align: center;
}
</style>