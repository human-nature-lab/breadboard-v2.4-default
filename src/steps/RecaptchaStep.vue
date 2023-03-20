<template>
  <v-row class="justify-center">
    <Recaptcha class="mx-auto" :site-key="siteKey" :theme="theme" />
  </v-row>
</template>

<script>
import Recaptcha from '@/components/Recaptcha.vue'

export default {
  data() {
    return {
      siteKey: process.env.VUE_APP_CAPTCHA_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
      theme: 'light',
    }
  },
  components: { Recaptcha },
}
</script>