<template>
  <div>
    <mobile-nav/>
        <div class="flex flex-wrap mb-6">
            <side-nav/>
            <section id="page-content" class="w-full lg:w-3/4 xl:w-5/6 h-full mt-4">
              <front-page/>
            </section>
        </div>
  </div>
</template>

<script>
import MobileNav from '~/components/ui/MobileNav.vue'
import SideNav from '~/components/ui/SideNav.vue'
import FrontPage from '~/components/pages/FrontPage.vue'

export default {
  components: {
    FrontPage,
    MobileNav,
    SideNav,
  }
}
</script>

<style>

</style>
