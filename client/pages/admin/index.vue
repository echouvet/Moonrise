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
import Vues from 'vue'
import ajax from 'vue-h-ajax';
Vues.use(ajax);
import MobileNav from '~/components/ui/MobileNav.vue'
import SideNav from '~/components/ui/SideNav.vue'
import AppForm from '~/components/form/AppForm.vue'

export default {
  components: {
    MobileNav,
    SideNav,
    AppForm
  }
}
</script>

<style>

</style>
