<template>
  <div id="recaptcha"></div>
</template>

<script>

export default {
  /* global Breadboard */
  /* global grecaptcha */

  mounted() {
    grecaptcha.render('recaptcha', {
      'sitekey': '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
      'theme': 'light',
      'callback': this.onRecaptchaResponse
    })
  },

  props: {
  },

  components: {
  },

  filters: {
  },

  data: () => ({
    step: 1,
  }),

  methods: {
    onRecaptchaResponse (response) {
      Breadboard.send('verifyRecaptcha', response)
    }
  },

  computed: {
  },

  watch: {
  },

}
</script>

<style>
</style>
