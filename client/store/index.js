import Vuex from 'vuex'

import artists from './artists'
import auth from './auth'

const createStore = () => {
  return new Vuex.Store({
    modules: {
        artists,
        auth
    }
  })
}

export default createStore