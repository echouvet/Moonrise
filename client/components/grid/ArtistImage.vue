<template>
    <nuxt-link :to="{ name: 'artist-slug', params: { slug: artist.slug }}" class="whitespace-no-wrap no-underline text-grey-darkest font-bold uppercase">
        <img :src="artist.img1"  class="image w-full  pb-1">
        <div class="artist-overlay">
                    {{ artist.name }}
        </div>
    </nuxt-link>
</template>

<script>
export default {
    props: {
        artist: {
            type: Object,
            required: true
        }
    }
}
</script>

