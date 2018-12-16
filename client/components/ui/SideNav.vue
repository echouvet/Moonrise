<template>
      <nav id="side-navigation" class="hidden lg:block lg:w-1/6 h-full">
            <div class="w-full">
                <nuxt-link to="/">
                    <img class="w-full" src="~/static/img/moon-full-rise.png" alt="moon-full-rise">
                </nuxt-link>
                <div class="text-center">
                    <nuxt-link to="/" class="whitespace-no-wrap text-moonrise uppercase font-semibold no-underline">Moonrise Agency</nuxt-link>
                </div>
                <div class="mt-2 leading-loose tracking-wide text-center">  
                    <div class="items-center bg-moonrise p-2 w-full">
                        <a href="#" class="text-white hover:text-grey capitalize  no-underline">Crazy P</a><br>
                        <a href="#" class="text-white hover:text-grey capitalize  no-underline">Eli Escobar</a><br>
                        <a href="#" class="text-white hover:text-grey capitalize  no-underline">Fred Everything</a><br>
                        <a href="#" class="text-white hover:text-grey capitalize  no-underline">Hot Toddy</a><br>
                        <a href="#" class="text-white hover:text-grey capitalize  no-underline">Jkriv</a><br>
                        <a href="#" class="text-white hover:text-grey capitalize  no-underline">Kon</a><br>
                        <a href="#" class="text-white hover:text-grey capitalize  no-underline">Labeuz</a><br>
                        <a href="#" class="text-white hover:text-grey capitalize  no-underline">Lay-Far</a><br>
                        <a href="#" class="text-white hover:text-grey capitalize  no-underline">Lovebirds</a><br>
                        <a href="#" class="text-white hover:text-grey capitalize  no-underline">Luke Salomon</a><br>
                        <a href="#" class="text-white hover:text-grey capitalize  no-underline">Martin Hayes</a><br>
                        <a href="#" class="text-white hover:text-grey capitalize  no-underline">Moplen</a><br>
                        <a href="#" class="text-white hover:text-grey capitalize  no-underline">Qwestlife</a><br>
                        <a href="#" class="text-white hover:text-grey capitalize  no-underline">Rainer Trueby</a><br>
                        <a href="#" class="text-white hover:text-grey capitalize  no-underline">Razor-N-Tape</a><br>
                        <a href="#" class="text-white hover:text-grey capitalize  no-underline">Ron basejam</a><br>
                        <a href="#" class="text-white hover:text-grey capitalize  no-underline">Sleazy Beats Soundsystem</a><br>
                        <a href="#" class="text-white hover:text-grey capitalize  no-underline">SleazyMcQueen</a><br>
                        <a href="#" class="text-white hover:text-grey capitalize  no-underline">Wolf music</a><br>
                    </div>
                </div>
            </div>
            <div class="flex flex-col mt-6 text-center leading-loose">
                        <nuxt-link to="about-moonrise-agency" class="text-grey-dark font-semibold hover:text-grey-darkest capitalize no-underline">About Moonrise</nuxt-link>
                        <nuxt-link to="booking" class="text-grey-dark font-semibold hover:text-grey-darkest capitalize no-underline">Booking</nuxt-link>
            </div>
        </nav>
</template>

<script>
export default {
    data () {
        return {
            visible: false
        }
    }

}
</script>

<style>

</style>
