<template>
    <div class="flex items-center text-center">
        <div @click="toggleState('yes')" :class="isActive ? 'bg-grey-darkest text-white' : ' text-moonrise font-semibold'" class="w-1/2 cursor-pointer py-2">
            Yes
        </div>
        <div @click="toggleState('no')" :class="!isActive ? 'bg-grey-darkest text-white' : ' text-moonrise font-semibold'" class="w-1/2 cursor-pointer py-2">
            No
        </div>
    </div>
</template>

<script>
export default {
    props: ['bool'],
    methods: {
        toggleState(val) {
            if (val === 'no') {
                this.$emit('click', false)
            }   
            else if (val === 'yes') {
                this.$emit('click', true)
            }
        }
    },
    computed: {
        isActive() {
            if (this.bool)
                return true
            return false
        }
    }
}
</script>

<style>

</style>
