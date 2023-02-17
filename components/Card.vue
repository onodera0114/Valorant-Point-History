<script setup lang="ts">
import { Collections } from 'types/collections';

interface Props {
  collections: Collections;
}
const props = defineProps<Props>();
const collectionStore = useCollectionDataStore();
const { collectionData, setCollectionData } = collectionStore;
const isSetPurchased = ref<boolean>(false);
const isPurchased = ref<boolean[]>([]);
const flag = ref(false);

const checkPurchased = () => {
  const array = new Set(isPurchased.value)
  if(array.size === 1){
    isSetPurchased.value = array.has(true) ? true : false;
  }
  else{
    isSetPurchased.value = false;
    flag.value = true;
  }
}

onBeforeMount(() => {
  const purchased = new Array(props.collections.weapons.length)

  const collection = collectionData.value.data.find(value => value.collection_id === props.collections.collection_id)
  if(collection){
    isSetPurchased.value = collection.set_purchased;
    collection.weapons.forEach((value, index) => {
      isPurchased.value[index] = value.purchased
    })
  }
  else{
    purchased.fill(false);
    isPurchased.value = purchased;
  }
})

watch(isPurchased.value, (next, prev) => {
  checkPurchased();
})

watch(isSetPurchased, (next, prev) => {
  if(flag.value){
    flag.value = false;
  }
  else{
    isPurchased.value.fill(isSetPurchased.value)
  }
})

</script>

<template>
  <div class="card">
    <v-checkbox label="セット購入" v-model="isSetPurchased" />
    <div class="d-flex flex-wrap justify-center">
      <div v-for="(weapon, index) in collections.weapons" :key="weapon.image_url" class="card__container">
        <p>{{`${collections.id} ${weapon.weapon_name}（${collections.jp_name}${weapon.jp_weapon_name}）`}}</p>
        <div class="card__image-wrapper">
          <img :src="`images${weapon.image_url}`" alt="" />
        </div>
        <p>{{`${weapon.vp}VP`}}</p>
        <v-checkbox label="購入済み" v-model="isPurchased[index]" />
      </div>
    </div>
  </div>
</template>

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