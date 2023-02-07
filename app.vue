<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <div v-for="(collection, index) in data?.collections" :key="collection.collection_id">
      <h3>{{collection.id}}</h3>
      <div>
        <div v-for="(weapon, index) in collection.weapons" :key="weapon.weapon_id">
          <p>{{weapon.jp_weapon_name}}</p>
          <img :src="`images${weapon.image_url}`" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CollectionsResponse } from "~/types/collections";

const {data} = await useFetch<CollectionsResponse>("/api/query?col=collections&orderName=collection_id&order=desc")
</script>
