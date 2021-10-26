<template>
  <v-main class="main">
    <v-container>
      <v-card>
        <v-container fluid>
          <div v-html="player.submit"></div>
        </v-container>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>

export default {

  mounted: function () {
  },

  props: {
    player: Object
  },

  filters: {
  },

  methods: {
  },

  computed: {
  }
}
</script>

<style>
</style>
