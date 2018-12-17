<template>
      <nav id="side-navigation" class="hidden lg:block lg:w-1/6 h-full">
            <div class="w-full">
                <nuxt-link :to="{ name: 'index' }">
                    <img class="w-full" src="~/static/img/moon-full-rise.png" alt="moon-full-rise">
                </nuxt-link>
                <div class="text-center">
                    <nuxt-link :to="{ name: 'index' }" class="whitespace-no-wrap text-grey-darkest uppercase font-semibold no-underline">Moonrise Agency</nuxt-link>
                </div>
                <div class="mt-2 leading-loose tracking-wide text-center">  
                    <div class="flex flex-col items-center bg-moonrise p-2 w-full ">
                        <nuxt-link v-for="artist in getArtists" :key="artist.id" :to="{ name: 'artist-slug', params: { slug: artist.slug }}" class="text-white hover:text-grey capitalize  no-underline">{{ artist.name }}</nuxt-link><br>
                    </div>
                </div>
            </div>
            <div class="flex flex-col text-center leading-loose  py-4 bg-grey-darkest shadow-lg">
                        <nuxt-link :to="{ name: 'about-moonrise-agency' }" class="text-white font-semibold  capitalize no-underline">About Moonrise</nuxt-link>
                        <nuxt-link :to="{ name: 'booking' }"  class="text-white font-semibold  capitalize no-underline">Booking</nuxt-link>
            </div>
        </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            getArtists: 'artists/getArtists'
        })
    }
}
</script>

<style>

</style>
