import Vuex from 'Vuex'



import artists from './modules/artists'

const store = () => {
    return new Vuex.Store({
        modules: {
            artists
        }
    })
}

export default store