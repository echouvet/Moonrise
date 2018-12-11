
<template>
	<form  @submit.prevent="postForm()" enctype="multipart/form-data"> <br />
		<input class="border border-grey my-2" v-model="name" placeholder="Artist Full Name" name="name" > <br /> 
		<input class="border border-grey my-2" v-model="description" placeholder="Description" name="Description"> <br />   
		<input class="border border-grey my-2" v-model="location" placeholder="Location" name="Location"> <br />   
		<input class="border border-grey my-2" v-model="territory" placeholder="Territory" name="Territory"> <br />   
		
		<multiple-input @input="getLinks($event)"></multiple-input>

		<input type="file" name="img1" accept="image/*"> <br /> 
		<input type="file" name="img2" accept="image/*"> <br /> 
		<input class="border border-grey my-2" type=submit>
	</form>
</template>

<script>
import MultipleInput from './MultipleInput.vue'

	export default {
		components: {
			MultipleInput
		},
		data () {
			return {
			    config: {headers: { 'Content-Type': 'multipart/form-data'}},
			   	url: "http://localhost:4000/artist/create",
				name: "",
				description : "",
				location : "",
				territory: "",
				links: {},
			}
		},
		methods: {
			postForm() {
				const formData = new FormData();
				formData.append("name", this.name);
				formData.append("description", this.description);
				formData.append("location", this.location);
				formData.append("territory", this.territory);
				formData.append("links", this.links);

				 this.$http.post(this.url, formData)
			      .then(response => {
			        console.log(response);
			      })
			      .catch(error => console.error(error));
			},
			getLinks(linksdata) {
				this.links = linksdata
			}
		},
	}
</script>