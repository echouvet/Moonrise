<template>
<div>
<!-- FOUR ROWS -->
    <div class="lg:flex lg:flex-wrap lg:px-2 hidden"> 
         <div class="w-full sm:w-1/4 px-1">
            <img v-for="(el, i) in getArtists" v-if="i < getGrid.row_count4" :src="el.img1" :key="el.id" class="w-full pb-1"> 
        </div>
        <div class="w-full sm:w-1/4 px-1">
            <img v-for="(el, i) in getArtists" v-if="i >= getGrid.row_count4 && i < (getGrid.row_count4 * 2)" :src="el.img1" :key="el.id" class="w-full pb-1"> 
        </div>
        <div class="w-full sm:w-1/4 px-1">
           <img v-for="(el, i) in getArtists" v-if="i >= (getGrid.row_count4 * 2) && i < (getGrid.row_count4 * 3)" :src="el.img1" :key="el.id" class="w-full pb-1"> 
        </div>
        <div class="w-full sm:w-1/4 px-1">
           <img v-for="(el, i) in getArtists" v-if="i >= (getGrid.row_count4 * 3)" :src="el.img1" :key="el.id" class="w-full pb-1"> 
        </div>
    </div>

<!-- THREE ROWS -->
    <div class="hidden md:flex md:flex-wrap md:px-2 lg:hidden"> 
         <div class="w-full sm:w-1/3 px-1">
            <img v-for="(el, i) in getArtists" v-if="i < getGrid.row_count3" :src="el.img1" :key="el.id" class="w-full pb-1"> 
        </div>
        <div class="w-full sm:w-1/3 px-1">
            <img v-for="(el, i) in getArtists" v-if="i >= getGrid.row_count3 && i < (getGrid.row_count3 * 2)" :src="el.img1" :key="el.id" class="w-full pb-1"> 
        </div>
        <div class="w-full sm:w-1/3 px-1">
           <img v-for="(el, i) in getArtists" v-if="i >= (getGrid.row_count3 * 2)" :src="el.img1" :key="el.id" class="w-full pb-1"> 
        </div>
    </div>

<!-- TWO ROWS -->
    <div class="flex flex-wrap px-2 md:hidden"> 
         <div class="w-full sm:w-1/2 px-1">
            <img v-for="(el, i) in getArtists" v-if="i < getGrid.row_count2" :src="el.img1" :key="el.id" class="w-full pb-1"> 
        </div>
        <div class="w-full sm:w-1/2 px-1">
            <img v-for="(el, i) in getArtists" v-if="i >= getGrid.row_count2" :src="el.img1" :key="el.id" class="w-full pb-1"> 
        </div>
    </div>


</div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
     computed: {
        ...mapGetters({
            getArtists: 'artists/getArtists',
            getGrid: 'artists/getGrid'
        })
    }
}

</script>

<style>
 

</style>
