<template>
    <div>
        <mobile-nav/>
        <div class="flex flex-wrap mb-6">
            <side-nav/>
            <div class="w-full lg:w-5/6  h-full px-2 mt-4">
                <image-grid/>
            </div>
        </div>
    </div>
</template>

<script>
import MobileNav from '../ui/MobileNav.vue'
import SideNav from '../ui/SideNav.vue'
import ImageGrid from '../grid/ImageGrid.vue'

export default {
    components: {
        MobileNav,
        SideNav,
        ImageGrid
    }
}
</script>

<style>

</style>
