<template>
  <a-descriptions bordered size="small" :column="1" style="max-width: 600px">
    <a-descriptions-item v-if="data.aroundPlanet" label="Orbite autour">
      <a :href="'/star/' + data.aroundPlanet.planet">{{
        data.aroundPlanet.planet
      }}</a>
    </a-descriptions-item>
    <a-descriptions-item label="Inclinaison">
      {{ data.inclination }}
    </a-descriptions-item>
    <a-descriptions-item label="Masse">
      {{ data.mass.massValue }}
    </a-descriptions-item>
    <a-descriptions-item label="Volume">
      {{ data.vol.volValue }}
    </a-descriptions-item>
    <a-descriptions-item label="Densité">
      {{ data.density }}
    </a-descriptions-item>
    <a-descriptions-item label="Gravité">
      {{ data.gravity }}
    </a-descriptions-item>
    <a-descriptions-item label="Découvert par">
      {{ data.discoveredBy }}
    </a-descriptions-item>
    <a-descriptions-item label="Découvert le">
      {{ data.discoveryDate }}
    </a-descriptions-item>
  </a-descriptions>
</template>

<script>
export default {
  name: 'StarDescription',
  props: ['data'],
}
</script>
