<template>
  <a-table
    :columns="columns"
    :customRow="customRow"
    :data-source="data"
    :rowClassName="(record, index) => 'cursor'"
    rowKey="id"
    :loading="!data"
    :pagination="{ pageSize: 100 }"
    :scroll="{ y: 512 }"
  >
    <template slot="isPlanet" slot-scope="text, record">
      <span v-if="record.isPlanet">
        <a-icon type="global" style="font-size: 16px" />
      </span>
    </template>
    <template slot="favoris" slot-scope="text, record">
      <FavorisButton :isChecked="isFavoris(record)" :data="record" />
    </template>
  </a-table>
</template>

<script>
const columns = [
  {
    title: 'Nom',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: 'Planète',
    dataIndex: 'isPlanet',
    key: 'isPlanet',
    scopedSlots: { customRender: 'isPlanet' },
    sorter: (a, b) => b.isPlanet - a.isPlanet,
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
  props: ['data', 'favoris'],
  data() {
    return {
      columns,
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
    isFavoris(data) {
      return this.favoris && this.favoris.some((item) => item.id === data.id)
    },
  },
}
</script>

<style></style>
