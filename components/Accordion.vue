<script setup lang="ts">
import { Collections } from 'types/collections';

interface Props {
  collections: Collections;
}
const props = defineProps<Props>();
</script>

<template>
  <v-expansion-panels variant="accordion">
    <v-expansion-panel>
      <v-expansion-panel-title>
        {{ `${collections.id} Collection（${collections.jp_name} コレクション）` }}
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <Card :collections="collections" />
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<style lang="scss" scoped>
</style>