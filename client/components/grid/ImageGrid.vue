<template>
<div>
<!-- FOUR ROWS -->
    <div class="lg:flex lg:flex-wrap lg:px-2 hidden"> 
         <div class="w-full sm:w-1/4 px-1">
            <img v-for="(el, i) in images" v-if="i < row_count4" :src="el.img1" :key="el.id" class="w-full pb-1"> 
        </div>
        <div class="w-full sm:w-1/4 px-1">
            <img v-for="(el, i) in images" v-if="i >= row_count4 && i < (row_count4 * 2)" :src="el.img1" :key="el.id" class="w-full pb-1"> 
        </div>
        <div class="w-full sm:w-1/4 px-1">
           <img v-for="(el, i) in images" v-if="i >= (row_count4 * 2) && i < (row_count4 * 3)" :src="el.img1" :key="el.id" class="w-full pb-1"> 
        </div>
        <div class="w-full sm:w-1/4 px-1">
           <img v-for="(el, i) in images" v-if="i >= (row_count4 * 3)" :src="el.img1" :key="el.id" class="w-full pb-1"> 
        </div>
    </div>

<!-- THREE ROWS -->
    <div class="hidden md:flex md:flex-wrap md:px-2 lg:hidden"> 
         <div class="w-full sm:w-1/3 px-1">
            <img v-for="(el, i) in images" v-if="i < row_count3" :src="el.img1" :key="el.id" class="w-full pb-1"> 
        </div>
        <div class="w-full sm:w-1/3 px-1">
            <img v-for="(el, i) in images" v-if="i >= row_count3 && i < (row_count3 * 2)" :src="el.img1" :key="el.id" class="w-full pb-1"> 
        </div>
        <div class="w-full sm:w-1/3 px-1">
           <img v-for="(el, i) in images" v-if="i >= (row_count3 * 2)" :src="el.img1" :key="el.id" class="w-full pb-1"> 
        </div>
    </div>

<!-- TWO ROWS -->
    <div class="flex flex-wrap px-2 md:hidden"> 
         <div class="w-full sm:w-1/2 px-1">
            <img v-for="(el, i) in images" v-if="i < row_count2" :src="el.img1" :key="el.id" class="w-full pb-1"> 
        </div>
        <div class="w-full sm:w-1/2 px-1">
            <img v-for="(el, i) in images" v-if="i >= row_count2" :src="el.img1" :key="el.id" class="w-full pb-1"> 
        </div>
    </div>


</div>
</template>

<script>
export default {
    data() {
        return {
            row_count4: 0,
            row_count3: 0,
            row_count2: 0,
            images: {},

        }
    },
    mounted () {
        this.getartists()
    },
    methods: {
        getartists()
        {
            this.$http.get('http://localhost:4000/artists').then(response => {
                var data =  JSON.parse(response.data)
                
                this.images = data
                this.row_count4 = data.length / 4
                this.row_count3 = data.length / 3
                this.row_count2 = data.length / 2
            })
        }
    }
}

</script>

<style>
 

</style>
