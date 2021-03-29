<template>
  <div class="index">
    <a-row type="flex" justify="center" align="middle">
      <h2 style="margin: 16px 0">Système solaire</h2>
    </a-row>

    <a-row
      type="flex"
      justify="end"
      align="middle"
      :gutter="[16, 16]"
      style="margin: 32px 0"
    >
      <a-col :md="12" :sm="24" :xs="24">
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
      </a-col>

      <a-col :md="6" :sm="24" :xs="24">
        <a-switch
          v-model="isTable"
          checked-children="Tableau"
          un-checked-children="Cartes"
        />
      </a-col>
    </a-row>

    <TableContainer
      v-if="isTable"
      :data="visibleData"
      :favoris="favorisData"
      :loading="dataIsLoading"
      style="margin: 32px 0"
    />

    <CardsContainer
      v-if="!isTable"
      :data="visibleData"
      :loading="dataIsLoading"
      style="margin: 32px 0"
    />
  </div>
</template>

<script>
import { getAllStar } from '../components/utils/Request'
import { CardsContainer } from '../components/CardsContainer'
import { TableContainer } from '../components/TableContainer'

export default {
  name: 'index',
  data() {
    return {
      isPlanet: false,
      isTable: true,
      withMoon: false,
    }
  },
  computed: {
    dataIsLoading() {
      this.$store.state.star.loading
    },
    favorisData: function () {
      return this.$store.state.favoris.data.map((item) => {
        return item.star ? item.star : item
      })
    },
    visibleData() {
      let result = []
      const data = this.$store.state.star.data
      result = data
      if (data) {
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
    this.loadStars()
  },
  methods: {
    loadStars() {
      if (!this.$store.state.star.data.length) {
        this.$store.commit('star/isLoading')
        getAllStar().then((response) => {
          const stars = response.sort(this.byAlphabetic)
          this.$store.commit('star/set', stars)
        })
      }
    },
    byAlphabetic(a, b) {
      const textA = a.name.toUpperCase()
      const textB = b.name.toUpperCase()
      return textA < textB ? -1 : textA > textB ? 1 : 0
    },
  },
}
</script>
