
<template>
 <form @submit.prevent="postForm()" enctype="multipart/form-data" class="w-full max-w-md">
	<h2 class="text-grey-dark">New Artist</h2>
	<hr class="border border-grey-lighter">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
        Artist Name
      </label>
      <input v-model="name" placeholder="Artist Full Name" name="name" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text">
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
        Location
      </label>
      <input v-model="location" placeholder="Location" name="Location" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey">
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
        Territory
      </label>
      <input v-model="territory" placeholder="Territory" name="Territory" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text">
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password">
        Description
      </label>
      <textarea v-model="description" placeholder="Description" name="Description" rows="4" cols="50" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey"></textarea>
	</div>
  </div>
		<div class="flex flex-wrap -mx-3 mb-6">
			<div class="w-full px-3">
				<multiple-input @input="getLinks($event)"></multiple-input>
			</div>
		</div>
    <div class="flex flex-wrap -mx-3 mb-6">
		<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
		<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
			Image 1
		</label>
		<input type="file" name="img1" accept="image/*"> 
		</div>
		<div class="w-full md:w-1/2 px-3">
		<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
			Image 2
		</label>
		<input type="file" name="img2" accept="image/*"> <br /> 
		</div>
		<div class="mt-6 w-full">
			<button class="bg-blue text-white py-2 px-4 font-semibold  float-right" type="submit">Create new artist</button>
		</div>
  	</div>
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