<template>
    <div class="flex flex-wrap px-2"> 
         <div class="w-full sm:w-1/4 px-1">
            <img v-for="(el, i) in images" v-if="i < row_count" :src="el.img1" :key="el.id" class="w-full"> 
        </div>
        <div class="w-full sm:w-1/4 px-1">
            <img v-for="(el, i) in images" v-if="i > row_count && i <= (row_count * 2)" :src="el.img1" :key="el.id" class="w-full"> 
        </div>
        <div class="w-full sm:w-1/4 px-1">
           <img v-for="(el, i) in images" v-if="i > (row_count * 2) && i <= (row_count * 3)" :src="el.img1" :key="el.id" class="w-full"> 
        </div>
        <div class="w-full sm:w-1/4 px-1">
           <img v-for="(el, i) in images" v-if="i > (row_count * 3) && i <= (row_count * 4)" :src="el.img1" :key="el.id" class="w-full"> 
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0,
            row_count: 5,
            images: {},

        }
    },   

    //   computed: {
    //     imageCount() {
    //       return Object.keys(this.images).length;
    //     },
    // },
    mounted () {
        this.getartists()
        // this.mesmaths()
    },
    methods: {
        getartists()
        {
            this.$http.get('http://localhost:4000/artists').then(response => {
                var data =  JSON.parse(response.data)
                console.log(data[0].img1)
                data.forEach(el => {
                    el.img1 = el.img1.replace("/__nuxt/assets/img/", "/img/")
                })
                this.count = data.length
                this.images = data
            })
        },
        mesmaths(){
            if (window.innerWidth >= 992)
                mesmaths2(4)
            else if(window.innerWidth >= 768)
                mesmaths2(3)
            else if(window.innerWidth >= 576)
                mesmaths2(2)
            else if(window.innerWidth < 576)
                this.row_count = this.images.length
        },
        mesmaths2(col_count){
            var logos = count % col_count 
            this.row_count = count / col_count
            while (logos > 0)
            {
                this.images.push({id: 50, link: 'link/link', name: 'Moon Rise'})
                logos--;
            }
        }
       
    }
}

</script>

<style>
 

</style>
