<template>
  <a-row id="cards-container" :gutter="[16, 16]">
    <a-col
      :lg="6"
      :md="8"
      :sm="12"
      :xs="24"
      v-for="item in data"
      :key="item.id"
    >
      <Card v-bind:data="item" />
    </a-col>
  </a-row>
</template>

<script>
import { Card } from './Card'
export default {
  name: 'CardsContainer',
  props: ['data'],
}
</script>
