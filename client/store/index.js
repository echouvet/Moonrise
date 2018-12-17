import Vuex from 'vuex'

import artists from './artists'

const createStore = () => {
  return new Vuex.Store({
    modules: {
        artists
    }
  })
}

export default createStore