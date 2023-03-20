<template>
  <div id="recaptcha" />
</template>

<script>
  /* global grecaptcha */
  export default {
    name: 'Recaptcha',
    props: {
      siteKey: String,
      theme: {
        type: String,
        default: 'light',
      },
    },
    mounted() {
      grecaptcha.render('recaptcha', {
        sitekey: this.siteKey,
        theme: this.theme,
        callback: this.onRecaptchaResponse
      })
    },
    methods: {
      onRecaptchaResponse (response) {
        Breadboard.send('verifyRecaptcha', response)
      }
    }
  }
</script>
