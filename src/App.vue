<template>
  <MainLayout :loading="loading">
    <Recaptcha v-if="player.step === 'recaptcha'" :player="player" />
    <Tutorial v-else-if="player.step === 'tutorial'" :player="player" />
    <Game v-else-if="player.step === 'game'" :player="player" />
    <Survey v-else-if="player.step === 'survey'" />
    <Finish v-else-if="player.step === 'submit'" :player="player" />
    <div v-else-if="player.step === 'failedCaptcha'">
      <h2>Unfortunately, you failed the reCAPTCHA, please return the HIT.</h2>
    </div>
  </MainLayout>
</template>

<script>
/* global Breadboard */
import { DefaultView } from '@human-nature-lab/breadboard-client'
import MainLayout from './layouts/MainLayout.vue'
import Recaptcha from './steps/Recaptcha'
import Game from './steps/Game'
import Tutorial from './steps/Tutorial'
import Survey from './steps/Survey'
import Finish from "./steps/Finish";

export default {
  name: 'App',
  components: { MainLayout, Recaptcha, Game, Tutorial, Survey, Finish },
  mixins: [
    DefaultView, // DefaultView handles synchronizing the player and graph data from breadboard
  ],

  data () {
    return {
      loading: true,
    }
  },

  created () {
    // Watches until the player has loaded and stops watching
    const unwatch = this.$watch('player', (player) => {
      if (player) {
        this.loading = false
        setTimeout(unwatch)
      }
    }, { immediate: true })
  }
  
}

</script>

<style lang="scss">

</style>
