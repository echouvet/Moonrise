<template>
  <section class="container">
    <front-page/>
    <app-form/>
  </section>
</template>

<script>
import FrontPage from '~/components/pages/FrontPage.vue'
import AppForm from '~/components/form/AppForm.vue'

export default {
  components: {
    FrontPage,
    AppForm
  }
}
</script>

<style>

</style>
