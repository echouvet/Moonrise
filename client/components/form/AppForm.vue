
<template>
 <form @submit.prevent="postForm()" enctype="multipart/form-data" class="w-full container mx-auto">
	<h2 class="text-grey-dark">Modify Artists</h2>
	<div class="float-right">
		<select v-model="selected">
			<option v-for="(artist, index) in artists" :key="artist.id" >{{ index === 0 ? 'Choose' : artist.name}}</option>
		</select>
	</div>
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
		<input type="file" v-on:change="handleimg1()"  ref="img1" name="img1" accept="image/*"> 
		</div>
		<div class="w-full md:w-1/2 px-3">
		<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
			Image 2
		</label>
		<input type="file" v-on:change="handleimg2()"  ref="img2" name="img2" accept="image/*"> <br /> 
		</div>
		<div class="mt-6 w-full">
			<button class="bg-blue text-white py-2 px-4 font-semibold  float-left" @click="butn('new')" type="submit">Create new artist</button>
			<button class="bg-orange text-white py-2 px-4 font-semibold float-none" @click="butn('update')" style="margin-left:120px;" type="submit">Update Artist</button>
			<button class="bg-red text-white py-2 px-4 font-semibold  float-right" @click="butn('del')" type="submit">Delete Artist</button>
		</div>
		<div class="mt-6 w-full">
		</div>
		<div class="mt-6 w-full">
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
				artists: [],
				name: "",
				description : "",
				location : "",
				territory: "",
				links: [],
				img1: '', 
				img2: '',
				selected: '',
				button: '',
				merde: null
			}
		},
		mounted() {
			this.$http.get("http://localhost:4000/artists").then(response => {
				this.artists = JSON.parse(response.data)
			}).catch(err => { console.log(err) })
		},
		methods: {
			postForm() {
				const formData = new FormData();
				if (this.button == 'new') {
					formData.append("name", this.name);
					formData.append("description", this.description);
					formData.append("location", this.location);
					formData.append("territory", this.territory);
					formData.append("links", this.links);
					formData.append('img1', this.img1);
					formData.append('img2', this.img2);
					this.postrequest("http://localhost:4000/artist/create", formData)
				}
				else if (this.button == 'update')
				{
					formData.append("name", this.selected)
				}
				else if (this.button == 'del')
				{
					formData.append("name", this.selected)
					this.postrequest("http://localhost:4000/artist/delete", formData)
				}
				
			},
			getLinks(linksdata) {
				this.links = JSON.stringify(linksdata)
			},
			handleimg1(){
    			this.img1 = this.$refs.img1.files[0]
  			},
  			handleimg2(){
    			this.img2 = this.$refs.img2.files[0]
  			},
  			postrequest(url, data) {
				this.$http.post(url, data).then(response => {
					console.log(data)
					if (response.data)
					{
						if (response.data.error)
							console.log("Error : " + response.data.error); //faire ceci dans une div rouge;P
						else if (response.data.success)
							console.log("Success : " + response.data.success); //faire ceci dans une div verte ;P
					}
				}).catch(error => console.error(error)); //ceci on y touche pas xD
			}, 
			butn(button){
				this.button = button
			}
		}
	}
</script>