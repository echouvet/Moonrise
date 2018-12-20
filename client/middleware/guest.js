export default function ({ store, redirect }) {
  if (store.state.auth.loggedIn && store.state.auth.token) {
    return redirect('/admin')
  }
}