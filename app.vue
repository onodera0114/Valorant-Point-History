<template>
  <div>
    <!-- <NuxtWelcome /> -->
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

onBeforeMount(() => {
  const storage = localStorage.getItem("collectionData");
  if(storage){
    setCollectionData(JSON.parse(storage));
  }
})

const test = {
  data: [
    {
      collection_id: "3",
      set_purchased: false,
      weapons: [
        {
          weapon_id: "3",
          purchased: false,
        },
        {
          weapon_id: "9",
          purchased: true,
        },
        {
          weapon_id: "13",
          purchased: false,
        },
        {
          weapon_id: "15",
          purchased: false,
        },
        {
          weapon_id: "18",
          purchased: true,
        }
      ]
    },
    {
      collection_id: "5",
      set_purchased: true,
      weapons: [
        {
          weapon_id: "1",
          purchased: true,
        },
        {
          weapon_id: "7",
          purchased: true,
        },
        {
          weapon_id: "11",
          purchased: true,
        },
        {
          weapon_id: "13",
          purchased: true,
        },
        {
          weapon_id: "18",
          purchased: true,
        }
      ]
    },
    {
      collection_id: "5",
      set_purchased: false,
      weapons: [
        {
          weapon_id: "1",
          purchased: false,
        },
        {
          weapon_id: "7",
          purchased: true,
        },
        {
          weapon_id: "11",
          purchased: true,
        },
        {
          weapon_id: "13",
          purchased: true,
        },
        {
          weapon_id: "18",
          purchased: true,
        }
      ]
    },
    {
      collection_id: "5",
      set_purchased: true,
      weapons: [
        {
          weapon_id: "1",
          purchased: true,
        },
        {
          weapon_id: "7",
          purchased: true,
        },
        {
          weapon_id: "11",
          purchased: true,
        },
        {
          weapon_id: "13",
          purchased: true,
        },
        {
          weapon_id: "18",
          purchased: true,
        }
      ]
    }
  ]
}

onMounted(() => {
  const uniqueUsers = Array.from(
  new Map(test.data.map((value) => [value.collection_id, value])).values()
);
  console.log(uniqueUsers)
})

</script>

<style lang="scss" scoped>
</style>