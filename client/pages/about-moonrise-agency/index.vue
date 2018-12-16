<template>
  <div>
    <mobile-nav/>
        <div class="flex flex-wrap mb-6">
            <side-nav/>
            <section id="page-content" class="px-4 md:mt-4 md:w-5/6 md:container md:mx-auto">
                <h1 class="text-grey-darkest my-2">About Moonrise Agency</h1>
                <hr class="border border-b border-grey-lighter mb-4">
                <p class="text-grey-darkest lg:w-5/6">Moon Rise is a synergy between artistic and technical skills to generate a talent boutique agency dedicated to artists & independent labels.</p><br>
                <p class="text-grey-darkest lg:w-5/6">A fusion of music production, diffusion & promotion for underground & a warm musical culture.</p><br>
                <p class="text-grey-darkest lg:w-5/6">A combination of artistic selection based on high quality realization, creation & a strong taste of production to reach the excellence of slow, deep and tasty disco & house music.</p><br>
                <p class="text-grey-darkest mb-2">Check us out at                        
                        <a href="https://soundcloud.com/moon-rise" target="_blank" class="text-grey-dark hover:text-grey-dark no-underline italic font-semibold">soundcloud.com/moon-rise</a>
                </p>
                <p class="text-grey-darkest">You can contact us for further information                         
                        <a href="#" class="text-grey-dark hover:text-grey-dark no-underline italic font-semibold">info@moonrise-agency.com</a>
                </p>
            </section>
        </div>
  </div>
</template>

<script>

import MobileNav from '~/components/ui/MobileNav.vue'
import SideNav from '~/components/ui/SideNav.vue'

export default {
  components: {
    MobileNav,
    SideNav,
  }
}
</script>

<style>

</style>
