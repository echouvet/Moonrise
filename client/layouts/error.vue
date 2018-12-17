<template>
  <div class="w-full h-screen flex flex-col justify-center items-center">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <nuxt-link :to="{ name: 'index' }">
                    <img class="w-full" src="/img/moon-full-rise.png" alt="moon-full-rise">
                </nuxt-link>
    <nuxt-link :to="{ name: 'index' }" class="no-underline text-white bg-grey-darker py-2 px-4">Back to Moonrise Agency</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'default' // you can set a custom layout for the error page
}
</script>