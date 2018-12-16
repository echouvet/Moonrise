<template>
      <section id="side-navigation" class="hidden lg:block lg:w-1/6 h-full">
            <div class="px-2 w-full">
                <nuxt-link to="/">
                    <img class="w-full" src="~/static/img/moon-full-rise.png" alt="moon-full-rise">
                </nuxt-link>
                <div class="text-center">
                    <nuxt-link to="/" class="whitespace-no-wrap text-moonrise uppercase font-semibold no-underline">Moonrise Agency</nuxt-link>
                </div>
                <div class="mt-2 leading-loose  tracking-wide text-center">   
                    <div class="text-center relative group">
  <div class="flex items-center justify-center cursor-pointer  text-grey hover:text-grey-dark focus:text-grey-dark capitalize  no-underline py-1 px-2">
    The astronauts
    <svg class="fill-current h-4 w-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
  </div>
  <div class="items-center absolute bg-moonrise p-2 invisible group-hover:visible w-full">
   <a href="#" class="text-grey hover:text-white capitalize  no-underline">Crazy P</a><br>
                    <a href="#" class="text-grey hover:text-white capitalize  no-underline">Eli Escobar</a><br>
                    <a href="#" class="text-grey hover:text-white capitalize  no-underline">Fred Everything</a><br>
                    <a href="#" class="text-grey hover:text-white capitalize  no-underline">Hot Toddy</a><br>
                    <a href="#" class="text-grey hover:text-white capitalize  no-underline">Jkriv</a><br>
                    <a href="#" class="text-grey hover:text-white capitalize  no-underline">Kon</a><br>
                    <a href="#" class="text-grey hover:text-white capitalize  no-underline">Labeuz</a><br>
                    <a href="#" class="text-grey hover:text-white capitalize  no-underline">Lay-Far</a><br>
                    <a href="#" class="text-grey hover:text-white capitalize  no-underline">Lovebirds</a><br>
                    <a href="#" class="text-grey hover:text-white capitalize  no-underline">Luke Salomon</a><br>
                    <a href="#" class="text-grey hover:text-white capitalize  no-underline">Martin Hayes</a><br>
                    <a href="#" class="text-grey hover:text-white capitalize  no-underline">Moplen</a><br>
                    <a href="#" class="text-grey hover:text-white capitalize  no-underline">Qwestlife</a><br>
                    <a href="#" class="text-grey hover:text-white capitalize  no-underline">Rainer Trueby</a><br>
                    <a href="#" class="text-grey hover:text-white capitalize  no-underline">Razor-N-Tape</a><br>
                    <a href="#" class="text-grey hover:text-white capitalize  no-underline">Ron basejam</a><br>
                    <a href="#" class="text-grey hover:text-white capitalize  no-underline">Sleazy Beats Soundsystem</a><br>
                    <a href="#" class="text-grey hover:text-white capitalize  no-underline">SleazyMcQueen</a><br>
                    <a href="#" class="text-grey hover:text-white capitalize  no-underline">Wolf music</a><br>
  </div>
</div>
  
                    <div class="flex flex-col mt-4">
                        <nuxt-link to="about-moonrise-agency" class="text-grey hover:text-grey-dark capitalize no-underline">About Moonrise</nuxt-link>
                        <nuxt-link to="booking" class="text-grey hover:text-grey-dark capitalize no-underline">Booking</nuxt-link>
                    </div>
                </div>
            </div>
        </section>
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
