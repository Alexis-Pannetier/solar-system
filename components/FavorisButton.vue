<template>
  <a-icon
    class="heart"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    type="heart"
    :style="('font-size: 16px', hover && 'color:red')"
    :theme="isChecked ? 'filled' : 'outlined'"
    v-on:click="toggleFavoris"
  />
</template>

<script>
export default {
  name: 'Favorisbutton',
  data() {
    return {
      hover: false,
    }
  },
  props: ['data', 'isChecked'],
  methods: {
    toggleFavoris: function (e) {
      e.stopPropagation()
      this.$store.commit('favoris/toggle', this.data)
    },
  },
}
</script>

<style></style>
