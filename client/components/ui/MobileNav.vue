<template>
    <div>
     <nav class="lg:hidden flex items-center justify-between w-full px-1">
        <div>
            <nuxt-link :to="{ name: 'index'}">
                <img alt="moonrise-agency" class="h-16 ml-2" src="~/static/img/moon-full-rise.png">
            </nuxt-link>
        </div>
        <div class="px-4">
            <svg @click="toggleModal" class="fill-current w-8 h-8 cursor-pointer text-grey-dark hover:text-grey-darkest" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg>
        </div>
    </nav>
        <div v-if="modal" @click.self="toggleModal" class="animated fadeIn fixed z-50 pin overflow-auto flex">
            <div class="bg-moonrise animated fadeInUp fixed pin-b pin-x align-top m-auto justify-center w-full h-full flex flex-col">
                <div class="leading-loose tracking-wide text-center">  
                    <div class="flex flex-col items-center w-full ">
                        <nuxt-link :to="{ name: 'index' }" class="whitespace-no-wrap text-grey hover:text-white uppercase font-semibold no-underline pb-4">Moonrise Agency</nuxt-link>
                        <nuxt-link v-for="artist in getArtists" :key="artist.id" :to="{ name: 'artist-slug', params: { slug: artist.slug }}" class="text-white hover:text-grey capitalize  no-underline">{{ artist.name }}</nuxt-link><br>
                    </div>
                </div>
                   <div class="flex flex-col text-center leading-loose">
                        <nuxt-link :to="{ name: 'about-moonrise-agency' }" class="text-white capitalize no-underline hover:text-grey">About Moonrise</nuxt-link>
                        <nuxt-link :to="{ name: 'booking' }"  class="text-white capitalize no-underline hover:text-grey">Booking</nuxt-link>

                         <a v-if="this.$store.state.auth.loggedIn" class="text-white cursor-pointer hover:text-grey" @click="logout">Logout</a>

            </div>
                 <span @click="toggleModal" class="absolute pin-t pin-r pt-4 px-4">
                        <svg class="h-10 w-10 text-white fill-current" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                    </span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            modal: false
        }
    },
    methods: {
    toggleModal() {
      this.modal = !this.modal
    },
      async logout() {
            await this.$auth.logout();
        }
  },
  computed: {
        ...mapGetters({
            getArtists: 'artists/getArtists'
        })
    }
}
</script>

<style>

</style>


