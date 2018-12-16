<template>
    <form class="w-full max-w-md">
        <!-- <p class="bg-moonrise mb-4 p-2 text-white text-sm">We require all sections of this form completing to process this request.</p> -->
        <p class="uppercase bg-moonrise mb-4 p-2 text-white text-sm">1. Your information</p>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <app-input v-model="booking_request.booker_handle" type="text">
            Booker organisation name
        </app-input>
    </div>
    <div class="w-full md:w-1/2 px-3">
         <app-input v-model="booking_request.booker_website" type="text">
            Booker Website
        </app-input>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
        <app-input v-model="booking_request.booker_address" type="text">
            Booker address (<span class="text-red text-xs">please include zip code</span>)
        </app-input>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <app-input v-model="booking_request.booker_contact_person" type="text">
          Booker Full Name
        </app-input>
    </div>
    <div class="w-full md:w-1/2 px-3">
         <app-input v-model="booking_request.booker_contact_email" type="email">
            Booker Email
        </app-input>
    </div>
  </div>
   <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <app-input v-model="booking_request.booker_office_phone" type="text">
          Office telephone <span class="text-red text-xs">inc full international dial code</span>
        </app-input>
    </div>
    <div class="w-full md:w-1/2 px-3">
         <app-input v-model="booking_request.booker_mobile_phone" type="text">
            Mobile telephone inc full international dial code
        </app-input>
    </div>
  </div>
</form>
</template>



// Are you responsible for signing contract and making payments (Y/N):
// Are you responsible for the advancing, if not please provide full name, email and telephone number?
// Person responsible for signing contract and making payments (full name):	


// Company Data for contract and invoice 
// Company Name:
//Company/Promoter address (please include zip code):
//VAT number: 	
//Website:
//Contract signatory full name:
// Position in Organisation
//Email address:
//Office telephone inc full international dial code:			
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
                booker_handle: "",
                booker_website: "",
                booker_address: "",
                booker_contact_person: "",
                booker_contact_email: "",
                booker_office_phone: "",
                booker_mobile_phone: ""
            }
        }
    }
}
</script>

<style>

</style>
