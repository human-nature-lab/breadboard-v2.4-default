<template>
  <v-card flat>
    <v-system-bar class="v-card-bar" dark>
      <span>Tutorial</span>
    </v-system-bar>
    <v-card>
      <v-card-text v-if="step === 1">
        <p>This tutorial box will walk you through the elements of this game.</p>
        <p>Use the next and back buttons to proceed through the tutorial or go back and revisit parts you don't understand.</p>
        <p>Click Next to proceed.</p>
      </v-card-text>
      <v-card-text v-if="step === 2">
        <p>Step 2 of the Tutorial.</p>
      </v-card-text>
      <v-card-text v-if="step === 3">
        <p>Step 3 of the Tutorial.</p>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="clickBack" :disabled="step < 2">Back</v-btn>
        <v-spacer />
        <v-btn @click="clickNext" v-if="step < maxSteps">Next</v-btn>
        <v-btn @click="clickDone" v-else>Begin</v-btn>
      </v-card-actions>
    </v-card>
  </v-card>
</template>

<script>
export default {
  name: 'TutorialBox',

  data: () => ({
    maxSteps: 3
  }),

  props: ['step'],

  methods: {
      clickNext: function () {
        this.$emit('next')
      },
      clickBack: function () {
        this.$emit('back')
      },
      clickDone: function () {
        this.$emit('done')
      }
    },
  }
</script>

<style>
</style>
