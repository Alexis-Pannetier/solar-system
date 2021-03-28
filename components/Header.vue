<template>
  <div>
    <a-menu v-model="path" mode="horizontal" theme="dark">
      <a-menu-item key="/">
        <NuxtLink to="/">Système solaire</NuxtLink>
      </a-menu-item>
      <a-menu-item key="/favoris">
        <NuxtLink to="/favoris">Favoris</NuxtLink>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    path: function () {
      return [this.$nuxt.$route.path]
    },
  },
}
</script>
