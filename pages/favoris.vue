<template>
  <div class="container">
    <div>
      <h2 class="title">Favoris</h2>
      <a-row id="planet-container">
        <a-col :span="6" v-for="item in data" :key="item.id">
          <span>
            {{ item.name }}
          </span>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import { solarSystemRequest } from '../store/Request'
export default {
  methods: {},
  name: 'index',
  data() {
    return {
      data: [],
    }
  },
  mounted() {
    this.data = solarSystemRequest().then((response) => (this.data = response))
  },
}
</script>

<style></style>
