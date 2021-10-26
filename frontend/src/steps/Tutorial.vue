<template>
  <v-main class="main">
    <tutorial-step
        :step="step"
        @next="step++"
        @back="step--"
        @done="onDone"
    />
  </v-main>
</template>

<script>
/* global Breadboard */
import TutorialStep from '../components/TutorialStep'

export default {

  props: {
    player: Object
  },

  components: {
    TutorialStep,
  },

  filters: {
  },

  data: () => ({
    step: 1,
  }),

  methods: {
    onDone () {
      Breadboard.send('done')
    },
  },

  computed: {
  },

  watch: {
  },

}
</script>

<style>
</style>
