export const SET_USER = (state, user) => {
    state.user = user
}

export const SET_LOGGED_IN = (state, val) => {
    state.loggedIn = val
}

export const SET_TOKEN = (state, token) => {
    state.token = token 
}

export const SET_EXP = (state, date) => {
    state.exp = date
}

export const CLEAR_AUTH_STATE = (state) => {
    state.user = null
    state.token = null
    state.exp = null
    state.loggedIn = false
}

export const CLEAR_USER = (state) => {
    state.user = null
}

export const CLEAR_TOKEN = (state) => {
    state.token = null
}