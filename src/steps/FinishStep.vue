<template>
  <v-container>
    <v-card>
      <v-container>
        <AMTSubmit
          :player="player"
          comments
          :reason="player.reason"
          :bonus="player.bonus" />
      </v-container>
    </v-card>
  </v-container>

</template>

<script>
import AMTSubmit from '@/components/AMTSubmit.vue'

export default {
  components: { AMTSubmit },
  props: {
      player: Object
  },
}
</script>

<style>
</style>
