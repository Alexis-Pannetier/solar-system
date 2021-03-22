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
]

export default {
  name: 'TableContainer',
  props: ['data'],
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
            console.log('record:', record)
            window.location.href = '/star/' + record.id
          },
        },
      }
    },
  },
}
</script>

<style></style>
