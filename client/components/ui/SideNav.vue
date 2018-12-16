<template>
      <nav id="side-navigation" class="hidden lg:block lg:w-1/6 h-full">
            <div class="w-full">
                <nuxt-link to="/">
                    <img class="w-full" src="~/static/img/moon-full-rise.png" alt="moon-full-rise">
                </nuxt-link>
                <div class="text-center">
                    <nuxt-link to="/" class="whitespace-no-wrap text-grey-darkest uppercase font-semibold no-underline">Moonrise Agency</nuxt-link>
                </div>
                <div class="mt-2 leading-loose tracking-wide text-center">  
                    <div class="items-center bg-moonrise p-2 w-full ">
                        <nuxt-link to="/artist/crazy-p" class="text-white hover:text-grey capitalize  no-underline">Crazy P</nuxt-link><br>
                        <nuxt-link to="/artist/eli-escobar" class="text-white hover:text-grey capitalize  no-underline">Eli Escobar</nuxt-link><br>
                        <nuxt-link to="/artist/fred-everything" class="text-white hover:text-grey capitalize  no-underline">Fred Everything</nuxt-link><br>
                        <nuxt-link to="/artist/hot-toddy" class="text-white hover:text-grey capitalize  no-underline">Hot Toddy</nuxt-link><br>
                        <nuxt-link to="/artist/jkriv" class="text-white hover:text-grey capitalize  no-underline">Jkriv</nuxt-link><br>
                        <nuxt-link to="/artist/kon" class="text-white hover:text-grey capitalize  no-underline">Kon</nuxt-link><br>
                        <nuxt-link to="/artist/labeuz" class="text-white hover:text-grey capitalize  no-underline">Labeuz</nuxt-link><br>
                        <nuxt-link to="/artist/lay-far" class="text-white hover:text-grey capitalize  no-underline">Lay-Far</nuxt-link><br>
                        <nuxt-link to="/artist/lovebirds" class="text-white hover:text-grey capitalize  no-underline">Lovebirds</nuxt-link><br>
                        <nuxt-link to="/artist/luke-salomon" class="text-white hover:text-grey capitalize  no-underline">Luke Salomon</nuxt-link><br>
                        <nuxt-link to="/artist/martin-hayes" class="text-white hover:text-grey capitalize  no-underline">Martin Hayes</nuxt-link><br>
                        <nuxt-link to="/artist/moplen" class="text-white hover:text-grey capitalize  no-underline">Moplen</nuxt-link><br>
                        <nuxt-link to="/artist/qwestlife" class="text-white hover:text-grey capitalize  no-underline">Qwestlife</nuxt-link><br>
                        <nuxt-link to="/artist/rainer-trueby" class="text-white hover:text-grey capitalize  no-underline">Rainer Trueby</nuxt-link><br>
                        <nuxt-link to="/artist/razor-n-tape" class="text-white hover:text-grey capitalize  no-underline">Razor-N-Tape</nuxt-link><br>
                        <nuxt-link to="/artist/ron-basejam" class="text-white hover:text-grey capitalize  no-underline">Ron basejam</nuxt-link><br>
                        <nuxt-link to="/artist/sleazy-beats-soundsystem" class="text-white hover:text-grey capitalize  no-underline">Sleazy Beats Soundsystem</nuxt-link><br>
                        <nuxt-link to="/artist/sleazy-mcqueen" class="text-white hover:text-grey capitalize  no-underline">SleazyMcQueen</nuxt-link><br>
                        <nuxt-link to="/artist/wolf-music" class="text-white hover:text-grey capitalize  no-underline">Wolf music</nuxt-link><br>
                    </div>
                </div>
            </div>
            <div class="flex flex-col text-center leading-loose  py-4 bg-grey-darkest shadow-lg">
                        <nuxt-link to="/about-moonrise-agency" class="text-white font-semibold  capitalize no-underline">About Moonrise</nuxt-link>
                        <nuxt-link to="/booking" class="text-white font-semibold  capitalize no-underline">Booking</nuxt-link>
            </div>
        </nav>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex'

// export default {
//     methods: {
//         ...mapActions({
//             setArtists: 'artists/setArtists'
//         })
//     },
//     computed: {
//         ...mapGetters({
//             getArtists: 'artists/getArtists'
//         })
//     }

// }
</script>

<style>

</style>
