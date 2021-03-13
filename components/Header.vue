<template>
  <div>
    <a-menu v-model="current" mode="horizontal" theme="dark">
      <a-menu-item key="index">
        <a-row justify="center" align="middle">
          <logo
            v-bind:style="{
              verticalAlign: 'middle',
              height: '32px',
              width: '32px',
            }"
          />
          <NuxtLink to="/">Système solaire</NuxtLink>
        </a-row>
      </a-menu-item>
      <a-menu-item key="favoris">
        <NuxtLink to="favoris">Favoris</NuxtLink>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
import Logo from './Logo.vue'
export default {
  components: { Logo },
  name: 'Header',
  data() {
    return {
      current: [this.$nuxt.$route.name],
    }
  },
}
</script>
