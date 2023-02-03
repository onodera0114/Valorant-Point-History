<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <div v-for="(collection, index) in data?.result" :key="collection.id">
      <h3>{{collection.id}}</h3>
      <div>
        <div v-for="(weapon, index) in collection.weapons" :key="weapon.id">
          <p>{{weapon.jp_weapon_name}}</p>
          <img :src="`images${weapon.image_url}`" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const {data} = await useFetch("/api/query?col=collections")
console.log(data.value)

</script>
