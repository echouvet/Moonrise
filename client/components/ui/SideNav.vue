<template>
      <nav id="side-navigation" class="hidden lg:block lg:w-1/4 xl:w-1/6 h-full">
            <div class="w-full">
                <nuxt-link :to="{ name: 'index'}">
                    <img class="w-full" src="~/static/img/moon-full-rise.png" alt="moon-full-rise">
                </nuxt-link>
                <div class="text-center">
                </div>
                <div class="mt-2 leading-loose tracking-wide text-center">  
                    <div class="flex flex-col items-center bg-moonrise p-2 w-full ">
                        <nuxt-link v-for="artist in getArtists" :key="artist.id" :to="{ name: 'artist-slug', params: { slug: artist.slug }}" class="text-white hover:text-grey capitalize  no-underline">{{ artist.name }}</nuxt-link><br>
                    </div>
                </div>
            </div>
           

            <div class="flex flex-col text-center leading-loose  py-4 bg-grey-darkest shadow-lg">
                        <nuxt-link :to="{ name: 'about-moonrise-agency' }" class="text-white font-semibold  capitalize no-underline">About</nuxt-link>
                        <nuxt-link :to="{ name: 'booking' }"  class="text-white font-semibold  capitalize no-underline">Booking</nuxt-link>
                        <a v-if="isloggedIn" class="text-white cursor-pointer font-semibold" @click="logout">Logout</a>


            </div>
        </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            getArtists: 'artists/getArtists',
            isloggedIn: 'auth/getLoggedIn'
        })
    },
    methods: {
      logout() {
            this.logUserOut()
            this.$router.push('/')
        },
        ...mapActions({
            logUserOut: 'auth/logUserOut'
        })
    }
}
</script>

<style>

</style>
