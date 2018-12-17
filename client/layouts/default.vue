<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    mounted() {
      this.initArtistsState()
    },
    methods: {
      ...mapActions({
        initArtistsState: 'artists/initArtistsState'
      })
    },
}
</script>


<style>

</style>
