<template>
  <v-app>
    <v-app-bar dark app>
      <v-spacer />
      <v-toolbar-title>Breadboard v2.4 Example</v-toolbar-title>
      <v-spacer />
    </v-app-bar>
    <ConnectionStatus />
    <PlayerTimers
      v-if="!hideTimers"
      :player="player"
      class="flex-grow-0"
    />
    <v-main>
      <v-progress-linear v-if="loading" indeterminate />
      <v-col>
        <slot />
      </v-col>
    </v-main>
  </v-app>
</template>

<script>
import { ConnectionStatus, PlayerTimers } from '@human-nature-lab/breadboard-client'

export default {
  name: 'MainLayout',
  components: { PlayerTimers, ConnectionStatus },
  props: {
    loading: Boolean,
    hideTimers: Boolean,
    player: Object,
  },
}
</script>

<style lang="sass">
  
</style>