<template>
  <div class="overflow-hidden">
    <mobile-nav/>
        <div class="flex flex-wrap mb-6">
            <side-nav/>
            <section v-if="artist" id="artist-page" class="lg:w-3/4 xl:w-5/6 md:mt-4 container mx-auto px-4">
              <img :src="artist.img2" class="max-h-half-screen">
              <div class="relative pb-8">
                <div class="static bg-green">
                    <div class="absolute pin-b pin-l bg-moonrise p-4 text-grey-light mx-8 leading-loose shadow-lg">
                      <h1 class="text-white text-sm md:text-lg capitalize">{{ artist.name }}</h1>
                      <p class="text-sm text-grey">{{ artist.labels }}</p>
                      <p class="text-sm text-grey">{{ artist.location }}</p>
                      <p  class="text-sm text-grey">Booking : {{ artist.territory }}</p>
                    </div>
                </div>
              </div>
              <div class="px-">
              <div class="flex flex-wrap -mx-2">
                <div class="w-full md:w-2/3 lg:w-1/2 px-2 mt-4">
                  <div  class="tracking-wide text-grey-darker mt-4 text-sm leading-normal px-2 md:w-5/6" style="white-space: pre-line;" v-html="artist.description">
                  </div>
                </div>
                 <div class="w-full md:w-1/3 lg:w-1/2 px-2 md:-ml-8">
                    <div v-if="artist.links.length > 0" class="flex flex-col bg-moonrise w-64 p-2 leading-loose mt-4 md:mt-0 ml-2">
                          <a v-for="(link, i) in artist.links" :key="i" 
                             :href="link.placeholder" target="_blank" class="no-underline text-grey-lightest font-semibold hover:text-white">
                             {{link.link}}
                          </a>
                      </div>
                      <nuxt-link :to="{ name: 'booking' }"  class="no-underline text-white font-semibold">
                        <div class="bg-grey-darkest hover:bg-grey-darker w-64 p-2 leading-loose shadow-lg ml-2 cursor-pointer">
                            Booking Request
                        </div>
                      </nuxt-link>
                       <div style="margin-top: 35px">
                        <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" :src="artist.soundcloud"></iframe>
                      </div>
                  </div>
                </div>
              </div>
              
            </section>
        </div>
  </div>
</template>

<script>
import axios from 'axios'
import MobileNav from '~/components/ui/MobileNav.vue'
import SideNav from '~/components/ui/SideNav.vue'

export default {
  components: {
    MobileNav,
    SideNav,
  },
 head() {
     return { title: this.artist.name }
 },
  asyncData ({ params }) {
    return axios.get(`https://localhost:5050/api/artist/${params.slug}`)
        .then((res) => {
          return {
            artist: res.data
          }
        })
	.catch(e => console.log(e))
  },
  methods: {
      undohtml(text) {
	if (text) {
        var map = {
            '&amp;': '&',
            '&#038;': "&",
            '&lt;': '<',
            '&gt;': '>',
            '&quot;': '"',
            '&#039;': "'",
            '&#8217;': "’",
            '&#8216;': "‘",
            '&#8211;': "–",
            '&#8212;': "—",
            '&#8230;': "…",
            '&#8221;': '”'
      }
      return text.replace(/\&[\w\d\#]{2,5}\;/g, function(m) { return map[m]; });
	}
    }, 
  }
}
</script>

<style>

</style>

