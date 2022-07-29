<template>
  <v-main>
    <v-row>
      <v-col>
        <h1>Breadboard experiment goes here</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h3>You have been waiting for {{player.timeStep}} / {{player.gameLength}} seconds.</h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn @click="finishGame">Submit</v-btn>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>

export default {
  name: 'Game',

  props: {
    player: Object
  },

  methods: {
    finishGame () {
      Breadboard.send('displaySurvey')
    },
  }
}
</script>

<style lang="scss">
</style>
