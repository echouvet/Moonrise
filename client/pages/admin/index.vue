<template>
  <div>
    <mobile-nav/>
        <div class="flex flex-wrap mb-6">
            <side-nav/>
            <section id="page-content" class="w-full lg:w-5/6  h-full px-2 mt-4">
              <app-form/>
            </section>
        </div>
  </div>
</template>

<script>
import MobileNav from '~/components/ui/MobileNav.vue'
import SideNav from '~/components/ui/SideNav.vue'
import AppForm from '~/components/form/AppForm.vue'
import { mapGetters } from 'vuex'

export default {
  middleware: ['auth'],
  components: {
    MobileNav,
    SideNav,
    AppForm
  },
  // updated () {
  //   if (!this.getToken || this.getLoggedIn === false)
  //     this.$router.push('/login')
  // },
  computed: {
    ...mapGetters({
      getToken: 'auth/getToken',
      getLoggedIn: 'auth/getLoggedIn'
    })
  }
}
</script>

<style>

</style>
