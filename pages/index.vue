<template>
  <div class="index">
    <a-row type="flex" justify="center" align="middle">
      <h2 class="white">Système solaire</h2>
    </a-row>

    <a-row type="flex" justify="center" align="middle" style="margin: 32px 0">
      <a-switch
        v-model="isPlanet"
        checked-children="Planètes"
        un-checked-children="Planètes"
      />

      <a-switch
        v-model="withMoon"
        checked-children="Avec lune(s)"
        un-checked-children="Avec lune(s)"
      />
    </a-row>

    <CardsContainer :data="visibleData" style="margin: 32px 0" />
  </div>
</template>

<script>
import { getAllStar } from '../store/Request'
import { CardsContainer } from '../components/CardsContainer'

export default {
  name: 'index',
  data() {
    return {
      data: [],
      isPlanet: false,
      withMoon: false,
    }
  },
  computed: {
    visibleData: function () {
      let result = []
      if (this.data) {
        result = this.data
        if (this.isPlanet) {
          result = result.filter((item) => item.isPlanet)
        }
        if (this.withMoon) {
          result = result.filter((item) => item.moons !== null)
        }
      }
      return result
    },
  },
  mounted() {
    this.data = getAllStar().then(
      (response) => (this.data = response.sort(this.byAlphabetic))
    )
  },
  methods: {
    byAlphabetic(a, b) {
      const textA = a.name.toUpperCase()
      const textB = b.name.toUpperCase()
      return textA < textB ? -1 : textA > textB ? 1 : 0
    },
  },
}
</script>

<style>
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
