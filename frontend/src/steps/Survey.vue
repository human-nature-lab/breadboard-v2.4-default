<template>
  <v-main class="main">
    <v-container>
      <v-card>
        <v-container fluid>
          <v-form ref="form">
            <h3>
              Please take your time and answer the following questions carefully.
            </h3>
            <v-radio-group
                v-for="q in questions"
                v-bind:key="q.key"
                :label="q.label"
                v-model="q.model">
              <template v-slot:label>
                <h3>{{q.label}}</h3>
              </template>
              <v-radio
                  v-bind:key="q.key + '-' + o.value"
                  v-for="o in q.options"
                  :label="o.label"
                  :value="o.value"
              ></v-radio>
            </v-radio-group>
            <v-btn :disabled="!formValid" @click="submitForm">Submit</v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>
/* global Breadboard */

export default {

  data () {
    return {
      q1: undefined,
      q2: undefined,
      q3: undefined,
      questions: [
        {
          label: 'Text of question 1 here.',
          key: 'q1',
          model: this.q1,
          options: [
            {
              label: 'Answer 1',
              value: 'q1-a1'
            },
            {
              label: 'Answer 2',
              value: 'q1-a2'
            },
            {
              label: 'Answer 3',
              value: 'q1-a3'
            },
          ]
        },
        {
          label: 'Text of question 2 here.',
          key: 'q2',
          model: this.q2,
          options: [
            {
              label: 'Answer 1',
              value: 'q2-a1'
            },
            {
              label: 'Answer 2',
              value: 'q2-a2'
            },
            {
              label: 'Answer 3',
              value: 'q2-a3'
            },
          ]
        },
        {
          label: 'Text of question 3 here.',
          key: 'q3',
          model: this.q3,
          options: [
            {
              label: 'Answer 1',
              value: 'q3-a1'
            },
            {
              label: 'Answer 2',
              value: 'q3-a2'
            },
            {
              label: 'Answer 3',
              value: 'q3-a3'
            },
          ]
        },
      ],
    }
  },

  computed: {
    formValid () {
      let valid = true
      this.questions.forEach(q => {
        if (q.model === undefined) {
          valid = false
        }
      })
      return valid
    }
  },

  props: {
  },

  methods: {
    submitForm () {
      const data = {}
      this.questions.forEach(q => {
        data[q.key] = q.model
      })
      Breadboard.send('displaySubmit', data)
    },
  }
}
</script>

<style>
</style>
