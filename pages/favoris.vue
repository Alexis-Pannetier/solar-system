<template>
  <div class="favoris">
    <a-row type="flex" justify="center" align="middle">
      <h2 class="title white">Favoris</h2>
    </a-row>

    <a-row
      type="flex"
      justify="end"
      align="middle"
      :gutter="[16, 16]"
      style="margin: 32px 0"
    >
      <a-col :md="6" :sm="24" :xs="24">
        <a-switch
          v-model="isTable"
          checked-children="Tableau"
          un-checked-children="Cartes"
        />
      </a-col>
    </a-row>

    <TableContainer v-if="isTable" :data="visibleData" style="margin: 32px 0" />

    <CardsContainer
      v-if="!isTable"
      :data="visibleData"
      style="margin: 32px 0"
    />
  </div>
</template>

<script>
import { getAllStar } from '../store/Request'
export default {
  methods: {},
  name: 'favoris',
  data() {
    return {
      data: [],
      ls: 'favorisStar',
      isTable: true,
    }
  },
  computed: {
    favorisData: function () {
      let data = []
      if (typeof window !== 'undefined') {
        data = JSON.parse(localStorage.getItem(this.ls))
        return data
      }
    },
    visibleData: function () {
      let result = []
      if (this.data && this.favorisData) {
        result = this.data.filter((item) => this.favorisData.includes(item.id))
      }
      return result
    },
  },
  mounted() {
    getAllStar().then((response) => {
      this.data = response.sort(this.byAlphabetic)
    })
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

<style></style>
