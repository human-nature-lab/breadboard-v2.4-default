<template>
  <v-app id="app">
    <v-app-bar absolute dark dense>
      <v-spacer />
      <v-toolbar-title>Breadboard v2.4 Example</v-toolbar-title>
      <v-spacer />
    </v-app-bar>
    <v-row>
      <v-col>
        <v-progress-linear v-if="loading" indeterminate />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <Tutorial v-if="player.step === 'tutorial'" :player="player" />
        <Game v-else-if="player.step === 'game'" :player="player" />
        <Survey v-else-if="player.step === 'survey'" />
        <Finish v-else-if="player.step === 'submit'" :player="player" />
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
/* global Breadboard */
import Game from './steps/Game'
import Tutorial from './steps/Tutorial'
import Survey from './steps/Survey'
import Finish from "./steps/Finish";

export default {
  name: 'App',
  components: { Game, Tutorial, Survey, Finish },

  data () {
    return {
      loading: true,
      player: {
        step: 'tutorial',
        bonus: 0
      },
    }
  },

  created () {
    Breadboard.on('player', this.updatePlayer)
  },

  beforeDestroy () {
    Breadboard.off('player', this.updatePlayer)
  },

  methods: {
    updatePlayer (player) {
      if (this.loading) {
        this.loading = false
      }
      this.player = player
    },
  }
}

</script>

<style lang="scss">

</style>
