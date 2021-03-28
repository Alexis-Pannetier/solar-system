<template>
  <div>
    <a-menu v-model="current" mode="horizontal" theme="dark">
      <a-menu-item key="/">
        <NuxtLink to="/">Système solaire</NuxtLink>
      </a-menu-item>
      <a-menu-item key="favoris">
        <NuxtLink to="/favoris">Favoris</NuxtLink>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
import Logo from './Logo.vue'
export default {
  name: 'Header',
  data() {
    return {
      current: [this.$nuxt.$route.name],
    }
  },
}
</script>
