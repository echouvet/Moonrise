<template>
    <form class="w-full max-w-md">
        <p class="bg-moonrise mb-4 p-2 text-white text-sm">We require all sections of this form completing to process this request.</p>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <app-input v-model="booking_request.orga_handle">
            Booker Organisation / Company Name 
        </app-input>
    </div>
    <div class="w-full md:w-1/2 px-3">
         <app-input v-model="booking_request.orga_website">
            Website
        </app-input>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
        <app-input v-model="booking_request.orga_address">
            Booker address (please include zip code)
        </app-input>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
        City
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-city" type="text" placeholder="Albuquerque">
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
        State
      </label>
      <div class="relative">
        <select class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-state">
          <option>New Mexico</option>
          <option>Missouri</option>
          <option>Texas</option>
        </select>
        <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-zip">
        Zip
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-zip" type="text" placeholder="90210">
    </div>
  </div>
</form>
</template>

// Company/Promoter address (please include zip code):
// Person handling booking (full name):
// Email address:	
// Office telephone inc full international dial code:			
// Mobile telephone inc full international dial code:
// Are you responsible for signing contract and making payments (Y/N):
// Are you responsible for the advancing, if not please provide full name, email and telephone number?
// Person responsible for signing contract and making payments (full name):	


// Company Data for contract and invoice  Company Name: Company/Promoter address (please include zip code): VAT number: 	 Website: Contract signatory full name:
// Position in Organisation Email address: Office telephone inc full international dial code:			
// Mobile telephone inc full international dial code:

// Event date: (DD/MM/YY)
// Event name:
// Requested artist(s):
// Line up (please advise if artists are confirmed or planned): Artist Fee offer:	
// Artist fee will be paid by cash or bank transfer? Artist Work Visa Required?
				
// Venue:					
// Venue address (please include zip code): Venue License granted? (YES/NO): Venue website:
// Venue capacity:
// Room capacity:
// Ticket price:	
// DJ booth spec:				
// Opening hours: (Give venue opening and closing times in 24H format):
// Planned performance time for the artist (give start and finish time in 24H format):

// Closest airport:	
// Latest arrival time for artist in airport (24H format):
// Drive time hotel to airport (please consider traffic):
				
// Event sponsors?:
// Line up will be announced on (DD/MM)?:
// Alternative artist(s): if requested artist is unavailable, which other Moon Rise Agency artist would you request?			

// IMPORTANT (please complete in full):
// Artists booked in this venue during last 12 months (supply names and exact dates):  Artists booked by the promoter in different venues during the last 12 months (supply names and exact dates):	 		
// References (please give names and email addresses of agencies/artists who would give promoter references):	


<script>


import AppInput from '~/components/ui/AppInput.vue'

export default {
    components: {
        AppInput
    },
    data() {
        return {
            booking_request: {
                orga_handle: "",
                orga_website: "",
            }
        }
    }
}
</script>

<style>

</style>
