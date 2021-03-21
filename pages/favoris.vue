<template>
  <div class="favoris">
    <a-row type="flex" justify="center" align="middle">
      <h2 class="title white">Favoris</h2>
    </a-row>
  </div>
</template>

<script>
import { getAllStar } from '../store/Request'
export default {
  methods: {},
  name: 'favoris',
  data() {
    return {
      data: [],
    }
  },
  mounted() {
    this.data = getAllStar().then((response) => (this.data = response))
  },
}
</script>

<style></style>
