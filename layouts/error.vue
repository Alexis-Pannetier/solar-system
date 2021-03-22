<template>
  <div class="container">
    <h2 v-if="error.statusCode === 404">Page non trouvé</h2>
    <h2 v-else>Erreur : {{ error.statusCode }}</h2>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>
