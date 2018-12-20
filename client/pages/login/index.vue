<template>
  <div>
    <mobile-nav/>
        <div class="flex flex-wrap mb-6">
            <side-nav/>
            <section id="page-content" class="w-full md:w-3/4 xl:w-5/6 h-full px-2 mt-4 flex items-center h-screen ">
              <div class="w-full max-w-xs container mx-auto">
                <div v-show="error.visible" class="container mx-auto bg-grey-darkest shadow-lg text-white h-12 flex items-center justify-center">
                    {{ error.message }}
                </div>
                  <form  class="bg-moonrise shadow-lg px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                      <label class="block text-white text-sm font-bold mb-2" for="username">
                        Username
                      </label>
                      <input v-model="user.username" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none" id="username" type="text" placeholder="Username">
                    </div>
                    <div class="mb-6">
                      <label class="block text-white text-sm font-bold mb-2" for="password">
                        Password
                      </label>
                      <input v-model="user.password" class="hadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none" id="password" type="password" placeholder="******************">
                    </div>
                    <div class="flex items-center justify-between">
                      <button @click.prevent="login" class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none" type="submit">
                        Sign In
                      </button>
                    </div>
                  </form>
                </div>
            </section>
        </div>
  </div>
</template>

<script>
import MobileNav from '~/components/ui/MobileNav.vue'
import SideNav from '~/components/ui/SideNav.vue'
import FrontPage from '~/components/pages/FrontPage.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  middleware: ['guest'],
  components: {
    FrontPage,
    MobileNav,
    SideNav,
  },
  data () {
    return {
        user: {
          username: "",
          password: ""
        },
        error: {
          visible: false,
          message: ""
        }
      }
    },
    computed: {
      ...mapGetters({
        getToken: 'auth/getToken',
        getLoggedIn: 'auth/getLoggedIn'
      })
    },
    methods: {
      login() {
        this.authenticateUser(this.user)
          .then(() => {
            if (this.getToken && this.getLoggedIn)
              this.$router.push('/admin')
          })
      },
      ...mapActions({
        authenticateUser: 'auth/authenticateUser'
      }),
      emptyCheck() {
          if (this.user.name === "" || this.user.password === "") {
              this.showError("Please check your inputs")
            return false
          }
          this.resetError()
          return this.login()
      },
      showError(message) {
        this.error.message = message
        this.error.visible = true
      },
      resetError() {
        this.error.visible = false
        this.error.message = ""
      }
    }
}
</script>

<style>

</style>
