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
    cookie.remove('exp')
}

export const authenticateUser = ({commit}, user) => {
    return axios.post('http://localhost:5050/login', {
          username: user.username,
          password: user.password,
          returnSecureToken: true
       }).then(res => {
           const token = res.data.token.accessToken
        if (token) {
            const tomorow = new Date(new Date().getTime() + (24 * 60 * 60 * 1000)).toISOString()
            cookie.set('token', token)
            cookie.set('exp', tomorow)
            commit('SET_TOKEN', token)
            commit('SET_EXP', tomorow)
            commit('SET_LOGGED_IN', true) 
        }
       }).catch(e => {
        console.log(e)
    })
}

export const initAuth = ({commit}, req) => {
    if (req) {
        if (req.headers.cookie) {
            let jwt = req.headers.cookie.split(';').find(key => key.trim().startsWith('token='))
            let date = req.headers.cookie.split(';').find(key => key.trim().startsWith('exp='))
            if (jwt && date) {                
                let token = jwt.split('=')[1]
                let exp = date.split('=')[1]
                if (new Date() < new Date(exp)) {
                    commit('SET_TOKEN', token)
                    commit('SET_EXP', exp)
                    commit('SET_LOGGED_IN', true)
                }
            }
        } else {
            commit('CLEAR_AUTH_STATE')
        }
    } 
}
