<template>
  <a-icon
    class="favoris-button"
    type="heart"
    :theme="isChecked ? 'filled' : 'outlined'"
    v-on:click="toggleFavoris"
  />
</template>

<script>
export default {
  name: 'FavorisButton',
  props: ['data', 'isChecked'],
  methods: {
    toggleFavoris: function (e) {
      e.stopPropagation()
      this.$store.commit('favoris/toggle', this.data)
    },
  },
}
</script>

<style>
.favoris-button:hover {
  color: red;
}
</style>
