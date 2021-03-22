<template>
  <a-table
    :columns="columns"
    :data-source="data"
    rowKey="id"
    :rowClassName="(record, index) => 'cursor'"
    :customRow="customRow"
  >
    <template slot="isPlanet" slot-scope="text, record">
      <span v-if="record.isPlanet">
        <a-icon type="global" style="font-size: 16px" />
      </span>
    </template>
    <template slot="favoris" slot-scope="text, record">
      <FavorisButton :isChecked="false" :id="record.id" />
    </template>
  </a-table>
</template>

<script>
const columns = [
  {
    title: 'Nom',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Planète',
    dataIndex: 'isPlanet',
    key: 'isPlanet',
    scopedSlots: { customRender: 'isPlanet' },
  },
  {
    title: 'Favoris',
    dataIndex: 'id',
    key: 'id',
    scopedSlots: { customRender: 'favoris' },
  },
]

import { FavorisButton } from './FavorisButton'

export default {
  name: 'TableContainer',
  props: ['data'],
  data() {
    return {
      columns,
      favoris: [],
    }
  },
  methods: {
    customRow(record, index) {
      return {
        on: {
          click: () => {
            this.$router.push('/star/' + record.id)
          },
        },
      }
    },
  },
  mounted() {
    if (localStorage.favoris) {
      this.favoris = localStorage.favoris
    }
  },
  watch: {
    name(newFavoris) {
      localStorage.favoris = newFavoris
    },
  },
}
</script>

<style></style>
