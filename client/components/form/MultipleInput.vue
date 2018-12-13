
<template>
<div>
    <div class="flex flex-wrap -mx-3 mb-6" v-for="(item, index) in values" :key="index">
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
         <a href="#" class="text-red no-underline" @click.prevent="deleteValue(index)">Remove</a>
      </div>
        <a href="#" class="text-grey-dark no-underline ml-3" @click.prevent="addValue()">Add link</a>
  </div>
  </div>
</template>

<script>
  export default {
	data: function () {
    	return { values: [{}] };
  },
  methods: {
    updateValue() {
      this.$emit('input', this.values);
    },
    deleteValue(index) {
      if (this.values.length === 1)
        return ;
      this.values.splice(index, 1);
      this.$emit('input', this.values);
    },
    addValue() {
      this.values.push({});
      this.$emit('input', this.values);
    }    
  }
}
</script>