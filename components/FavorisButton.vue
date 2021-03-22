<template>
  <a-icon
    class="heart"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    type="heart"
    :style="('font-size: 16px', hover && 'color:red')"
    :theme="isChecked ? 'filled' : 'outlined'"
    v-on:click="handleFavorisClick"
  />
</template>

<script>
export default {
  name: 'Favorisbutton',
  data() {
    return {
      ls: 'favorisStar',
      hover: false,
    }
  },
  props: ['id', 'isChecked'],
  methods: {
    added: function (name) {
      this.$message.success(name + ' ajouté')
    },
    deleted: function (name) {
      this.$message.warning(name + ' supprimé')
    },
    handleFavorisClick: function (e) {
      e.stopPropagation()
      let array = JSON.parse(localStorage.getItem(this.ls))
      if (array === null) {
        array = []
      }
      if (array.includes(this.id)) {
        const dataIndex = array.indexOf(this.id)
        array.splice(dataIndex, 1)
        this.deleted(this.id)
      } else {
        array.push(this.id)
        this.added(this.id)
      }
      localStorage.setItem(this.ls, JSON.stringify(array))
    },
  },
}
</script>

<style></style>
