<script setup lang="ts">
import { Collections } from 'types/collections';

interface Props {
  collections: Collections;
}
const props = defineProps<Props>();
</script>

<template>
  <div class="card">
    <v-checkbox label="セット購入" />
    <div class="d-flex flex-wrap justify-center">
      <div v-for="(weapon, index) in collections.weapons" :key="weapon.image_url" class="card__container">
        <p>{{`${collections.id} ${weapon.weapon_name}（${collections.jp_name}${weapon.jp_weapon_name}）`}}</p>
        <div class="card__image-wrapper">
          <img :src="`images${weapon.image_url}`" alt="" />
        </div>
        <p>{{`${weapon.vp}VP`}}</p>
        <v-checkbox label="購入済み" />
      </div>
    </div>
  </div>
</template>

<!--
  data: [
    {
      collection_id: string,
      set_purchased: boolean,
      weapons: [
        {
          weapon_id: string,
          purchased: boolean,
        }
      ]
    },
  ]
-->

<style lang="scss" scoped>
.card{
  &__container{
    border: 1px solid #f00;
    padding: 16px;
    width: 300px;
  }

  &__image-wrapper{
    width: 250px;
    height: 100px;

    img{
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>