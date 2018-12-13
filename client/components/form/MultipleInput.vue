
<template>
<div>
    <div class="flex flex-wrap -mx-3 mb-6" v-for="(item, index) in values">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
          Link Name
        </label>
         <input type="text" placeholder="Link Name" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
               v-model="item.link_name" @input="updateValue()" name="link_name"/>

      </div>
      <div class="w-full md:w-1/2 px-3">
        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
          Link
        </label>
        <input type="text" placeholder="Actual Link" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
               v-model="item.link" @input="updateValue()" name="link"/>
         <a href="#" @click.prevent="deleteValue(index)">x</a>
      </div>
        <a href="#" @click.prevent="addValue()">Add more</a>
  </div>
  </div>
</template>

<script>
  export default {
	data: function () {
    	return { values: [[""]] };
  },
  methods: {
    updateValue: function() {
      this.$emit('input', this.values);
    },
    deleteValue: function(index) {
      this.values.splice(index, 1);
      this.$emit('input', this.values);
    },
    addValue: function() {
      this.values.push({});
      this.$emit('input', this.values);
    }    
  }
}
</script>