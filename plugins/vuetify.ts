// Import the Vuetify styles and icons
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Import Vuetify and the specific components
import { createVuetify } from 'vuetify'
import { VNumberInput } from 'vuetify/labs/VNumberInput'
import { VTimePicker } from 'vuetify/labs/VTimePicker'

// Define the Nuxt plugin to use Vuetify
export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components: {
      VNumberInput,
      VTimePicker,
    },
    theme: {
      themes: {
        light: {
          // Customize theme here
        },
      },
    },
  })

  // Use Vuetify in the Nuxt app
  nuxtApp.vueApp.use(vuetify)
})