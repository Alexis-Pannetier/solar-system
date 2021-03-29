import _ from 'lodash'
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

describe('store', () => {
  // TODO : test store
  const localVue = createLocalVue()

  localVue.use(Vuex)

  let nuxtStore
  let store

  beforeAll(async () => {
    const storePath = `${process.env.buildDir}/store.js`
    nuxtStore = await import(storePath)
  })

  beforeEach(async () => {
    store = await nuxtStore.createStore()
    star = store.getters['star']
    favoris = store.getters['favoris']
  })

  test('store is init', () => {
    expect(_.isArray(star)).toBe(true)
    expect(_.isArray(favoris)).toBe(true)
  })
})
