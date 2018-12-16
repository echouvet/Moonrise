<template>
  <div>
    <mobile-nav/>
        <div class="flex flex-wrap mb-6">
            <side-nav/>
            <section id="page-content" class="container mx-auto px-4 md:mt-4 lg:w-5/6">
                <h1 class="text-grey-darkest my-2">Booking with Moonrise Agency</h1>
                <hr class="border border-b border-grey-lighter">
                <booking-form />    
            </section>
        </div>
  </div>
</template>

<script>

import MobileNav from '~/components/ui/MobileNav.vue'
import SideNav from '~/components/ui/SideNav.vue'
import BookingForm from '~/components/booking/form/BookingForm.vue'

export default {
  components: {
    MobileNav,
    SideNav,
    BookingForm
  }
}
</script>

<style>

</style>
