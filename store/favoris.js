import { message } from 'ant-design-vue'
export const state = () => ({
  favorisList: [],
})

export const mutations = {
  toggle(state, star) {
    const list = state.favorisList
    let exist = false
    for (let i = 0; i < list.length; i++) {
      if (list[i].star.id === star.id) {
        exist = true
        break
      }
    }

    if (exist) {
      state.favorisList.splice(state.favorisList.indexOf(star), 1)
      message.warning('Favoris : ' + star.name + ' supprimé')
    } else {
      state.favorisList.push({
        star,
        done: false,
      })
      message.success('Favoris : ' + star.name + ' ajouté')
    }
  },
}
