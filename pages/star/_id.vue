<template>
  <div>
    <a-row type="flex" align="middle">
      <a-col span="3">
        <a-button icon="left" v-on:click="handleBack" />
      </a-col>
      <a-col span="18">
        <h2 style="margin: 16px 0">{{ star.name }}</h2>
      </a-col>
    </a-row>

    <h3 v-if="star.isPlanet" style="margin: 16px 0">Planète</h3>
    <a-row style="margin: 16px 0">
      <FavorisButton :isChecked="isFavoris(star)" :data="star" />
    </a-row>

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
import { getStar } from '../../components/utils/Request'
import { FavorisButton } from '../../components/FavorisButton'

export default {
  methods: {
    handleBack() {
      return this.$router.push('/')
    },
    isFavoris(data) {
      return (
        this.favorisData && this.favorisData.some((item) => item.id === data.id)
      )
    },
  },
  computed: {
    favorisData: function () {
      return this.$store.state.favoris.favorisList.map((item) => {
        return item.star ? item.star : item
      })
    },
  },
  async asyncData({ params }) {
    const star = await getStar(params.id).then((res) => res)
    if (star) {
      return { star: star }
    }
  },
}
</script>
