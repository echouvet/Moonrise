<template>
  <div class="overflow-hidden">
    <mobile-nav/>
        <div class="flex flex-wrap mb-6">
            <side-nav/>
            <section id="page-content" class="lg:w-5/6 md:mt-4 container mx-auto px-4">
              <img src="~/static/img/lovebirds.jpg">
              <div class="relative pb-8">
                <div class="static bg-green">
                    <div class="absolute pin-b pin-l bg-moonrise p-4 text-grey-light mx-8 leading-loose shadow-lg">
                      <h1 class="text-white text-sm md:text-lg">Konstantin Sibold</h1>
                      <p class="text-grey-lightest text-xs md:text-base">Mule Musiq / Innervision / Running Back</p>
                      <p class="text-grey-lightest text-xs md:text-base">Location: Stuttgart, Germany</p>
                      <p class="text-grey-lightest text-xs md:text-base">Booking worldwide</p>
                    </div>
                </div>
              </div>
              <div class="px-2">
              <div class="flex flex-wrap -mx-2">
                <div class="w-full md:w-1/2 px-2 mt-4">
                  <div class="tracking-wide text-grey-darker mt-4 leading-normal px-2 md:w-5/6">
                    Located deep within the circuitry of a mechanical alien host known as Maetrik you will find a complex web of synaptic dispersements resembling what could be called a soul.
                    And this soul which drives it’s host and manipulates it’s every move is finally beginning  to emerge. Its name is Maceo Plex. 
                    The emergence of such an entity has been the result of a need for feeling, a need for interplanetary funk.
                    We as humans consider this need a feeling, a feeling rooted in emotion, and emotion being the very basis of humanity. 
                    Maceo Plex is on a quest to fullfil his need to inject feeling and funk into the world, and he’s already proving to be quite productive. 
                    With deep and funky works of audible engineering for the label Crosstown Rebels in the form of a full length album titled “Life Index”, a night with Maceo Plex will be one of galactic proportions. 
                  </div>
                </div>
                  <div class="w-full md:w-1/2 px-2">
                    <div class="bg-moonrise w-64 p-2 leading-loose mt-4 md:mt-0 ml-2">
                          <a href="#" class="no-underline text-grey-lightest font-semibold hover:text-white">Press Kit</a><br>
                          <a href="#" class="no-underline text-grey-lightest font-semibold hover:text-white">Facebook</a><br>                                                
                          <a href="#" class="no-underline text-grey-lightest font-semibold hover:text-white">Resident Advisor</a>    
                      </div>
                       <div class="bg-grey-lightest w-64 p-2 leading-loose shadow-lg ml-2">
                          <a href="#" class="no-underline text-grey-darkest font-semibold hover:text-grey-darker">Booking Request</a><br>
                      </div>
                  </div>
                </div>
              </div>
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
