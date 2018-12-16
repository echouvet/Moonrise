<template>
    <form class="w-full">
        <!-- <p class="bg-moonrise mb-4 p-2 text-white text-sm">We require all sections of this form completing to process this request.</p> -->
        <p class="uppercase bg-moonrise mb-4 p-2 text-white text-sm">1. Booker information</p>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <app-input v-model="booking_request.booker_orga_handle" type="text">
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
          Office phone (<span class="text-red text-xs">inc international code</span>)
        </app-input>
    </div>
    <div class="w-full md:w-1/2 px-3">
         <app-input v-model="booking_request.booker_mobile_phone" type="text">
            Mobile (<span class="text-red text-xs">inc international code</span>)
        </app-input>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
         <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
           Are you responsible for signing contract and making payments ?
         </label>
         <app-toggle-input 
                @click="isBookerResponsibleForPaymentsAndSigningContracts" 
                :bool="booking_request.booker_is_responsible_for_payments_and_contracts.is_responsible">
          </app-toggle-input>
    </div>
    <div v-if="!booking_request.booker_is_responsible_for_payments_and_contracts.is_responsible" class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <app-input v-model="booking_request.booker_is_responsible_for_payments_and_contracts.full_name" type="text">
          Please tell us who is responsible (<span class="text-red text-xs">Full Name</span>)
        </app-input>
    </div>
    
  </div>

  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
           Are you responsible for the advancing ?
         </label>
         <app-toggle-input 
                @click="isBookerResponsibleForAdvancings" 
                :bool="booking_request.booker_is_responsible_advancing.is_responsible">
          </app-toggle-input>
    </div>
  </div>
  <template v-if="!booking_request.booker_is_responsible_advancing.is_responsible">
    <p class="uppercase bg-moonrise mb-4 p-2 text-white text-sm">Please tell us who is making the advancing</p>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <app-input v-model="booking_request.booker_is_responsible_advancing.full_name" type="text">
          Full Name
        </app-input>
    </div>
    <div class="w-full md:w-1/2 px-3">
         <app-input v-model="booking_request.booker_is_responsible_advancing.email" type="email">
          Email
        </app-input>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <app-input v-model="booking_request.booker_is_responsible_advancing.phone_number" type="text">
            Phone Number (<span class="text-red text-xs">inc international code</span>)
        </app-input>
    </div>
  </div>
  </template>
   
   <p class="uppercase bg-moonrise mb-4 p-2 text-white text-sm">2. Company Data for contract and invoice</p>
    
    <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <app-input v-model="booking_request.company_name" type="text">
            Company name
        </app-input>
    </div>
    <div class="w-full md:w-1/2 px-3">
         <app-input v-model="booking_request.company_website" type="text">
            Company Website
        </app-input>
    </div>
  </div>

  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
        <app-input v-model="booking_request.company_address" type="text">
            Company / Promoter address (<span class="text-red text-xs">please include zip code</span>)
        </app-input>
    </div>
  </div>

  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <app-input v-model="booking_request.company_contract_signatory" type="text">
          Contract signatory (<span class="text-red text-xs">full name</span>)
        </app-input>
    </div>
    <div class="w-full md:w-1/2 px-3">
         <app-input v-model="booking_request.company_signatory_position" type="text">
            Position in organisation
        </app-input>
    </div>
  </div>
    <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <app-input v-model="booking_request.company_email" type="email">
          Company email
        </app-input>
    </div>
  </div>

  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <app-input v-model="booking_request.company_office_phone" type="text">
          Office phone (<span class="text-red text-xs">inc international code</span>)
        </app-input>
    </div>
    <div class="w-full md:w-1/2 px-3">
         <app-input v-model="booking_request.company_mobile_phone" type="text">
            Mobile (<span class="text-red text-xs">inc international code</span>)
        </app-input>
    </div>
  </div>
    <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <app-input v-model="booking_request.company_vat" type="text">
          Company VAT Number
        </app-input>
    </div>
  </div>
   
   <p class="uppercase bg-moonrise mb-4 p-2 text-white text-sm">3. Event information</p>

    <p class="uppercase bg-moonrise mb-4 p-2 text-white text-sm">4. Venue information</p>
    <p class="uppercase bg-moonrise mb-4 p-2 text-white text-sm">5. Event sponsors</p>
    <p class="uppercase bg-moonrise mb-4 p-2 text-white text-sm">6. Extra information</p>

</form>
</template>


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
import AppToggleInput from '~/components/ui/AppToggleInput.vue'
import AppInput from '~/components/ui/AppInput.vue'

export default {
    components: {
        AppInput,
        AppToggleInput
    },
    data() {
        return {
            booking_request: {
                booker_orga_handle: "",
                booker_website: "",
                booker_address: "",
                booker_contact_person: "",
                booker_contact_email: "",
                booker_office_phone: "",
                booker_mobile_phone: "",
                booker_is_responsible_for_payments_and_contracts: {
                    is_responsible: true,
                    // if false
                    full_name: "",
                },
                booker_is_responsible_advancing: {
                    is_responsible: true,
                    // if false
                    full_name: "",
                    email: "",
                    phone_number: ""
                },
                company_name: "",
                company_email: "",
                company_address: "",
                company_office_phone: "",
                company_mobile_phone: "",
                company_vat: "",
                company_contract_signatory: "",
                company_signatory_position: ""

            }
        }
    },
    methods: {
      isBookerResponsibleForPaymentsAndSigningContracts(val) {
        this.booking_request.booker_is_responsible_for_payments_and_contracts.is_responsible = val
      },
      isBookerResponsibleForAdvancings(val) {
        this.booking_request.booker_is_responsible_advancing.is_responsible = val
      }
    }
}
</script>
