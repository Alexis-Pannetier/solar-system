import { mount } from '@vue/test-utils'
import Header from '../components/Header'

describe('Header', () => {
  test('testing Header', () => {
    const wrapper = mount(Header, {
      stubs: {
        NuxtLink: true,
        AMenu: true,
        AMenuItem: true,
        AIcon: true,
      },
      mocks: {
        $nuxt: {
          $route: {
            path: '/',
          },
        },
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
