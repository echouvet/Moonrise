<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
   middleware: ['check-auth'],
    mounted() {
      this.initArtistsState()
      //this.initAuth()
    },
    methods: {
      ...mapActions({
        initArtistsState: 'artists/initArtistsState',
        //initAuth: 'auth/initAuth'
      })
    },
}
</script>


<style>

</style>
