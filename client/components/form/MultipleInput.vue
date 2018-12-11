
<template>
    <div class="multi-text">
      <div v-for="(item, index) in values">
        <input type="text" placeholder="Link Name" class="border border-grey my-2"
               v-model="item.link_name" @input="updateValue()" name="link_name"/>

        <input type="text" placeholder="Actual Link" class="border border-grey my-2"
               v-model="item.link" @input="updateValue()" name="link"/>

        <a href="#" @click="deleteValue(index)">x</a>
      </div>    
      <a href="#" @click="addValue()">Add more</a>
  </div>
</template>

<script>
  export default {
	data: function () {
    	return { values: [] };
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