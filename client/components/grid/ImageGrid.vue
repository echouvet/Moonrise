<template>
<div v-if="getArtists">
<!-- FOUR ROWS -->
    <div class="lg:flex lg:flex-wrap lg:px-2 hidden"> 
         <div class="w-full sm:w-1/4 pr-1">
            <div class="grid pb-1" v-for="(el, i) in getArtists" v-if="i < getGrid.row_count4" :key="el.id">
               <artist-image :artist="el" />
            </div>
        </div>
        <div class="w-full sm:w-1/4 px-1">
            <div class="grid  pb-1" v-for="(el, i) in getArtists" v-if="i >= getGrid.row_count4 && i < (getGrid.row_count4 * 2)" :key="el.id">
                <artist-image :artist="el" />
            </div>
        </div>
        <div class="w-full sm:w-1/4 px-1">
            <div class="grid  pb-1" v-for="(el, i) in getArtists" v-if="i >= (getGrid.row_count4 * 2) && i < (getGrid.row_count4 * 3)" :src="el.img1" :key="el.id">
                <artist-image :artist="el" />
            </div>
        </div>
        <div class="w-full sm:w-1/4 px-1">
            <div class="grid  pb-1" v-for="(el, i) in getArtists" v-if="i >= (getGrid.row_count4 * 3)" :src="el.img1" :key="el.id">
                <artist-image :artist="el" />
            </div>
        </div>
    </div>

<!-- THREE ROWS -->
    <div class="hidden md:flex md:flex-wrap md:px-2 lg:hidden"> 
         <div class="w-full sm:w-1/3 px-1">
             <div class="grid  pb-1" v-for="(el, i) in getArtists" v-if="i < getGrid.row_count3" :src="el.img1" :key="el.id">
                <artist-image :artist="el" />
            </div>
        </div>
        <div class="w-full sm:w-1/3 px-1">
            <div class="grid  pb-1" v-for="(el, i) in getArtists" v-if="i >= getGrid.row_count3 && i < (getGrid.row_count3 * 2)" :src="el.img1" :key="el.id">
                <artist-image :artist="el" />
            </div>
        </div>
        <div class="w-full sm:w-1/3 px-1">
             <div class="grid  pb-1" v-for="(el, i) in getArtists" v-if="i >= (getGrid.row_count3 * 2)" :src="el.img1" :key="el.id" >
                <artist-image :artist="el" />
            </div>
        </div>
    </div>

<!-- TWO ROWS -->
    <div class="flex flex-wrap px-2 md:hidden"> 
         <div class="w-full sm:w-1/2 px-1">
             <div class="grid  pb-1" v-for="(el, i) in getArtists" v-if="i < getGrid.row_count2" :src="el.img1" :key="el.id">
                <artist-image :artist="el" />
            </div>
        </div>
        <div class="w-full sm:w-1/2 px-1">
             <div class="grid  pb-1" v-for="(el, i) in getArtists" v-if="i >= getGrid.row_count2" :src="el.img1" :key="el.id">
                <artist-image :artist="el" />
            </div>
        </div>
    </div>


</div>
<div v-else>
    loading
</div>
</template>

<script>
import { mapGetters } from "vuex"
import ArtistImage from './ArtistImage.vue'

export default {
    components: {
        ArtistImage
    },
     computed: {
        ...mapGetters({
            getArtists: 'artists/getArtists',
            getGrid: 'artists/getGrid'
        })
    }
}

</script>

<style>
.grid {
  position: relative;
  width: 100%;
}

.image {
  opacity: 1;
  display: block;
  transition: .5s ease;
  backface-visibility: hidden;
}

.artist-overlay {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}

.grid:hover .image {
  opacity: 0.3;
}

.grid:hover .artist-overlay {
  opacity: 1;
}
</style>
