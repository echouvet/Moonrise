import axios from 'axios'
import cookie from 'js-cookie'

export const setUser = ({commit}, user) => {
    commit('SET_USER', user)
}

export const setLoggedIn = ({commit}, val) => {
    commit('SET_LOGGED_IN', val)
}

export const setToken = ({commit}, token) => {
    commit('SET_TOKEN', token)
}

export const clearToken = ({commit}) => {
    commit('CLEAR_TOKEN')
}

export const clearAuthState = ({commit}) => {
    commit('CLEAR_AUTH_STATE')
}

export const logUserOut = ({commit}) => {
    commit('CLEAR_AUTH_STATE')
    cookie.remove('token')
}

// setTimeout(() => {
//     commit('CLEAR_AUTH_STATE')
//     $nuxt.$router.push('/login');
// }, 1000 * 60 * 60 * 24)

export const authenticateUser = ({commit}, user) => {
    return axios.post('http://localhost:5050/login', {
          username: user.username,
          password: user.password,
          returnSecureToken: true
       }).then(res => {
           const token = res.data.token.accessToken
        if (token) {
            cookie.set('token', `Bearer ${token}`)
            commit('SET_TOKEN', `Bearer ${token}`)
            commit('SET_LOGGED_IN', true) 
        }
       }).catch(e => {
        console.log(e)
    })
}

export const initAuth = ({commit}, req) => {
    let token
    if (req) {
        if (req.headers.cookie) {
            const jwt = req.headers.cookie.split(';').find(key => key.trim().startsWith('token='))
            if (jwt) {
                token = jwt.split('=')[1]
                commit('SET_TOKEN', token)
                commit('SET_LOGGED_IN', true)
            }
        } else {
            commit('CLEAR_AUTH_STATE')
        }
    } 
}
