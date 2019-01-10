<template>
    <div>
    	<mobile-nav/>
    	<div class="flex flex-wrap mb-6">
	    	<side-nav/>
	        <audio controls>
				  <source src="/music/test.mp3" type="audio/mpeg">
				  <!-- <source src="horse.mp3" type="audio/mpeg"> -->
				Your browser does not support the audio element.
			</audio>
			<audio controls>
				 <source src="/music/test3.mp3" type="audio/mpeg">
			</audio>
			<audio controls>
				 <source src="/music/test2.mp3" type="audio/mpeg">
			</audio>
		</div>
    </div>
</template>

<script>

	import MobileNav from '~/components/ui/MobileNav.vue'
	import SideNav from '~/components/ui/SideNav.vue'
export default {
components: {
    MobileNav,
    SideNav
  }
}
</script>

<style>

</style>
