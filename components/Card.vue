<template>
  <a-row type="flex" justify="center" align="middle">
    <NuxtLink :to="'/star/' + data.id">
      <a-card :title="data.name" style="min-width: 250px" />
    </NuxtLink>
  </a-row>
</template>

<script>
export default {
  name: 'Card',
  props: ['data'],
}
</script>
