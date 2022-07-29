<template>
  <v-app>
    <v-app-bar dark app>
      <v-spacer />
      <v-toolbar-title>Breadboard v2.4 Example</v-toolbar-title>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-progress-linear v-if="loading" indeterminate />
      <v-col>
        <slot />
      </v-col>
    </v-main>
  </v-app>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'MainLayout',
    props: {
      loading: Boolean,
    },
  })
</script>

<style lang="sass">
  
</style>