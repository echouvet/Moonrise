import axios from 'axios'

export const initArtistsState = async (context) => {
    const { data } = await axios.get('http://localhost:5050/artists')
    if (data) {
        const artists = JSON.parse(data)
        setArtists(context, artists)
        setGrid(context, artists.length)
    }    
}

export const setArtists = ({commit}, artists) => {
    commit('SET_ARTISTS', artists)
}

export const setGrid = ({commit}, len) => {
    commit('SET_GRID', len)
}

