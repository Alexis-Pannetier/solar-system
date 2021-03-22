<template>
  <div>
    <h1>{{ star.name }}</h1>
    <h3 v-if="star.isPlanet">Planète</h3>

    <a-row type="flex" justify="center" align="middle">
      <a-descriptions
        bordered
        size="small"
        :column="1"
        style="max-width: 600px"
      >
        <a-descriptions-item v-if="star.aroundPlanet" label="Orbite autour">
          <a :href="'/star/' + star.aroundPlanet.planet">{{
            star.aroundPlanet.planet
          }}</a>
        </a-descriptions-item>
        <a-descriptions-item label="Inclinaison">
          {{ star.inclination }}
        </a-descriptions-item>
        <a-descriptions-item label="Masse">
          {{ star.mass.massValue }}
        </a-descriptions-item>
        <a-descriptions-item label="Volume">
          {{ star.vol.volValue }}
        </a-descriptions-item>
        <a-descriptions-item label="Densité">
          {{ star.density }}
        </a-descriptions-item>
        <a-descriptions-item label="Gravité">
          {{ star.gravity }}
        </a-descriptions-item>
        <a-descriptions-item label="Découvert par">
          {{ star.discoveredBy }}
        </a-descriptions-item>
        <a-descriptions-item label="Découvert le">
          {{ star.discoveryDate }}
        </a-descriptions-item>
      </a-descriptions>
    </a-row>
  </div>
</template>

<script>
import { getStar } from '../../store/Request'

export default {
  async asyncData({ params }) {
    const slug = params.slug
    const star = await getStar(slug).then((res) => res)
    if (star) {
      return { star: star }
    }
  },
}
</script>

<style>
.ant-descriptions-item-content {
  color: white;
}
</style>
