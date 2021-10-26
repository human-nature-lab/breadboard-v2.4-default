<template>
  <v-main>
    <v-row>
      <v-col>
        <h1>Breadboard experiment goes here</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h3>You have been waiting for {{player.timeStep}} seconds.</h3>
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
/* global Breadboard */

export default {
  name: 'Game',

  props: {
    player: Object
  },

  mounted () {
  },

  watch: {
  },

  components: {
  },

  filters: {
  },

  data: () => ({
  }),

  computed: {
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
