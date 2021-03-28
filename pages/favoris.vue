<template>
  <div class="favoris">
    <a-row type="flex" justify="center" align="middle">
      <h2 class="title" style="margin: 16px 0">Favoris</h2>
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

    <TableContainer
      v-if="isTable"
      :data="favorisData"
      :favoris="favorisData"
      style="margin: 32px 0"
    />

    <CardsContainer
      v-if="!isTable"
      :data="favorisData"
      style="margin: 32px 0"
    />
  </div>
</template>

<script>
export default {
  methods: {},
  name: 'favoris',
  data() {
    return {
      data: [],
      isTable: true,
    }
  },
  computed: {
    favorisData: function () {
      return this.$store.state.favoris.favorisList.map((item) => {
        return item.star ? item.star : item
      })
    },
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
