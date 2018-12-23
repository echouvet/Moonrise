
<template>
 <form v-if="getToken" @submit.prevent="postForm()" enctype="multipart/form-data" class="w-full container mx-auto">
	<h2 class="text-grey-dark">Modify Artists</h2>
	<div class="w-full my-4">
		<select v-model="edited" @change="setArtist(edited.id)" class="w-full md:w-1/3 h-12 block bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
			<option value="0">Select Artist</option>
			<option v-for="artist in artists" :key="artist.id" :value="artist">{{ artist.name }}</option>
		</select>
	</div>
	<hr class="border border-grey-lighter">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
        Artist Name
      </label>
      <input v-model="current_artist.name" placeholder="Artist Full Name" name="name" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text">
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
        Location
      </label>
      <input v-model="current_artist.location" placeholder="Location" name="Location" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey">
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
        Territory
      </label>
      <input v-model="current_artist.territory" placeholder="Territory" name="Territory" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text">
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password">
        Description
      </label>
      <textarea v-model="current_artist.description" placeholder="Description" name="Description" rows="4" cols="50" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey"></textarea>
	</div>
  </div>
		<div class="flex flex-wrap -mx-3 mb-6">
			<div class="w-full px-3">
				<multiple-input :links="current_artist.links" @input="getLinks($event)"></multiple-input>
			</div>
		</div>
    <div class="flex flex-wrap -mx-3 mb-6">
		<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
			<div class="overflow-hidden relative w-64 mt-4 mb-4">
                <button class="bg-indigo hover:bg-indigo-dark text-white font-bold py-2 px-4 w-full inline-flex items-center">
                    <svg fill="#FFF" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"/>
                    </svg>
                    <span class="ml-2">Image 1</span>
                </button>
                <input class="cursor-pointer absolute block opacity-0 pin-r pin-t" type="file" v-on:change="handleimg1()"  ref="img1" name="img1" accept="image/*">
                <!-- <img :src="'../..' + current_artist.img1" style="width: 500px"/> -->
            </div>
		</div>
		<div class="w-full md:w-1/2 px-3">
		<div class="overflow-hidden relative w-64 mt-4 mb-4">
                <button class="bg-indigo hover:bg-indigo-dark text-white font-bold py-2 px-4 w-full inline-flex items-center">
                    <svg fill="#FFF" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"/>
                    </svg>
                    <span class="ml-2">Image 2</span>
                </button>
                <input class="cursor-pointer absolute block opacity-0 pin-r pin-t" type="file" v-on:change="handleimg2()"  ref="img2" name="img2" accept="image/*">
                <!-- <img :src="current_artist.img1" style="width: 500px"/> -->
            </div>
		</div>
		<div class="flex justify-between mt-6 w-full px-3">
			<button class="bg-blue text-white py-2 px-4 font-semibold  " @click="butn('new')" type="submit">Create new artist</button>
			<button class="bg-orange text-white py-2 px-4 font-semibold" @click="butn('update')"  type="submit">Update Artist</button>
			<button class="bg-red text-white py-2 px-4 font-semibold" @click="butn('del')" type="submit">Delete Artist</button>
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
import { mapGetters, mapActions } from 'vuex'

export default {
		components: {
			MultipleInput
		},
		data () {
			return {
				artists: [],
				current_artist: {},
				links: [],
				button: '',
				edited: 0
			}
		},
		watch: {
			getArtists(val) {
				this.artists = val
			}
		},
		computed: {
			...mapGetters({
				getToken: 'auth/getToken',
				getArtists: 'artists/getArtists',
				getExpDate: 'auth/getExpDate'
			})
		},
		methods: {
			...mapActions({
				logUserOut: 'auth/logUserOut'
			}),
			setArtist(id) {
				this.current_artist = this.artists.find(el => {return (el.id === id)})
			},
			postForm() {
				const formData = new FormData()
				if (this.button == 'new') {
					const formData = this.appendall()
					this.postrequest("http://localhost:5050/moonrise/create", formData)
				}
				else if (this.button == 'update') {
					const formData = this.appendall()
					this.postrequest("http://localhost:5050/moonrise/update", formData)
				}
				else if (this.button == 'del')
				{
					const formData = new FormData()
					formData.append("id", this.current_artist.id)
					console.log(this.current_artist.id)
					this.postrequest("http://localhost:5050/moonrise/delete", formData)
				}
				
			},
			getLinks(linksdata) {
				this.links = JSON.stringify(linksdata)
			},
			handleimg1(){
    			this.current_artist.img1 = this.$refs.img1.files[0]
  			},
  			handleimg2(){
    			this.current_artist.img2 = this.$refs.img2.files[0]
  			},
  			postrequest(url, data) {
				if (this.checkForExpDate()) {
					this.$axios.post(url, data, {
					headers: {
							'authorization': `Bearer ${this.getToken}`,
							'Accept' : 'application/json',
							'Content-Type': 'application/json'
					}
				}).then(response => {
					if (response.data)
					{
						if (response.data.error)
							alert("Error : " + response.data.error) //faire ceci dans une div rougeP
						else if (response.data.success) {
								this.current_artist = {}
								alert("Success : " + response.data.success)
						}
					}
				}).catch(error => console.error(error)) //ceci on y touche pas xD
				}
			},
			appendall(){
				const formData = new FormData()
				formData.append("id", this.current_artist.id)
				formData.append("name", this.current_artist.name)
				formData.append("description", this.current_artist.description)
				formData.append("location", this.current_artist.location)
				formData.append("territory", this.current_artist.territory)
				formData.append("links", this.links)
				formData.append('img1', this.current_artist.img1)
				formData.append('img2', this.current_artist.img2)
				return (formData)
			},
			butn(button){
				this.button = button
			},
			checkForExpDate() {
				let now = new Date() 
				let exp = new Date(this.getExpDate)
				if (now >= exp) {
					this.logUserOut()
					this.$router.push('/login')
				}
				else 
					return true
				}
		}
	}
</script>