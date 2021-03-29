import { message } from 'ant-design-vue'

export const state = () => ({
  data: [],
  done: false,
  loading: true,
})

export const mutations = {
  toggle(state, star) {
    const list = state.data
    let exist = false
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === star.id) {
        exist = true
        break
      }
    }
    if (exist) {
      state.data.splice(state.data.indexOf(star), 1)
      state.done = true
      state.loading = false
      message.warning('Favoris : ' + star.name + ' supprimé')
    } else {
      state.data.push(star)
      state.done = true
      state.loading = false
      message.success('Favoris : ' + star.name + ' ajouté')
    }
  },
  isLoading(state) {
    state.done = false
    state.loading = true
  },
}
