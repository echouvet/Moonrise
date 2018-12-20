export default function ({ store, redirect }) {
    if (!store.state.auth.token || store.state.auth.loggedIn === false) {
      return redirect('/login')
    }
}