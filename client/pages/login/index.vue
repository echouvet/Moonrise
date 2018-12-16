<template>
  <div>
    <mobile-nav/>
        <div class="flex flex-wrap mb-6">
            <side-nav/>
            <section id="page-content" class="w-full lg:w-5/6  h-full px-2 mt-4 flex items-center h-screen ">
              <div class="w-full max-w-xs container mx-auto">
                  <form @submit.prevent="login" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                      <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
                        Username
                      </label>
                      <input v-model="user.name" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
                    </div>
                    <div class="mb-6">
                      <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
                        Password
                      </label>
                      <input v-model="user.password" class="hadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
                    </div>
                    <div class="flex items-center justify-between">
                      <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
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
import Vues from 'vue'
import ajax from 'vue-h-ajax';
Vues.use(ajax);
import MobileNav from '~/components/ui/MobileNav.vue'
import SideNav from '~/components/ui/SideNav.vue'
import FrontPage from '~/components/pages/FrontPage.vue'

export default {
  components: {
    FrontPage,
    MobileNav,
    SideNav,
  },
  data () {
    return {
        user: {
          name: "",
          password: ""
        }
      }
    },
    methods: {
      login() {
          if (this.emptyCheck())
            return alert(this.user.name)
          else
            return alert('check your inputs')
      },
      emptyCheck() {
          if (this.user.name === "" || this.user.password === "")
            return false
          return true
      }
    }
}
</script>

<style>

</style>
