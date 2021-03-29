export const state = () => ({
  data: [],
  done: false,
  loading: false,
})

export const mutations = {
  set(state, star) {
    state.data = star
    state.done = false
    state.loading = false
  },
  isLoading(state) {
    state.done = false
    state.loading = true
  },
}
