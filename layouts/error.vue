<template>
  <div class="container">
    <h2>Erreur : {{ error.statusCode }}</h2>
    <h3 v-if="error.statusCode === 404">Page non trouvé</h3>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>
