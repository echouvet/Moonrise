<template>
    <div class="flex flex-wrap px-2"> 
  <!--       <div class="w-full sm:w-1/4 px-1">
                <img src="../../assets/img/crazy-p.jpg" class="w-full">
                <img src="../../assets/img/eli-escobar.jpg" class="w-full">
                <img src="../../assets/img/fred-everything.jpg" class="w-full">
                <img src="../../assets/img/hot-toddy.jpg" class="w-full">
                <img src="../../assets/img/jkriv.jpg" class="w-full">
                <img src="../../assets/img/kon.jpg" class="w-full">
                <img src="../../assets/img/qwestlife.jpg" class="w-full">

        </div>
        <div class="w-full sm:w-1/4 px-1">
                <img src="../../assets/img/razor-n-tape.jpg" class="w-full">
                <img src="../../assets/img/ron-basejam.jpg" class="w-full">
                <img src="../../assets/img/sleazy-beats-soundsystem.jpg" class="w-full">
                <img src="../../assets/img/sleazy-mcqueen.jpg" class="w-full">
                <img src="../../assets/img/wolf-music.jpg" class="w-full">
                <img src="../../assets/img/rainer-trueby.jpg" class="w-full">
        </div>
        <div class="w-full sm:w-1/4 px-1">
                <img src="../../assets/img/lay-far.jpg" class="w-full">
                <img src="../../assets/img/lovebirds.jpg" class="w-full">
                <img src="../../assets/img/luke-solomon.jpg" class="w-full">
                <img src="../../assets/img/martin-hayes.jpg" class="w-full">
                <img src="../../assets/img/moplen.jpg" class="w-full">
                <img src="../../assets/img/labeuz.jpg" class="w-full">
                <img class="w-full" src="../../assets/img/moon-full-rise.png" alt="moon-full-rise">

        </div>
        <div class="w-full sm:w-1/4 px-1">
                <img src="../../assets/img/lay-far.jpg" class="w-full">
                <img src="../../assets/img/lovebirds.jpg" class="w-full">
                <img src="../../assets/img/luke-solomon.jpg" class="w-full">
                <img src="../../assets/img/martin-hayes.jpg" class="w-full">
                <img src="../../assets/img/moplen.jpg" class="w-full">
                <img src="../../assets/img/labeuz.jpg" class="w-full">
                <img class="w-full" src="../../assets/img/moon-full-rise.png" alt="moon-full-rise">

        </div> -->


                

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
