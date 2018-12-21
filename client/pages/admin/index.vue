<template>
  <div>
    <mobile-nav/>
        <div class="flex flex-wrap mb-6">
            <side-nav/>
            <section id="page-content" class="w-full md:w-3/4 xl:w-5/6  h-full px-4 mt-4">
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
  computed: {
    ...mapGetters({
      getToken: 'auth/getToken',
      getLoggedIn: 'auth/getLoggedIn',
      getExpDate: 'auth/getExpDate'
    })
  }
}
</script>

<style>

</style>
