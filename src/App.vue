<template>
  <MainLayout :loading="loading" :player="player">
    <RecaptchaStep v-if="player.step === 'recaptcha'" :player="player" />
    <TutorialStep v-else-if="player.step === 'tutorial'" :player="player" />
    <GameStep v-else-if="player.step === 'game'" :player="player" />
    <SurveyStep v-else-if="player.step === 'survey'" />
    <FinishStep v-else-if="player.step === 'submit'" :player="player" />
    <div v-else-if="player.step === 'failedCaptcha'">
      <h2>Unfortunately, you failed the reCAPTCHA, please return the HIT.</h2>
    </div>
  </MainLayout>
</template>

<script>
/* global Breadboard */
import { DefaultView } from '@human-nature-lab/breadboard-client'
import MainLayout from './layouts/MainLayout.vue'
import RecaptchaStep from './steps/RecaptchaStep'
import GameStep from './steps/GameStep'
import TutorialStep from './steps/TutorialStep'
import SurveyStep from './steps/SurveyStep'
import FinishStep from './steps/FinishStep'

export default {
  name: 'App',
  components: { MainLayout, RecaptchaStep, GameStep, TutorialStep, SurveyStep, FinishStep },
  mixins: [
    DefaultView, // DefaultView handles synchronizing the player and graph data from breadboard
  ],

  data () {
    return {
      loading: true,
    }
  },

  created () {
    // Watches until the player has loaded and then stops watching
    const unwatch = this.$watch('player', player => {
      if (player) {
        this.loading = false
        setTimeout(() => unwatch())
      }
    }, { immediate: true })
  }
  
}

</script>

<style lang="scss">

</style>
