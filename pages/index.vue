<template>
  <div class="container">
    <div>
      <h2 class="title">solar-system</h2>

      <a-checkbox v-model="isPlanet"> Planète </a-checkbox>
      <a-checkbox v-model="withMoon"> Avec lune(s) </a-checkbox>

      <a-row id="planet-container">
        <a-col :span="6" v-for="item in visibleData" :key="item.id">
          <span>
            {{ item.name }}
          </span>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import { solarSystemRequest } from '../store/Request'
export default {
  methods: {},
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
    this.data = solarSystemRequest().then((response) => (this.data = response))
  },
  methods: {
    filteredData(data) {
      return data.filter((item) => item.isPlanet === true)
    },
    onPlanetChange() {},
    onMoonChange() {},
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: top;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

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
