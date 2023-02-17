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

const initIsPurchased = () => {
  const purchased:boolean[] = new Array(props.collections.weapons.length);
  purchased.fill(false);
  isPurchased.value = purchased;
}

initIsPurchased();

const checkPurchased = () => {
  const array = new Set(isPurchased.value)
  if(array.size !== 1){
    if(isSetPurchased.value){
      isSetPurchased.value = false;
      flag.value = true;
    }
  }
}

const updateState = () => {
  const data = {
    collection_id: props.collections.collection_id,
    set_purchased: isSetPurchased.value,
    weapons: props.collections.weapons.map((value, index) => {
      return {
        weapon_id: value.weapon_id,
        purchased: isPurchased.value[index],
      }
    })
  }

  const newData = [];
  collectionData.value.data?.forEach(v => {
    newData.push(v)
  })
  newData.push(data)

  const uniqueData = Array.from(
    new Map(newData.map((value) => [value.collection_id, value])).values()
  );

  setCollectionData({
    data: uniqueData
  })

}

onBeforeMount(() => {
  const collection = collectionData.value.data?.find(value => value.collection_id === props.collections.collection_id)
  if(collection){
    isSetPurchased.value = collection.set_purchased;
    collection.weapons.forEach((value, index) => {
      isPurchased.value[index] = value.purchased
    })
  }
})

watch(isPurchased.value, (next, prev) => {
  checkPurchased();
  updateState();
})

watch(isSetPurchased, (next, prev) => {
  if(flag.value){
    flag.value = false;
  }
  else{
    isPurchased.value.fill(isSetPurchased.value);
  }

  updateState();
})

</script>

<template>
  <div class="card">
    <v-checkbox v-if="collections.set_vp !== 0" label="セット購入" v-model="isSetPurchased" />
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